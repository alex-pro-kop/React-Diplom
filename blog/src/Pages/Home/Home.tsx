import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Button from '../../Components/Button';
import { Pages } from '../Router/Router';

import styles from './Home.module.css';
import classNames from 'classnames';
import { useThemeContext, Theme } from '../../Context/themeModeContext';

const Home: FC = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate(Pages.SignIn);
    };

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;
    
    return (
        <>
            <Header />
            <div className={classNames(styles.homeWrapper)}>
                <h1>Welcome to BLOGOLOGO!</h1> 
                <div>
                    <Button title={'Sign In, please'} onClick={redirect} 
                    className={classNames(styles.formButtonSignIn)}/>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;

