import React from 'react';
import styles from './button.module.scss';

interface Props {
  className?: string
  name: string
}

export const Button: React.FC<Props> = ({ className, name }) => {
  return (
    <button type='button' className={styles.button}>
        {name}
    </button>
  );
};

