import React from 'react'; // react
import styles from './style.module.scss'; // styles
import {Row, Col, Container} from 'react-bootstrap'; // components

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
