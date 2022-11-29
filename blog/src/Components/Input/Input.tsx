import React, { FC } from 'react';

import styles from './Input.module.css';
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../Context/themeModeContext';

type InputProps = {
    type: string;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    value?: string | number;
    onChange?: any;
    onKeyDown?: any;
};

const Input: FC<InputProps> = ({type, 
        disabled, 
        placeholder, 
        className,
        value,
        onChange,
        onKeyDown}) => {

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;
    
    return <input type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={classNames(styles.input, className)}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            />;
};

export default Input;
