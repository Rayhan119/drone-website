import React from "react";
import "./NotFound.css";

import { Link } from "react-router-dom";
import notfound from "../../images/Error-404.png";
const NotFound = () => {
  return (
    <div>
      <Link to="/home">
        <div className="not-found-btn">
          <button>Go to home</button>
        </div>
      </Link>
      <div className="not-found-section">
        <img src={notfound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
