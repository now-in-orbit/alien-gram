import React from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Col, Container, Image, Row} from 'react-bootstrap';
import {Pin} from './Pin';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSightingLatLng} from '../../store/dirtySightingSlice';
import {PostCard} from '../shared/components/PostCard';
import {MapContent} from './MapContent';
import './MapStyles.css'


export const Map = ({sighting}) => {
	const dispatch = useDispatch();
	const initialEffects = () => {
		dispatch(fetchSightingLatLng());
	};
	React.useEffect(initialEffects, [dispatch]);

	// Render our misquotes constant - before we have our data, render the skeleton.
	// After we have our data, render the full object with our data.
	const dirtySightings = useSelector((state) => state.dirtySightings ? state.dirtySightings : []);
	const sightings = useSelector((state) => state.sightings ? state.sightings : []);
	// console.log(sightings[0].sightingCity)
	const [viewport, setViewport] = React.useState({
		latitude : 34.5199,
		longitude: -105.8701,
		zoom     : 5.5
	});

	const onlyUnique = (value, index, self) => self.indexOf(value) === index;

	let sightingCity = sightings.map(sighting => sighting.sightingCity).filter(onlyUnique)
	if(sightingCity.includes('Albuquerque')){
		sightingCity = 'Albuquerque'
	} else if(sightingCity.includes('Bernalillo')) {
		sightingCity = 'Bernalillo'
	} else if(sightingCity.includes('Rio Rancho')) {
		sightingCity = 'Rio Rancho'
	} else if (sightingCity.includes('Jal')){
		sightingCity = 'Jal'
	} else if (sightingCity.includes('Carlsbad')){
		sightingCity = 'Carlsbad'
	} else if (sightingCity.includes('Cloudcroft')){
		sightingCity = 'Cloudcroft'
	} else if (sightingCity.includes('Mescalero')){
		sightingCity = 'Mescalero Indian Reservation'
	} else if (sightingCity.includes('White Sands')){
		sightingCity = 'White Sands'
	} else if (sightingCity.includes('Socorro')){
		sightingCity = 'Socorro'
	}

	return (
		<>
			<Container fluid className = 'mt-5'>
				<Row>
					<Col md = {4}>
						<h3 className='title'>City: {sightingCity}</h3>
						<hr className='separator'/>
						{sightings.map(sighting => <MapContent key = {sighting.sightingId} sighting = {sighting} sightingCity = {sightingCity} />)}
					</Col>
					<Col md = {8}>
						<div className = 'position-fixed one ml-auto'>
							<ReactMapGL
								{...viewport}
								width = '64vw'
								height = '84vh'
								onViewportChange = {(viewport) => setViewport(viewport)}
								mapStyle = 'mapbox://styles/mapbox/dark-v9'
							>
								{dirtySightings.map((point, index) => <Pin dirtySighting = {point} index = {index} key = {index} />)}
							</ReactMapGL>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};
