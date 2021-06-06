import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
  const classes = [styles.button];
  classes.push(primary ? styles.buttonPrimary : styles.buttonSecondary);
  classes.push(size === 'small' ? styles.buttonSmall : size === 'large' ? styles.buttonLarge : styles.buttonMedium);

  return (
    <button type="button" className={classes.join(' ')} style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};
