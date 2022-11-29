import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import './SignUpForm.css';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Pages } from '../../Pages/Router/Router';
import { Theme, useThemeContext } from '../../Context/themeModeContext';

export interface SignUpFormProps {
    handleSignUpClick: (email: string, password: string) => void;
};

const SignUpForm: FC<SignUpFormProps> = ({handleSignUpClick}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const redirect = () => {
        navigate(Pages.SignIn);
    };

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    return (
        <div className={classNames({
            ['signUpWrapperLight']: isThemeLight,
            ['signUpWrapperDark']: !isThemeLight,
            })}>
            <h1>Sign Up</h1>

            <div>
                <div className={classNames({
                ['signUpFormLight']: isThemeLight,
                ['signUpFormDark']: !isThemeLight,
                })}>
                    <div>Email</div>

                    <Input type='email' 
                    className={classNames({
                    ['signUpFormInputLight']: isThemeLight,
                    ['signUpFormInputDark']: !isThemeLight,
                    })} 
                    placeholder='Your Email (must contain a character @)'
                    value={email}
                    onChange={(event: any) => setEmail(event.target.value)} />

                    <div>Password</div>

                    <Input type='password' 
                    className={classNames({
                    ['signUpFormInputPasswordLight']: isThemeLight,
                    ['signUpFormInputPasswordDark']: !isThemeLight,
                    })}  
                    placeholder='Your Password (should be at least 6 characters)'
                    value={password}
                    onChange={(event: any) => setPassword(event.target.value)} />

                    <Button title={'Sign Up'} 
                    className={classNames({
                    ['formButtonSignUpLight']: isThemeLight,
                    ['formButtonSignUpDark']: !isThemeLight,
                    })} 
                    onClick={() => handleSignUpClick(email, password) } />

                    <p>Already have an account? <Button title={'Sign In'} 
                    onClick={redirect}
                    className={classNames({
                    ['formButtonSignInLight']: isThemeLight,
                    ['formButtonSignInDark']: !isThemeLight,
                    })} /></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
