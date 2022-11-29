import React, { FC } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/reducers/users';
import { useNavigate } from 'react-router-dom';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import SignInForm from '../../Components/SignInForm';
import { useThemeContext, Theme } from '../../Context/themeModeContext';

const SignIn: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
            console.log(user);
            dispatch(
                setUser({ email: user.email, id: user.uid, token: user.refreshToken })
            );
            localStorage.setItem('uid',`${user.uid}`);
            navigate("/main");
            })
            .catch(() => alert("This user is not registered. Sign Up, please!"));
        };

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    return (
        <>
            <Header />
            <SignInForm handleSignInClick={handleLogin} />
            <Footer />
        </>
    );
};

export default SignIn;
