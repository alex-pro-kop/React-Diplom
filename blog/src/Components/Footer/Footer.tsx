import React, { FC } from 'react';

import classNames from 'classnames';
import './Footer.css';

import { useThemeContext, Theme } from '../../Context/themeModeContext';

import ToggleSwitch from '../ToggleSwitch';

const Footer: FC = () => {
    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;
    return (
        <div className={classNames({
            ['footerLight']: isThemeLight,
            ['footerDark']: !isThemeLight,
            })}>
            <div className={classNames({
                ['footerTextLight']: isThemeLight,
                ['footerTextDark']: !isThemeLight,
            })}>© 2022 Blogologo</div>
            <div className={classNames({
                ['toggleWrapperLight']: isThemeLight,
                ['toggleWrapperDark']: !isThemeLight,
            })}>
                <div className={classNames({
                ['footerTextLight']: isThemeLight,
                ['footerTextDark']: !isThemeLight,
            })}>Dark theme</div>
                <ToggleSwitch />
            </div>
        </div>
    );
};

export default Footer;
