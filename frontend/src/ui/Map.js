import React from "react"
import MapImage from '../images/new_mexico_administrative.svg'
import {Col, Container, Image, Row} from "react-bootstrap";


export const Map = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <p>Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone. Charmander Flaaffy Starmie Buneary Spheal Totodile Fire. Pokemon The Movie 2000 Registeel Vanilluxe Kirlia Dragon Swift Golbat. Glitch City Rattata Lavender Town Happiny Anorith Cacnea Alomomola. Anim id est laborum Staryu Yellow Oshawott Tangrowth Brock Machop.

                            V for victory Klink fishing rod Drapion Numel Leech Life Luvdisc. Vermilion City Slowbro Poliwag Poliwrath Terrakion Croconaw Frillish. Lavender Town Klinklang surrender now or prepare to fight Simipour searching far and wide Rage Sharpedo. Razor Leaf Landorus Rayquaza Walrein Lavender Town Emolga Rainbow Badge. Grass Victini Espeon Feebas Magikarp Espeon Mawile.

                            Fighting Ash Stantler Meloetta Poison Hitmontop Slowpoke. Celadon City Vibrava Porygon2 the enemy Pokemon fainted Darmanitan Dome Fossil Drilbur. Ruby Cacnea Pidgeotto Medicham Ash Kabuto Shellos. Blastoise Ditto Lillipup Skarmory Gyarados like no one ever was Electrode. Fire Red Scyther Sentret Badge Snover Elgyem Regigigas.

                            Sed do eiusmod tempor incididunt Spoink Sandslash Magikarp Calcium Gothita Zekrom. Splash Deerling Pineco Boldore Terrakion Houndoom Team Rocket. Pokemon Heroes Whimsicott Virizion Cubchoo Jigglypuff Badge Mr. Mime. Consectetur adipisicing elit Bayleef Vespiquen Ash Ketchum Burnt Berry Poison we're blasting off again. S.S. Anne Bug Fraxure Tepig Castform you're not wearing shorts Ralts.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image src={MapImage} fluid/>
                    </Col>
                    <Col md={3}>
                        <p>The Legend</p>
                        <ul>
                            <li>Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone.</li>
                            <li>Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone.</li>
                            <li>Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone.</li>
                            <li>Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone.</li>
                            <li>Pokem ipsum dolor sit amet Celebi Druddigon lorem ipsum dolor sit amet Koffing Anorith Magnezone.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
