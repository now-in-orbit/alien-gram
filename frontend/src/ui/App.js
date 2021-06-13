import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Home } from './home/Home';
import { FourOhFour } from './FourOhFour';
import { Welcome } from './home/Welcome';
import React from 'react';
import {Navigation} from "./shared/components/main-nav/Navigation";
import {Map} from './map/Map'
import {MyProfile} from "./myprofile/MyProfile";
import {MyPosts} from "./myprofile/MyPosts"
import {Posts} from "./home/Posts"
import {MyTransmissions} from "./myprofile/MyTransmissions";
import {MyLikes} from "./myprofile/MyLikes";
import 'mapbox-gl/dist/mapbox-gl.css';



// Import react-redux so we can use the store.
import {Provider} from "react-redux";


export const App = (store) => (
	<>
		<Provider store={store}>
		<Navigation />
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/fourohfour' component={FourOhFour} />
				<Route exact path='/welcome' component={Welcome} />
				<Route exact path='/map' component={Map} />
				<Route exact path='/myprofile' component={MyProfile}/>
				<Route exact path='/myposts' component={MyPosts} />
				<Route exact path='/mytransmissions' component={MyTransmissions} />
				<Route exact path='/likes' component={MyLikes} />

			</Switch>
		</BrowserRouter>
		</Provider>

	</>
)
