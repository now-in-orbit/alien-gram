import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap"



export function ThreadComponent(){
    return(
        <>
           <Container>
               <Row>
                   {/*column one*/}
                   <Col>
                        <Image src="https://placecage.com/c/50/50"/>
                   </Col>

                   {/*column two*/}
                   <Col>

                   </Col>

                   {/*column three*/}
                   <Col>

                   </Col>
               </Row>
           </Container>
        </>
    )
}