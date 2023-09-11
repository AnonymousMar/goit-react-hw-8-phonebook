import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footerLine}>
      <p className={css.footerText}>
        &copy; 2023. Created by Maryna
      </p>
    </div>
  );
};

export default Footer;
