import React from 'react'; // react
import styles from './style.module.scss'; // styles
import {Row, Col, Container} from 'react-bootstrap'; // components
import imageSet from './script'; // script

export default function Album ({
  width = "auto",
  height = "240px",
  source = ["http://via.placeholder.com/240"]
}) {

  const [context, setContext] = React.useState({
    src: source,
    indx: 0
  });

  const size = {
    height: height,
    width: width
  }

  return (<>

    <div style={size} className={styles.box}>

      <img src={source[0]}></img>

      <div onClick={(e) => {imageSet(e, context, setContext, 1)}} className={styles.rightButton}><img src="/Album/Seta.svg"></img></div>
      <div onClick={(e) => {imageSet(e, context, setContext, 0)}} className={styles.leftButton}><img src="/Album/Seta.svg"></img></div>

    </div>

  </>)

}
