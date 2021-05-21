import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Home } from './Home';
import { FourOhFour } from './FourOhFour';
import { Welcome } from './Welcome';
import React from 'react';
import {Navigation} from "./components/Navigation";
import {Map} from "./Map"
import {ProfileComponent} from './ProfileComponent';
import {Posts} from "./Posts"
import {Transmissions} from "./Transmissions";
import {Likes} from "./Likes";

export const App = () => (
	<>
		<Navigation />
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/fourohfour' component={FourOhFour} />
				<Route exact path='/welcome' component={Welcome} />
				<Route exact path='/map' component={Map} />
				<Route exact path='/profile' component={ProfileComponent}/>
				<Route exact path='/posts' component={Posts} />
				<Route exact path='/transmissions' component={Transmissions} />
				<Route exact path='/likes' component={Likes} />

			</Switch>
		</BrowserRouter>

	</>
)
