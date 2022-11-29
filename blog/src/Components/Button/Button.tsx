import React, { FC } from 'react';

import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
    title: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
};

const Button: FC<ButtonProps> = ({title, className, onClick, disabled}) => {
    return (
        <button onClick={onClick} 
        className={classNames(styles.button, className)}
        disabled={disabled}>
            {title}
        </button>
    );
};

export default Button;
