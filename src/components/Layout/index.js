import React from 'react'; // react
import styles from './style.module.scss'; // styles
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'; // components

// next components
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import script from './script'; // script

export default function Layout ({children, title}) {

  const [mobile, setMobile] = React.useState(false);

  return (<>

    <Head> <title>{title}</title> </Head>

    <header className={styles.header}>

    <div id="headerEffect" style={{position: "relative"}}></div>

      <Container fluid>

        <Row>
          <Col>

            <Link href='/'>
              <Image
                src="/MLED - Logo.webp"
                alt="Logomarca da empresa MLED"
                width={140.80}
                height={50}
                quality={80}
                className={styles.logo}
              />
            </Link>

          </Col>

          <Col className={styles.navBar}>

            {!mobile && <>
              <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/sobre"><a>Sobre</a></Link>
                <Link href="/outros"><a>Outros</a></Link>
                <Link href="/contato"><a>Contato</a></Link>
              </div>
            </>}

            {mobile && <>
              <div>
                <p>Menu</p>
              </div>
            </>}

          </Col>
        </Row>

      </Container>

    </header>

    {children}

    <footer>

      <Container fluid className={styles.box}>

        <Row className={styles.align}>

          <Col className={styles.card}>

            <img src="/Layout/Local.svg"></img>

            <p>Rua: Marajoara, 165 <br />Jd. Vila Formosa <br /> CEP: 03460-202</p>

          </Col>
          <Col className={styles.card}>

            <img src="/Layout/Email.svg"></img>

            <p>administrativo@mledlampadas.com</p>

          </Col>
          <Col className={styles.card}>

            <img src="/Layout/Telefone.svg"></img>

            <p>(11) 2059-1417</p>

          </Col>

        </Row>
        <Row>

          <Col className={styles.align} style={{margin: "20px 0px 0px 0px"}}>

            <p><i>©MLED<br />Created by Giovanni Graziano</i></p>

          </Col>

        </Row>
        <Row className={styles.line}></Row>

      </Container>

    </footer>

    {script(setMobile)}

  </>)

}
