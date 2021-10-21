// react
import React from 'react';

// components
import Layout from './../src/components/Layout';
import Contact from './../src/components/Contact';
import {Row, Col, Container} from 'react-bootstrap'

export default function Contato () {

  return (

    <Layout title="Contato | MLED">

      <Container fluid>

        <Row>

          <Col><Contact nome="Daniella" email="daniella@mledlampadas.com" numero="+55 11 97985-3308"></Contact></Col>
          <Col><Contact nome="Marcos" email="marcos@mledlampadas.com" numero="+55 11 94725-7270"></Contact></Col>

        </Row>

      </Container>

      <h1 style={{minHeight:"600px"}}>MLED</h1>

    </Layout>

  )

}
