import React from 'react'; // react

// components
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Layout from './../src/components/Layout';
import Album from './../src/components/Album';

export default function Home () {


  return (<>

    <Layout title="Home | MLED">



      <Container fluid>

        <section>

          <Row>

            <Col style={{minWidth: "300px"}}><Album /></Col>

            <Col>

              <Row><Col style={{minWidth: "120px"}}><img src="https://via.placeholder.com/140"></img></Col></Row>
              <Row><Col style={{minWidth: "120px"}}>2</Col></Row>

            </Col>

          </Row>

        </section>

        <section>

          <Row>

            <Col><h2><b>Alguns de nossos clientes</b></h2></Col>

          </Row>

        </section>

      </Container>



      <h1 style={{minHeight:"600px"}}>_</h1>

    </Layout>


  </>)

}
