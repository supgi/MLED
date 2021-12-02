import React from 'react'; // react
import styles from './style.module.scss'; // styles
import toggle from './toggle.module.scss'; // styles
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'; // components

// next components
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import script from './script'; // script

const teste = "\
.toggle.active span:nth-child(3) {\
  transform: translateX(60px);\
  transition-delay: 0.125s;\
}\
\
.toggle.active span:nth-child(1) {\
  width: 25px;\
  transform: translateY(0px) rotate(45deg);\
}\
\
.toggle.active span:nth-child(2) {\
  width: 25px;\
  transform: translateY(0px) rotate(315deg);\
  transition-delay: 0.25s;\
}\
\
"

export default function Layout ({children, title}) {

  return (<>

    <Head> <title>{title}</title> </Head>

    <header className={styles.header}>

    <style>

    {teste}

    </style>

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

            <div className={styles.desktop}>
              <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/sobre"><a>Sobre</a></Link>
                <Link href="/outros"><a>Outros</a></Link>
                <Link href="/contato"><a>Contato</a></Link>
              </div>
            </div>

            <div className={styles.mobile}>
              <div className={toggle.toggle + " toggle"}>

                <span></span>
                <span></span>
                <span></span>

              </div>
            </div>

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

            <p>Rua: Marajoara, 165 <br />Jd. Vila Formosa <br /> CEP: 03460-020</p>

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

    {script()}

  </>)

}
