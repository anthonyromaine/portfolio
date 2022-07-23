import React from 'react';
import styles from './styles.module.css';
import Button from '@site/src/components/Button';

export default function ButtonContainer({ buttons }) {

  return (
    <div className={styles.btnContainer}>
      {buttons.map(button => <Button button={button} />)}
    </div>
  )
}