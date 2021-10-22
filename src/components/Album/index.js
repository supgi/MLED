// react
import React from 'react'

// styles
import styles from './style.module.scss'

// components
import {Row, Col, Container} from 'react-bootstrap'

// script
import imageSet from './script'

export default function Album ({source = ["a", "b", "c"]}) {

  let imgIndx = 0;

  return (

    <>

      <Container fluid>

        <Row>

          <Col><div className={styles.box}>

            <div style={{
              backgroundImage: "url('http://via.placeholder.com/240')",
              width: "240px",
              height:"240px",
            }}></div>

            <div className={styles.rightButton} onClick={imageSet(imgIndx, 1)}></div>
            <div className={styles.leftButton}></div>

          </div></Col>

        </Row>

      </Container>

    </>

  )

}
