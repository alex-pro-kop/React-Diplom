import React, { FC, useState, useEffect, ChangeEvent }  from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts, PostsSelectors, setSelectedPost, setTotalAllPostsCounter } from '../../Redux/reducers/posts';

import classNames from 'classnames';
import './Header.css';

import Button from '../Button';
import Input from '../Input';
import { Pages } from '../../Pages/Router/Router';
import { Theme, useThemeContext } from '../../Context/themeModeContext';

import userName from '../../Assets/Images/UserName.png';
import logo from '../../Assets/Images/Logo.png';
import user from '../../Assets/Images/User.png';

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}: any) => {
    const auth = localStorage.getItem('uid');

    const navigate = useNavigate();

    const redirectToSignIn = () => {
        navigate(Pages.SignIn);
    };

    const redirectToMain = () => {
        navigate(Pages.Main);
    };

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const redirectToSearch = () => {
        const params = new URLSearchParams();
        if (value) {
            params.append("contains", value);
        } else {
            params.delete("contains");
        }
        navigate({
            pathname: "/search",
            search: params.toString(),
        });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onEnter = (e: any) => {
        if (e.key === "Enter") {
            redirectToSearch();
        };
    };

    return (
        <div className={classNames({
            ['headerLight']: isThemeLight,
            ['headerDark']: !isThemeLight,
        })}>
            <img src={logo} alt="logo" onClick={redirectToMain}/>
            <div className={classNames({
            ['headerSearchLight']: isThemeLight,
            ['headerSearchDark']: !isThemeLight,
        })}>
                <Input type='text' className={classNames({
                ['inputLight']: isThemeLight,
                ['inputDark']: !isThemeLight,
                })} 
                value={value}
                onChange={handleInputChange}
                onKeyDown={onEnter} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            
            {!auth && (
                <div className={classNames({
                    ['headerSignInLight']: isThemeLight,
                    ['headerSignInDark']: !isThemeLight,})}>
                <img src={user} alt="user" onClick={redirectToSignIn} className='user'/>
                <Button title={'Sign In'} onClick={redirectToSignIn} 
                    className={classNames({
                    ['headerSignInButtonLight']: isThemeLight,
                    ['headerSignInButtonDark']: !isThemeLight,})}/>
            </div>
            )}

            {auth && (
            <div className={classNames({
                ['headerAuthUserLight']: isThemeLight,
                ['headerAuthUserDark']: !isThemeLight,})}>
                <img src={userName} alt="userName" />
                <div>Artem Malkin</div>
            </div>)}
        </div>
    )
};

export default Header;



