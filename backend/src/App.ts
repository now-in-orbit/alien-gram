import express, {Application, Errback, ErrorRequestHandler, NextFunction, Request, Response} from 'express';
import morgan from 'morgan'

// Routes
import {indexRoute} from './apis/index.route'
import {postRoute} from './apis/post/post.route'
import {profileRoute} from './apis/profile/profileRoute'
import {transmissionRoute} from './apis/transmission/transmissionRoute'

const session = require('express-session')
const MemoryStore = require('memorystore')(session);
const helmet = require("helmet");
import passport from "passport";
import {passportStrategy} from "./apis/sign-in/sign-in.controller";
import {signupRoute} from "./apis/sign-up/signupRoute";
import {signinRoute} from "./apis/sign-in/signin.route";
import {signOutRoute} from "./apis/sign-out/sign-out.route";
import {sightingRoute} from './apis/sighting/sighting.route'
import {likeRoute} from "./apis/like/like.route";
import {dirtySightingRoute} from "./apis/dirty-sighting/dirty.sighting.route";


// The following class creates the app and instantiates the server
export class App {
	app: Application;

	constructor(
		private port?: number | string
	) {
		this.app = express()
		this.settings()
		this.middlewares()
		this.routes()
	}

	// private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
	public settings() {
		this.app.set('port', this.port || process.env.PORT || 4200)
	}

	// private method to setting up the middleware to handle json responses, one for dev and one for prod
	private middlewares() {

		const sessionConfig = {
			store: new MemoryStore({
				// @ts-ignore
				checkPeriod: 100800
			}),
			secret: "secret",
			saveUninitialized: true,
			resave: true,
			maxAge: "3h"
		};

		this.app.use(morgan('dev'))
		this.app.use(express.json())
		this.app.use(helmet())
		this.app.use(session(sessionConfig));
		this.app.use(passport.initialize());
		this.app.use(passport.session());
		passport.use(passportStrategy);
	}

	// private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
	private routes() {
		// TODO add "/apis"
		this.app.use('/apis', indexRoute)
		this.app.use('/apis/post', postRoute)
		this.app.use('/apis/profile', profileRoute)
		this.app.use('/apis/sign-up', signupRoute)
		this.app.use('/apis/sign-in', signinRoute)
		this.app.use('/apis/sign-out', signOutRoute)
		this.app.use('/apis/transmission', transmissionRoute)
		this.app.use('/apis/sighting', sightingRoute)
		this.app.use('/apis/like', likeRoute)
		this.app.use('/apis/dirty', dirtySightingRoute)
	}

	// starts the server and tells the terminal to post a message that the server is running and on what port
	public async listen(): Promise<void> {
		await this.app.listen(this.app.get('port'))
		console.log('Express application built successfully')
	}
}
