import React from "react"
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Pin} from './Pin';
import useMapControl from 'react-map-gl/dist/es6/components/use-map-control';


export const Map = () => {
    const [points, setPoints] = React.useState([
	{lat: 35.744123, lng:-105.85681},
	{lat: 35.64809, lng:-106.33753},
	{lat: 32.319619, lng:-107.028854},
	{lat: 34.249031, lng:-105.596655},
	{lat: 36.79932, lng:-108.08058},
	{lat: 32.917018, lng:-107.706144},
	{lat: 35.45554, lng:-105.874452},
	{lat: 36.110303, lng:-105.726683},
	{lat: 36.36114, lng:-104.59527},
	{lat: 36.18752, lng:-106.55642},
	{lat: 35.03318, lng:-107.38725},
	{lat: 35.985301, lng: -106.064468},
	{lat: 35.948358, lng: -106.070579},
	{lat: 33.766896, lng: -106.821217},
	{lat: 35.593458, lng: -105.230698},
	{lat: 34.7995, lng: -106.700304},
	{lat: 36.934793, lng:-106.995107},
	{lat: 34.34394, lng: -108.49562},
	{lat: 36.345307, lng: -103.991533},
	{lat: 33.890975, lng: -108.379371},
	{lat: 33.883159, lng:-103.709525},
	{lat: 36.39309, lng:-105.28501},
	{lat: 35.41949, lng:-105.207784},
	{lat: 36.34335, lng:-106.18864},
	{lat: 33.34674, lng:-107.64726},
	{lat: 34.531467, lng:-104.174298},
	{lat: 34.64673, lng:-103.90441},
	{lat: 36.36447, lng:-105.76529},
	{lat: 32.757427, lng:-108.007527},
	{lat: 34.38869, lng:-103.05134},
	{lat: 32.11871, lng:-106.648973},
	{lat: 36.15891, lng:-105.97474},
	{lat: 33.06335, lng:-108.695588},
	{lat: 33.101546, lng:-104.356588},
	{lat: 36.08539, lng:-106.05751},
	{lat: 34.646727, lng:-106.345019},
	{lat: 35.13548, lng:-107.364},
	{lat: 35.16976, lng:-107.89089},
	{lat: 36.9, lng:-106.58333},
	{lat: 36.66592, lng:-105.469436},
	{lat: 36.52000, lng:-105.534027},
	{lat: 33.81894, lng:-108.95452},
	{lat: 31.8276 , lng:-107.64002},
	{lat: 36.02109, lng:-106.888683},
	{lat: 35.56336, lng:-106.77059},
	{lat: 32.90898, lng:-108.033173},
	{lat: 35.00849, lng:-106.563864},
	{lat: 35.62807, lng:-108.780364},
	{lat: 33.35318, lng:-105.620581},
	{lat: 33.25217, lng:-103.317675},
	{lat: 32.85623, lng:-103.76273},
	{lat: 35.9742 , lng:-105.33001},
	{lat: 32.69924, lng:-108.13199},
	{lat: 34.5959 , lng:-106.03363},
	{lat: 32.66133, lng:-107.123524},
	{lat: 36.70391, lng:-105.59501},
	{lat: 32.22953, lng:-108.08615},
	{lat: 33.55813, lng:-105.70776},
	{lat: 35.16198, lng:-106.642804},
	{lat: 32.71265, lng:-107.20519},
	{lat: 34.74262, lng:-106.732774},
	{lat: 32.48884, lng:-106.914575},
	{lat: 36.21992, lng:-106.262778},
	{lat: 31.41704, lng:-108.929774},
	{lat: 35.49452, lng:-105.571254},
	{lat: 36.07493, lng:-106.126648},
	{lat: 33.33519, lng:-105.675816},
	{lat: 34.11142, lng:-107.240895},
	{lat: 35.90241, lng:-109.03212},
	{lat: 35.82166, lng:-105.899105},
	{lat: 35.41382, lng:-105.489881},
	{lat: 35.49171, lng:-105.67529},
	{lat: 33.20896, lng:-107.221209},
	{lat: 36.00747, lng:-105.382548},
	{lat: 34.56006, lng:-106.78919},
	{lat: 33.238749, lng:-104.397276},
	{lat: 36.696968, lng:-106.576636},
	{lat: 34.218659, lng:-108.872296},
	{lat: 32.802309, lng:-104.718722}
	]);
// center={[-106.65, 35.33]}lat:35.744123,

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
                        <p >Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone. Charmander Flaaffy Starmie Buneary Spheal Totodile Fire. Pokemon The Movie 2000 Registeel Vanilluxe Kirlia Dragon Swift Golbat. Glitch City Rattata Lavender Town Happiny Anorith Cacnea Alomomola. Anim id est laborum Staryu Yellow Oshawott Tangrowth Brock Machop.

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
                            {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index} />)}
                        </ReactMapGL>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
