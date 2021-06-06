import React from 'react';
import styles from './Label.module.scss';

interface ILabel {
  text: string;
}

const Label: React.FC<ILabel> = ({ text }) => {
  return <span className={styles.tag}>{text}</span>;
};

export default Label;
