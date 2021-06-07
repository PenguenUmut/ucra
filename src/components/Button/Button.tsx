import React from 'react';
import { CN } from '../className';
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
  const className = CN(styles.button, [
    [styles.primary, primary],
    [styles.secondary, !primary],
    [styles.small, size === 'small'],
    [styles.large, size === 'large'],
    [styles.medium, size === 'medium'],
  ]);

  return (
    <button type="button" className={className} style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};
