import React from 'react';
import classes from './Button.module.css';

interface IButton {
  text: string;
}

const Button: React.FC<IButton> = ({ text }) => {
  return <button className={classes.primary}>{text}</button>;
};

export default Button;
