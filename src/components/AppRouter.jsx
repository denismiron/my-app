import React, { useContext } from 'react';
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PostIdPage from '../pages/PostIdPage';
import { useParams } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context/context';
import Spinner from './UI/spinner/spinner';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
      return <Spinner/>
    }

    return (
      isAuth 
            ?  <Routes>
                {privateRoutes.map((route) => (
                  <Route
                    element={<route.component />}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                  />
                ))}
                <Route path="*" element={<Navigate replace to="/posts" />} />
              </Routes>
            : <Routes>
                {publicRoutes.map((route) => (
                  <Route
                    element={<route.component />}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}  
                  />
                 ))}
                <Route path="*" element={<Navigate replace to="/login" />} />
              </Routes>

    );
};

export default AppRouter;