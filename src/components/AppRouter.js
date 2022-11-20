import {Routes, Route} from 'react-router-dom';
import {Router} from '../Router'

import React from 'react';

const AppRouter = () => {
    return (
        <Routes>
            {Router.map(item => {
               return <Route key={item.endpoint} element={item.component} path={item.endpoint} />
            })}
        </Routes>
    );
};

export default AppRouter;