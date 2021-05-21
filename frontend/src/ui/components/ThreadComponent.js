import React from "react"
import {Container, Row, Col, Image, Button} from "react-bootstrap"
import "./ThreadComponent.css"


export function ThreadComponent(){
    return(
        <>
           <Container>
               <Row>
                   {/*column one*/}
                   <Col md={3}>
                        <Image className="nickCage" roundedCircle src="https://www.placecage.com/c/100/100"/>
                   </Col>

                   {/*column two*/}
                   <Col md={8}>
                       Pokem ipsum dolor sit amet Ivysaur Clefable Blue Spiritomb Infernape Haunter. Ut aliquip ex ea commodo consequat gotta catch 'em all Shieldon Purrloin Calcium Slowking Burnt Berry. Gold Rufflet Poke Flute Groudon Electrode Steel Luxio. Leaf Green Zebstrika the enemy Pokemon fainted Hoppip Combee Grimer Sigilyph. Ground Snorunt Psychic Drowzee Cerulean City Cherrim Hitmontop.

                       Thunder Badge Fire Rotom bicycle Mightyena Smeargle S.S. Anne. Slash Junichi Masuda Deoxys Shelgon Lopunny Dragon Rage Zangoose. Slash Ambipom Gastrodon Abra Stantler Snover Minun. Steel Onix Natu Water Gun Fighting Exploud Slaking. Leech Life Monferno Chikorita Panpour Luxio Starly Qwilfish.

                   </Col>
               </Row>
           </Container>
        </>
    )
}