import { App } from './App'
import session from 'express-session';
import {Profile} from './utils/interfaces/Profile';

declare module 'express-session' {
    export interface SessionData {
        profile: Profile|undefined;
        signature: string|undefined;
        jwt: string|undefined
    }
}
// instantiate new app and pass it a port as an argument to start with (4200)
const main = async () => {
    try {
        const app = new App(4200)
        await app.listen()
    } catch (e) {
        console.log(e)
    }
};

main()
