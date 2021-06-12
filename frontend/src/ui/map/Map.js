import React from "react"
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Pin} from './Pin';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSightingLatLng} from '../../store/dirtySightingSlice';


export const Map = () => {
	const dispatch = useDispatch();
	const initialEffects = () => {
		dispatch(fetchSightingLatLng());
	};
	React.useEffect(initialEffects, [dispatch]);

	// Render our misquotes constant - before we have our data, render the skeleton.
	// After we have our data, render the full object with our data.
	const dirtySightings = useSelector((state) => state.dirtySightings ? state.dirtySightings : []);


    const [viewport, setViewport] = React.useState({
        latitude: 34.5199,
        longitude: -105.8701,
        zoom: 5.5
    });


    return (
        <>
            <Container fluid className='mt-5'>
                <Row>
                    <Col md={4}>
                        <p>Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone. Charmander Flaaffy Starmie Buneary Spheal Totodile Fire. Pokemon The Movie 2000 Registeel Vanilluxe Kirlia Dragon Swift Golbat. Glitch City Rattata Lavender Town Happiny Anorith Cacnea Alomomola. Anim id est laborum Staryu Yellow Oshawott Tangrowth Brock Machop.

															 V for victory Klink fishing rod Drapion Numel Leech Life Luvdisc. Vermilion City Slowbro Poliwag Poliwrath Terrakion Croconaw Frillish. Lavender Town Klinklang surrender now or prepare to fight Simipour searching far and wide Rage Sharpedo. Razor Leaf Landorus Rayquaza Walrein Lavender Town Emolga Rainbow Badge. Grass Victini Espeon Feebas Magikarp Espeon Mawile.

															 Fighting Ash Stantler Meloetta Poison Hitmontop Slowpoke. Celadon City Vibrava Porygon2 the enemy Pokemon fainted Darmanitan Dome Fossil Drilbur. Ruby Cacnea Pidgeotto Medicham Ash Kabuto Shellos. Blastoise Ditto Lillipup Skarmory Gyarados like no one ever was Electrode. Fire Red Scyther Sentret Badge Snover Elgyem Regigigas.

															 Sed do eiusmod tempor incididunt Spoink Sandslash Magikarp Calcium Gothita Zekrom. Splash Deerling Pineco Boldore Terrakion Houndoom Team Rocket. Pokemon Heroes Whimsicott Virizion Cubchoo Jigglypuff Badge Mr. Mime. Consectetur adipisicing elit Bayleef Vespiquen Ash Ketchum Burnt Berry Poison we're blasting off again. S.S. Anne Bug Fraxure Tepig Castform you're not wearing shorts Ralts.
                        </p>
                    </Col>
                    <Col md={8}>
                        <ReactMapGL
                            {...viewport}
                            width="50vw"
                            height="50vh"
                            onViewportChange={(viewport) => setViewport(viewport)}
                            mapStyle="mapbox://styles/mapbox/dark-v9"
                        >
                            {dirtySightings.map((point, index) => <Pin dirtySighting={point} index={index} key={index}/>)}
                        </ReactMapGL>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
