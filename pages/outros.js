// react
import React from 'react';

// components
import {Container, Row, Col} from 'react-bootstrap'
import Layout from './../src/components/Layout';

export default function Home () {

  return (

    <Layout title="Outros | MLED">
      <Container style={{margin:"45px 0px"}}>
        <Row>
          <Col xs={4}>
            <img src="/MLED - Catalogo.png"></img>
          </Col>
          <Col>
            <Row>
              <Col>
                <h2>Produtos</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Catálogo com as principais informações sobre os nossos produtos.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <button>Baixar</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <h1 style={{minHeight:"600px"}}>MLED</h1>
    </Layout>

  )

}
