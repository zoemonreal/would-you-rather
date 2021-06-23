import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, authedUser, ...rest}) => {
    return (
        
        <Route {...rest} render={props => (
            authedUser && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;