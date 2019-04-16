import React from "react";
import { Route, Redirect } from "react-router-dom";

// STEP II - desctructuring props, pulling out props.component, and renaming
// it to Component, then "restructuring" all the other props onto an object
// called "rest".
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Step III - Renders a <Route /> and pass all the props through to it - {...rest}.
  return (
    <Route
      {...rest}
      render={props =>
        // STEP IV - check to see if user is authed. If yes, render <Component />
        // else render <Redirect />. Redirect will "redirect" the user to whatever
        // path is supplied to the "to" prop.
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
