import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLogin } from "../services/AuthService";

const PrivateRoute = ({ component: Component, path }: RouteProps) => {
  const isAuthenticated = isLogin();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route component={Component} path={path} />;
};

export default PrivateRoute;
