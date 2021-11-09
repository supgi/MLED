import React from 'react'; // react

// components
import Layout from './../src/components/Layout';
import Contact from './../src/components/Contact';
import {Row, Col, Container} from 'react-bootstrap'

export default function Contato () {



  return (

    <Layout title="Contato | MLED">

      <Container fluid>

        <section>
          <Row>

            <Col><Contact img="/Images/MLED - Lampada.png" nome="Daniella" email="daniella@mledlampadas.com" numero="+55 11 97985-3308" /></Col>
            <Col><Contact img="/Images/MLED - Lampada.png" nome="Marcos" email="marcos@mledlampadas.com" numero="+55 11 94725-7270" /></Col>

          </Row>
        </section>

        <section>
          <Row>
            <Col>

              <div style={{width: "100%", margin:"40px 0px"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Rua%20Marajoara,%20165+(MLED%20Lampadas)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">sport gps</a></iframe></div>

            </Col>
          </Row>
        </section>

      </Container>

    </Layout>

  )

}
