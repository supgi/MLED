// react
import React from 'react'

// styles
import styles from './style.module.scss'

// components
import {Row, Col, Container} from 'react-bootstrap'

export default function DBoard ({img, title, caption, link, name}) {

  return (<>

    <Container fluid className={styles.box}>

      <Row>

        <Col sm={5} className={styles.imgAlign}>

          <img src={img}></img>

        </Col>

        <Col>

          <Row><Col><h2><b>{title}</b></h2></Col></Row>
          <Row><Col><p>{caption}</p></Col></Row>
          <Row><Col style={{textAlign:"bottom"}}>
            <a href={link} download={name}>Download</a>
          </Col></Row>

        </Col>

      </Row>

    </Container>

  </>)

}
