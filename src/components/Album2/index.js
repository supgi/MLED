import React from 'react'; // react
import styles from './style.module.scss'; // styles

export default function Album ({
  width = "auto",
  height = "240px",
  source = ["http://via.placeholder.com/240"]
}) {

  return (<>

    <div className={styles.album}>

      {source.map(function(ctx) {

        return <spam><img src={ctx} /></spam>

      })}

    </div>

  </>)

}
