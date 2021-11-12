import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Context/PrivateRoute/PrivateRoute";
import Contact from "./Pages/ContactUs/Contact";
import MakeAdmin from "./Pages/Dashboard/Dashboard/Admin/MakeAdmin";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AboutUs from "./Pages/Home/AboutUs/AboutUs";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import NotFound from "./Pages/PageNotFound/NotFound";
import Details from "./Pages/PlaceOrder/OrderDetails/Details";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Shop from "./Pages/Shop/Shop/Shop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute exact path="/shop">
            <Shop></Shop>
          </PrivateRoute>
          <PrivateRoute exact path="/shop/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
