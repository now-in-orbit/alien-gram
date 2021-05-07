import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Home } from './Home';
import { FourOhFour } from './FourOhFour';
import { Welcome } from './Welcome';
import React from 'react';

export const App = () => (
	<>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/fouroffour' component={FourOhFour} />
				<Route exact path='/welcome' component={Welcome} />
			</Switch>
		</BrowserRouter>

	</>
)