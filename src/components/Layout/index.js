import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Head from 'next/head'

export default function Layout ({children, title}) {

  return (

    <>
    <Head>

      <title>{title}</title>

    </Head>
    <header>

      <Container fluid>

        <Row>
          <Col xs={9}>

            MLED

          </Col>
          <Col>

            <nav>NAV</nav>

          </Col>
        </Row>

      </Container>

    </header>

    {children}

    <footer>



    </footer>
    </>

  )

}
