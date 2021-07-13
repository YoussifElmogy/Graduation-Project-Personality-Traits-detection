import React, { useState } from "react";
import { Redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function coachlogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [success, setsuccess] = useState(null);
  const [failed, setfailed] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:7000/coaches/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        email,
        password,
      }),
    });
    const content = await response.json();

    try {
      // eslint-disable-next-line no-prototype-builtins
      // if (window.UndefinedVariable)
      if (content.data.authenticated == true)
        localStorage.setItem("token", content.data.token);
      console.log(content);
      setsuccess(content.message);
    } catch (err) {
      setfailed(content.error.message);
      console.error(err.message);
      console.log(content);
    }
  };

  if (success) {
    return <Redirect to="/CoachDashboard"></Redirect>;
  }
  return (
    <div className="signin">
      <div className="coll ">
        <div className="main-card card card-signin">
          <span className="pt-5">
            <a href="/signin">
              {" "}
              <h3>Login</h3>
            </a>
            <a href="/coachsignup">
              <h3 className="active">Join Now</h3>
            </a>
          </span>
          <form onSubmit={submit}>
            <div className="form-row pt-5">
              <div className="form-group col-lg-12 signin-form pb-5">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>
              <div className="form-group col-lg-12  signin-form">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                ></input>
              </div>
              <div className="form-group col-md-12 signin-form pt-5">
                <button className="confirm">Login</button>
              </div>
            </div>
            {success && success ? <div>{success}</div> : <div>{failed}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
