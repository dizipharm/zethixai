import { useEffect } from "react";
import { Switch, withRouter, Redirect, useHistory } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// Distributor imports
import DistributorDashboard from "./components/Distributor/Dashboard";
import Returns from "./components/Distributor/Returns";
import Recalls from "./components/Distributor/Recalls";
import ProductList from "./components/Distributor/PlaceNewOrder/ProductList";
import ProductDetails from "./components/Distributor/PlaceNewOrder/ProductDetails";
import AddToCart from "./components/Distributor/PlaceNewOrder/AddToCart";
import {
  PlaceOrder,
  OrderSuccess,
} from "./components/Distributor/PlaceNewOrder/PlaceOrder";

// Retailer imports 
import RetailerDashboard from "./components/Retailer/Dashboard"
import RetailerReturns from "./components/Retailer/Returns";
import RetailerRecalls from "./components/Retailer/Recalls";
import RetailerProductList from "./components/Retailer/PlaceNewOrder/ProductList";
import RetailerProductDetails from "./components/Retailer/PlaceNewOrder/ProductDetails/ProductDetails";
import RetailerAddToCart from "./components/Retailer/PlaceNewOrder/AddToCart";
import Material from "./components/Retailer/material/materialspec";
import Carboncalc from "./components/Retailer/carboncalc/Carboncalc";
import List from "./components/Retailer/List/List";
import ListOrderSuccess from "./components/Retailer/List/OrderSuccess";

// Manufacturer imports
import Dashboard from "./components/Manufacturer/Dashboard/Dashboard";
import TrackAndTrace from "./components/Manufacturer/TrackAndTrace/TrackAndTrace";

// Common For Distributor and Manufacturer imports
import OrderDetails from "./components/OrderDetails/OrderDetails";
import ShippedOrders from "./components/ShippedOrders/ShippedOrders";

import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import RegisterSuccess from "./components/Authentication/Register/RegisterSuccess";
import ChangePassword from "./components/Authentication/ChangePassword/ChangePassword";
import ForgotPassword from "./components/Authentication/ForgotPassword/ForgotPassword";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import { isLogin, getUserData, getCompanyType } from "./services/AuthService";

import { CartProvider } from "./context/cartContext";
import MyTradingPartners from "./components/Distributor/MyTradingPartners";
import UploadYourProducts from "./components/Manufacturer/UploadYourProducts/UploadYourProducts";
import TradingPartners from "./components/Manufacturer/TradingPartners/TradingPartners";
import Settings from "./components/Settings/Settings";
import DisList from "./components/Distributor/List/List";
import DisOrderSuccess from "./components/Distributor/List/OrderSuccess";
import DisMaterial from "./components/Distributor/material/materialspec";
import DisCarboncalc from "./components/Distributor/carboncalc/Carboncalc";
import DisPlaceOrder from "./components/Distributor/List/DisPlaceOrder";
import Quotations from "./components/Distributor/Quotations/Quotations";
import Payments from "./components/Distributor/Payments/Payments";
import Carbonoffset from "./components/Distributor/carbonoffsetting/Carbonoffset";
import X from "./components/Distributor/X/X";
import Y from "./components/Distributor/Y/Y";
import Z from "./components/Distributor/Z/Z";
import Carbon from "./components/Distributor/ESGexc/Carbon";
import Health from "./components/Distributor/ESGexc/Health";
import Diversity from "./components/Distributor/ESGexc/Diversity";

export const App = (props: any) => {
  useEffect(() => {
    getUserData();
  });

  const type = getCompanyType();
  const history = useHistory();
  const manufacturerPath = history.location.pathname.includes("/manufacturer");
  const distributorPath = history.location.pathname.includes("/distributor");
  const retailerPath = history.location.pathname.includes("/retailer");


  if (type === 1 && manufacturerPath) {
    history.push("/distributor/dashboard");
  }

  if (type === 0 && distributorPath) {
    history.push("/manufacturer/dashboard");
  }
  if (type === 4 && retailerPath) {
    history.push("/retailer/dashboard");
  }

  return (
    <>
      <CartProvider>
        {isLogin() && (
          <>
            <Header {...props} />
            <Sidebar />
          </>
        )}

        <div className={`${isLogin() && "app-main"}`}>
          <Switch>
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute
              exact
              path="/change-password/:id"
              component={ChangePassword}
            />
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PublicRoute
              exact
              path="/register-success"
              component={RegisterSuccess}
            />

            {/* Distributor Routes */}

            <PrivateRoute
              exact
              path="/distributor/my-trading-partners"
              component={MyTradingPartners}
            />
            <PrivateRoute
              exact
              path="/distributor/dashboard"
              component={DistributorDashboard}
            />
            <PrivateRoute
              exact
              path="/distributor/returns"
              component={Returns}
            />
            <PrivateRoute
              exact
              path="/distributor/recalls"
              component={Recalls}
            />
            <PrivateRoute
              exact
              path="/distributor/product-lsit"
              component={ProductList}
            />
            <PrivateRoute
              exact
              path="/distributor/product-details/:id"
              component={ProductDetails}
            />

            <PrivateRoute
              exact
              path="/distributor/add-to-cart"
              component={AddToCart}
            />
            <PrivateRoute
              exact
              path="/distributor/place-order"
              component={PlaceOrder}
            />
            <PrivateRoute
              exact
              path="/distributor/order-success/:id"
              component={OrderSuccess}
            />
            <PrivateRoute
              exact
              path="/distributor/order-management"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/distributor/order-management/my-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/distributor/order-management/new-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/distributor/order-management/accepted-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/distributor/order-management/rejected-orders"
              component={OrderDetails}
            />

            <PrivateRoute
              exact
              path="/distributor/orders-in-transit"
              component={ShippedOrders}
            />

            <PrivateRoute
              exact
              path="/distributor/add-location"
              component={Settings}
            />

            <PrivateRoute
              exact
              path="/distributor/location-list"
              component={Settings}
            />
            <PrivateRoute
              exact
              path="/distributor/list"
              component={DisList}
            />
            <PrivateRoute
              exact
              path="/distributor/ordersuccess"
              component={DisOrderSuccess}
            />
            <PrivateRoute
              exact
              path="/distributor/displaceorder"
              component={DisPlaceOrder}
            />
            <PrivateRoute
              exact
              path="/distributor/materialspecifications"
              component={DisMaterial}
            />
            <PrivateRoute
              exact
              path="/distributor/carboncalculations"
              component={DisCarboncalc}
            />
            <PrivateRoute
              exact
              path="/distributor/quotations"
              component={Quotations}
            />
             <PrivateRoute
              exact
              path="/distributor/payments"
              component={Payments}
            />
             <PrivateRoute
              exact
              path="/distributor/carbonoffset"
              component={Carbonoffset}
            />
            <PrivateRoute
              exact
              path="/distributor/x"
              component={X}
            />
            <PrivateRoute
            exact
            path="/distributor/y"
            component={Y}
          />
          <PrivateRoute
          exact
          path="/distributor/z"
          component={Z}
        />
                  <PrivateRoute
          exact
          path="/distributor/carbonemissions"
          component={Carbon}
        />
        
        <PrivateRoute
          exact
          path="/distributor/healthandsafety"
          component={Health}
        />
                <PrivateRoute
          exact
          path="/distributor/diversityandethics"
          component={Diversity}
        />

            {/* retailer Routes */}

            <PrivateRoute
              exact
              path="/retailer/my-trading-partners"
              component={MyTradingPartners}
            />

            <PrivateRoute
              exact
              path="/retailer/returns"
              component={RetailerReturns}
            />
            <PrivateRoute
              exact
              path="/retailer/recalls"
              component={RetailerRecalls}
            />
            <PrivateRoute
              exact
              path="/retailer/product-lsit"
              component={RetailerProductList}
            />
            <PrivateRoute
              exact
              path="/retailer/product-details/:id"
              component={RetailerProductDetails}
            />

            <PrivateRoute
              exact
              path="/retailer/add-to-cart"
              component={RetailerAddToCart}
            />
            <PrivateRoute
              exact
              path="/retailer/place-order"
              component={PlaceOrder}
            />
            <PrivateRoute
              exact
              path="/retailer/order-success/:id"
              component={OrderSuccess}
            />
            <PrivateRoute
              exact
              path="/retailer/order-management"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/retailer/order-management/my-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/retailer/order-management/new-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/retailer/order-management/accepted-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/retailer/order-management/rejected-orders"
              component={OrderDetails}
            />

            <PrivateRoute
              exact
              path="/retailer/orders-in-transit"
              component={ShippedOrders}
            />

            <PrivateRoute
              exact
              path="/retailer/add-location"
              component={Settings}
            />
            <PrivateRoute
              exact
              path="/retailer/apptest"
              component={List}
            />

            <PrivateRoute
              exact
              path="/retailer/list"
              component={List}
            />
            <PrivateRoute
              exact
              path="/retailer/list/saved"
              component={ListOrderSuccess}
            />

            <PrivateRoute
              exact
              path="/retailer/location-list"
              component={Settings}
            />
            <PrivateRoute
              exact
              path="/retailer/materialspecifications"
              component={Material}
            />
            <PrivateRoute
              exact
              path="/retailer/carboncalculations"
              component={Carboncalc}
            />
                        <PrivateRoute
              exact
              path="/retailer/dashboard"
              component={RetailerDashboard}
            />

            {/* Manufacturer Routes */}
            <PrivateRoute
              exact
              path="/manufacturer/dashboard"
              component={Dashboard}
            />
            <PrivateRoute
              exact
              path="/manufacturer/order-management"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/manufacturer/order-management/my-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/manufacturer/order-management/new-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/manufacturer/order-management/accepted-orders"
              component={OrderDetails}
            />
            <PrivateRoute
              exact
              path="/manufacturer/order-management/rejected-orders"
              component={OrderDetails}
            />

            <PrivateRoute
              exact
              path="/manufacturer/orders-in-transit"
              component={ShippedOrders}
            />

            <PrivateRoute
              exact
              path="/manufacturer/track"
              component={TrackAndTrace}
            />

            <PrivateRoute
              exact
              path="/manufacturer/trace"
              component={TrackAndTrace}
            />

            <PrivateRoute
              exact
              path="/manufacturer/add-new-product"
              component={UploadYourProducts}
            />

            <PrivateRoute
              exact
              path="/manufacturer/added-product-list"
              component={UploadYourProducts}
            />

            <PrivateRoute
              exact
              path="/manufacturer/upload-bulk-products"
              component={UploadYourProducts}
            />

            <PrivateRoute
              exact
              path="/manufacturer/trading-partners/new"
              component={TradingPartners}
            />
            <PrivateRoute
              exact
              path="/manufacturer/trading-partners/accepted"
              component={TradingPartners}
            />

            <PrivateRoute
              exact
              path="/manufacturer/trading-partners/rejected"
              component={TradingPartners}
            />
            <PrivateRoute
              exact
              path="/manufacturer/add-location"
              component={Settings}
            />

            <PrivateRoute
              exact
              path="/manufacturer/location-list"
              component={Settings}
            />

            {/* Redirect to login */}
            <Redirect from="/" to="/login" />
          </Switch>
        </div>
      </CartProvider>
    </>
  );
};

export default withRouter(App);
