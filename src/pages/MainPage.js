import React, { useContext } from 'react';
import Header from '../components/Header';
import MainArea from '../components/MainArea';
import Login from '../components/Login';
import Profile from '../components/Profile';
import { AuthContext } from '../AuthContext';

const MainPage = () => {
    const {isLoggedIn} = useContext(AuthContext);
    return (
        <>
            <Header/>
            <MainArea>{isLoggedIn ? <Profile/> : <Login/>}</MainArea>
        </>
    );
};

export default MainPage;