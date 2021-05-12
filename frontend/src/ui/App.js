import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Home } from './Home';
import { FourOhFour } from './FourOhFour';
import { Welcome } from './Welcome';
import React from 'react';
import {NavBar} from "./components/NavBar";
import {Footer} from "./Footer";
import {Map} from "./Map"

export const App = () => (
	<>
		<NavBar />
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/fouroffour' component={FourOhFour} />
				<Route exact path='/welcome' component={Welcome} />
				<Route exact path='/map' component={Map} />
			</Switch>
		</BrowserRouter>
		<Footer />

	</>
)
