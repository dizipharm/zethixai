import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLogin, getCompanyType } from "../services/AuthService";

interface PrivateRouteProps extends RouteProps {}

const PublicRoute = ({ component: Component, path }: RouteProps) => {
  const isAuthenticated = isLogin();

  let loginType = getCompanyType() === 0 ? "manufacturer" : getCompanyType() === 1 ? "distributor" : "retailer";

  if (isAuthenticated && loginType === "distributor") {
    return <Redirect to="/distributor/dashboard" />;
  }

  if (isAuthenticated && loginType === "manufacturer") {
    return <Redirect to="/manufacturer/dashboard" />;
  }

  if (isAuthenticated && loginType === "retailer") {
    return <Redirect to="/retailer/dashboard" />;
  }

  return <Route component={Component} path={path} />;
};

export default PublicRoute;
