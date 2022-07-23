import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function Button({ button }) {
  let fillType = button.style === "fill" ? styles["btn--fill"] : styles["btn--outline"];
  return (
    <a className={clsx(styles.btn, fillType)} href={button.link} target="_blank">{button.text}</a>
  )
}