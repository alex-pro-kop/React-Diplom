import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Main from '../Main';
import SignIn from '../SignIn';
import Home from '../Home';
import SignUp from '../SignUp';
import Content from '../Content';
import Search from '../Search';

export enum Pages {
    Home = '/',
    Main = '/main',
    Content = '/content/:id',
    Search = '/search',
    SignIn = '/signIn',
    SignUp = '/signUp'
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Pages.Home} element={<Home />} />
                <Route path={Pages.Main} element={<Main />} />
                <Route path={Pages.Content} element={<Content />} />
                <Route path={Pages.Search} element={<Search />} />
                <Route path={Pages.SignIn} element={<SignIn />} />
                <Route path={Pages.SignUp} element={<SignUp />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
