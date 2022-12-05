import React from 'react';
import Header from '../components/Header';
import MainArea from '../components/MainArea';
import Login from '../components/Login';
import Profile from '../components/Profile';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <>
            <Header/>
            <MainArea>{isLoggedIn ? <Profile/> : <Login/>}</MainArea>
        </>
    );
};

export default MainPage;