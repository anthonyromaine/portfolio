import React from 'react';
import styles from './styles.module.css';
import ButtonContainer from '@site/src/components/ButtonContainer';
import clsx from 'clsx';


function Image({ img }) {
  let rounded = img.rounded ? styles["img--rounded"] : "";

  return (
    <div className={styles.imgContainer}>
      <img src={img.src} alt={img.alt} className={clsx(styles.img, rounded)} />
    </div>
  );

}

function Feature({ feature }) {
  return (
    <div className={styles.feature}>
      <span className={styles.feature__circle}>
        <img className={styles.feature__check} src="img/checkmark.svg" alt="checkmark" />
      </span>
      <p className={styles.feature__text}>{feature}</p>
    </div>
  )
}

function Features({ features }) {
  return (
    <div className={styles.featureContainer}>
      {features.map((feature) => <Feature feature={feature} />)}
    </div>
  );
}

function Text({ text }) {
  let { heading, content, features, buttons } = text;
  let isButtons = false;
  if (buttons) {
    isButtons = true;
  }
  return (
    <div>
      {/* heading */}
      <p className={styles.text__heading}>{heading}</p>

      {/* content */}
      {content.map((text) => <p>{text}</p>)}

      {/* features */}
      <Features features={features} />
      {/* buttons */}
      {isButtons ? <ButtonContainer buttons={buttons} /> : null}
    </div>
  );
}

export default function TextImage({ img, text, imgSide }) {

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        {imgSide === "left" ? <Image img={img} /> : <Text text={text} />}
      </div>
      <div className={styles.container__right}>
        {imgSide === "right" ? <Image img={img} /> : <Text text={text} />}
      </div>
    </div>
  )
}