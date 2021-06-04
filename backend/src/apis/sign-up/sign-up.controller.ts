import {Request, Response} from 'express';
// DB
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import MailComposer from "nodemailer/lib/mail-composer";
import {insertProfile} from "../../utils/profile/insertProfile";

const mailgun = require("mailgun-js")



// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export async function signupProfileController(request: Request, response: Response) : Promise<Response|undefined>  {
    try {


        const {profileFirstName, profileLastName, profileEmail, profilePassword, profileUsername} = request.body;
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const profileAvatarUrl = "👽"
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}activation/${profileActivationToken}`
        console.log(profileActivationToken)

        const message = `<h2>Welcome to AlienGram!</h2>
<p>In order to start posting about aliens you must confirm your account.</p>
<p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: "One step closer to AlienGram",
            text: 'Click this link to activate',
            html: message
        }

        const profile: Profile = {
            profileId : null,
            profileActivationToken,
            profileAvatarUrl,
            profileEmail,
            profileFirstName,
            profileHash,
            profileLastName,
            profileUsername
        };

        const result = await insertProfile(profile)

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

            console.log(message.toString("ascii"))
            const compiledEmail = {
                to: profileEmail,
                message: message.toString("ascii")
            }

            const status: Status = {
                status: 200,
                message: "Profile successfully created please check your email.",
                data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                if (sendError) {
                    return response.json({status:418, data:null, message:"Error sending email"})
                }
                return response.json(status);
            });
        })
    } catch (error) {

        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}