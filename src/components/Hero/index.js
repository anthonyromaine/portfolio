import React from 'react';
import styles from './styles.module.css';
import ButtonContainer from '@site/src/components/ButtonContainer';

export default function Hero({badge, heading, content, buttons}) {
  let isButtons = false;
  if (buttons){
    isButtons = true;
  }
  return (
    <section>
      <div className={styles.heroContainer}>
        <p className={styles.hero__badge}>{badge}</p>
        <p className={styles.hero__heading}>{heading}</p>
        <p className={styles.hero__content}>{content}</p>
        {isButtons ? <ButtonContainer buttons={buttons}/> : null}
      </div>
    </section>
  )
}