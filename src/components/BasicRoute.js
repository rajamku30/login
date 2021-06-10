//Dashbord cannot be accessed unless Logged in
import {Route, Redirect} from  'react-router-dom';
import { connect } from "react-redux";

const BasicRoute = ({children, authenticated, ...rest}) => {
   return (
       <Route
          {...rest}
          render = {
              ({location}) => !authenticated ? (children) : (
                  <Redirect 
                    to = {{
                        pathname: "/dashboard",
                        state: {from: location}
                    }}
                  />
              )
          }
       />
   );
};

const mapStateFromProps = ({session}) => ({
    authenticated: session.authenticated

});

export default connect(mapStateFromProps)(BasicRoute);