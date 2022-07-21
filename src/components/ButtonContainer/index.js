import React from 'react';
import styles from './styles.module.css';

function Button({button}){
  let fillType = button.style === "fill" ? styles["btn--fill"]: styles["btn--outline"];
  return (
    <a className={styles.btn + ' ' + fillType} href={button.link} target="_blank">{button.text}</a>
  )
}

export default function ButtonContainer({buttons}) {
  
  return (
    <div className={styles.btnContainer}>
      {buttons.map(button => <Button button={button}/>)}
    </div>
  )
}