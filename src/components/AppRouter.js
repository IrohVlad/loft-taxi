import {Routes, Route} from 'react-router-dom';
import {Router, LoggedRouter} from '../Router'
import { useSelector} from 'react-redux';
import React from 'react';

const AppRouter = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return (
        <Routes>
            {isLoggedIn ? LoggedRouter.map(item => {
               return <Route key={item.endpoint} element={item.component} path={item.endpoint} />
            })
            :
            Router.map(item => {
                return <Route key={item.endpoint} element={item.component} path={item.endpoint} />
             })}
        </Routes>
    );
};

export default AppRouter;