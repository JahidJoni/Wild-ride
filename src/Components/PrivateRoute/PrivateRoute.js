import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { RideContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(RideContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            loggedInUser.email ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
    />
);
};

export default PrivateRoute;