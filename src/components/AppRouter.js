import {Routes, Route} from 'react-router-dom';
import {Router, LoggedRouter} from '../Router'
import { AuthContext } from '../AuthContext';

import React, {useContext} from 'react';

const AppRouter = () => {
    const {isLoggedIn} = useContext(AuthContext);
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