import React, { useState } from "react";
import "./MakeAdmin.css";
//sweet alert use
import swal from "sweetalert";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch(`http://localhost:5000/users/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          swal("Good job!", "You Successfully added admin", "success");
        }
      });
  };
  return (
    <div>
      <div className="admin-header">
        <h1>Make Admin For The extra Privilages</h1>
      </div>
      <div className="make-admin">
        <form onSubmit={handleAdminSubmit}>
          <input
            onBlur={handleOnBlur}
            type="email"
            placeholder="Enter Admin Email"
          />
          <button type="submit">make admin</button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
