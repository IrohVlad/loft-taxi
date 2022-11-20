import React from 'react';
import Header from '../components/Header';
import MainArea from '../components/MainArea';
import Login from '../components/Login';

const MainPage = () => {
    return (
        <>
            <Header/>
            <MainArea><Login/></MainArea>
        </>
    );
};

export default MainPage;