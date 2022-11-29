import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import './SignInForm.css';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Pages } from '../../Pages/Router/Router';
import { Theme, useThemeContext } from '../../Context/themeModeContext';


export interface SignInFormProps {
    handleSignInClick: (email: string, password: string) => void;
};

const SignInForm: FC<SignInFormProps> = ({ handleSignInClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const redirect = () => {
        navigate(Pages.SignUp);
    };

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    return (
        <div className={classNames({
            ['signInWrapperLight']: isThemeLight,
            ['signInWrapperDark']: !isThemeLight,
        })}>
            <h1>Sign In</h1>

            <div>
                <div className={classNames({
                ['signInFormLight']: isThemeLight,
                ['signInFormDark']: !isThemeLight,
                })}>    
                    <div>Email</div>

                    <Input type='email' 
                    className={classNames({
                    ['signInFormInputLight']: isThemeLight,
                    ['signInFormInputDark']: !isThemeLight,
                    })} 
                    placeholder='Your Email'
                    value={email}
                    onChange={(event: any) => setEmail(event.target.value)} />

                    <div>Password</div>

                    <Input type='password' 
                    className={classNames({
                    ['signInFormInputPasswordLight']: isThemeLight,
                    ['signInFormInputPasswordDark']: !isThemeLight,
                    })}
                    placeholder='Your Password'
                    value={password}
                    onChange={(event: any) => setPassword(event.target.value)} />

                    <Button title={'Forgot Password?'} 
                    className={classNames({
                    ['formButtonForgotLight']: isThemeLight,
                    ['formButtonForgotDark']: !isThemeLight,
                    })} />

                    <Button title={'Sign In'} 
                    className={classNames({
                    ['formButtonSignInnLight']: isThemeLight,
                    ['formButtonSignInnDark']: !isThemeLight,
                    })}
                    onClick={() => handleSignInClick(email, password)} />

                    <p>Don't have an account? <Button title={'Sign Up'} 
                    onClick={redirect}
                    className={classNames({
                    ['formButtonSignUppLight']: isThemeLight,
                    ['formButtonSignUppDark']: !isThemeLight,
                    })} /> </p>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
