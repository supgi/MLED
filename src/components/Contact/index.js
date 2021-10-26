// react
import React from 'react'

// styles
import styles from './style.module.scss'

// components
import {Row, Col, Container} from 'react-bootstrap'

// script
//import imageSet from './script'

export default function Contact ({nome, numero, email, telegram}) {

  const link = "https://api.whatsapp.com/send?phone=" + numero

  return (<>

    <div className={styles.box}>

      <Container fluid>

        <Row> <Col><img className={styles.perfil} src="https://via.placeholder.com/420"></img></Col> </Row>

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
