import React from 'react'; // react

// components
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Layout from './../src/components/Layout';
import Album from './../src/components/Album';

export default function Home () {

  const src = [
    "/Images/MLED - 50 Desconto.webp",
    "/Images/MLED - Lampadas LED.webp"
  ]

  return (<>

    <Layout title="Home | MLED">

      <Container>

        <section>

          <Row>

            <Col sm={7} style={{padding: "40px"}}><Album source={src} height="100%" /></Col>

            <Col sm={true} style={{padding: "40px"}}>

              <Row><Col><img style={{paddingBottom: "12px", maxHeight:"240px", width: "100%", height: "auto"}} src="/Images/MLED - Contato.webp"></img></Col></Row>
              <Row><Col><img style={{maxHeight:"240px", width: "100%", height: "auto"}} src="/Images/MLED - Sua Nescessidade.webp"></img></Col></Row>

            </Col>

          </Row>

        </section>

      </Container>

    </Layout>

  </>)

}
