import React from 'react'; // react
import styles from './style.module.scss'; // styles
import {Row, Col, Container} from 'react-bootstrap'; // components

// script
//import imageSet from './script'

export default function Contact ({nome, numero, email, telegram, img = "https://via.placeholder.com/420"}) {

  const link = "https://api.whatsapp.com/send?phone=" + numero

  return (<>

    <div className={styles.box}>

      <Container fluid>

        <Row> <Col><img className={styles.perfil} src={img}></img></Col> </Row>

        <Row> <Col><p><b>Nome:</b> {nome}</p></Col> </Row>

        <Row> <Col><p><b>E-mail:</b> {email}</p></Col> </Row>

        <Row> <Col><p><b>Numero:</b> {numero}</p></Col> </Row>

        <Row> <Col>
          <a href={"https://api.whatsapp.com/send?phone=" + numero} target="_blank"><img className={styles.icon} src="Whatsapp - Logo.svg"></img></a>
          {telegram && <a href={"https://t.me/" + telegram} target="_blank"><img className={styles.icon} src="Telegram - Logo.svg"></img></a>}
        </Col> </Row>

      </Container>

    </div>

  </>)

}
