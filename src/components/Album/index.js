import React from 'react'; // react

import styles from './style.module.scss'; // styles

import {Row, Col, Container} from 'react-bootstrap'; // components

import imageSet from './script'; // script

export default function Album ({source = ["a", "b", "c"]}) {

  let imgIndx = 0;
  function teste () {alert("oi")}

  return (

    <>

      <Container>

        <Row>

          <Col><div className={styles.box}>

            <img src="http://via.placeholder.com/240"></img>

            <div onClick={imageSet(imgIndx, 1)} className={styles.rightButton}></div>
            <div onClick={teste} className={styles.leftButton}></div>

          </div></Col>

        </Row>

      </Container>

    </>

  )

}
