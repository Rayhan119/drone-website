import React from "react";
import "./Dashboard.css";
import AddServices from "../AddServices/AddServices";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import MakeAdmin from "./Admin/MakeAdmin";
import DashboardHome from "./DashboardHome/DashboardHome";
import MyOrder from "../MyOrder/MyOrder";
import ManageOrder from "../ManageOrder/ManageOrder";
import Payment from "../Payments/Payment";
import sidebarImg from "../../../images/droneImages/drone-1.jpg";
import useAuth from "../../../Hooks/useAuth";
import Review from "../Reviews/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, handleGoogleSignOut } = useAuth();
  return (
    <div className="dashboard">
      <Col sm={12} md={3} className="sidebar">
        <div className="sidebar-heading ">
          <img src={sidebarImg} alt="" />
          <h2>Drone world</h2>
          <p className="text-danger">We belive in best quality</p>
        </div>
        <Nav className="flex-column sidebar-link">
          <ul>
            <li>
              <Link to={`${url}`}>
                <i class="fas fa-home"></i>Dashboard
              </Link>
            </li>

            <li>
              <Link to={`${url}/payment`}>
                <i class="fas fa-money-check-alt"></i>Payment
              </Link>
            </li>
            <li>
              <Link to={`${url}/myOrder`}>
                <i class="fas fa-cart-plus"></i>My Order
              </Link>
            </li>
            <li>
              <Link to={`${url}/review`}>
                <i class="fas fa-comments"></i>Review
              </Link>
            </li>
            <li>
              <Link onClick={handleGoogleSignOut} to={`/home`}>
                <i class="fas fa-sign-out-alt"></i>Log out
              </Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to={`${url}/addService`}>
                    <i class="fas fa-plus-square"></i>add service
                  </Link>
                </li>
                <li>
                  <Link to={`${url}/makeAdmin`}>
                    <i class="fas fa-users-cog"></i>make admin
                  </Link>
                </li>
                <li>
                  <Link to={`${url}/manageOrder`}>
                    <i class="fas fa-cart-plus"></i>Manage Order
                  </Link>
                </li>
              </>
            )}
          </ul>
        </Nav>
      </Col>
      <Col sm={12} md={9} className="dashborad-content">
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/addservice`}>
            <AddServices></AddServices>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route exact path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
        </Switch>
      </Col>
    </div>
  );
};

export default Dashboard;
