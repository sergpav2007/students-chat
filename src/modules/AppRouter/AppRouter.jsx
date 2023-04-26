import React from "react";
import { Route, Routes } from "react-router-dom";
import * as routes from '../../routes';
import * as constants from '../../constants/constants';

const AppRouter = ({ user, }) => {
    return (
        user ?
            <Routes>
                {routes.privateRoutes.map(({ path, Component }) => <Route key={path} path={path} component={() => <Component />} exact><Route path={constants.MAIN_ROUTE} /></Route>)}
            </Routes>
            :
            <Routes>
                {routes.publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={() => <Component />} exact><Route path={constants.LOGIN_ROUTE} /></Route>)}
            </Routes>
    )
};

export default AppRouter;