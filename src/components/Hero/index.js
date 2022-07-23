import React from 'react';
import styles from './styles.module.css';
import ButtonContainer from '@site/src/components/ButtonContainer';
import clsx from 'clsx';

export default function Hero({ options }) {
  let { badge, heading, content, buttons } = options;
  
  let headingColor = false;
  if(options.headingColor){
    headingColor = styles[`hero__heading--${options.headingColor}`];
  }

  let badgeColor = false;
  if(options.badgeColor){
    badgeColor = styles[`hero__badge--${options.badgeColor}`];
  }
  
  let isButtons = false;
  if (buttons) {
    isButtons = true;
  }
  
  return (
    <section>
      <div className={styles.heroContainer}>
        <p className={clsx(styles.hero__badge, badgeColor)}>{badge}</p>
        <p className={clsx(styles.hero__heading, headingColor)}>{heading}</p>
        <p className={styles.hero__content}>{content}</p>
        {isButtons ? <ButtonContainer buttons={buttons} /> : null}
      </div>
    </section>
  )
}