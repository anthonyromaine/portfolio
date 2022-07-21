import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Logo({logo}){
  return (
    <div className={styles.logo}>
      <img src={logo.src} alt={logo.alt} />
    </div>
  )
}

export default function CompanyLogos({logos}) {
  
  return (
    <div className={styles.companyLogos}>
      {logos.map(logo => <Logo logo={logo}/>)}
    </div>
  )
}