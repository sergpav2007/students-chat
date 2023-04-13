import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import * as routes from '../../routes';
import * as constants from '../../constants/constants';

const AppRouter = () => {
    const user = true;
    return (
        user ?
            <Routes>
                {routes.privateRoutes.map(({ path, Component }) => <Route key={path} path={path} component={() => <Component />} exact />)}
                <Link to={constants.MAIN_ROUTE}/>
            </Routes>
            :
            <Routes>
                {routes.publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={() => <Component />} exact />)}
                <Link to={constants.LOGIN_ROUTE}/>
            </Routes>
    )
};

export default AppRouter;