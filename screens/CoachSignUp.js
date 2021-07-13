import React, { Fragment, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF);
library.add(faTwitterSquare);
//import {FaTwitter} from 'react-icons/fa'
import { Redirect } from "react-router-dom";

const CoachSingUp = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [password_confirmation, setconfirm] = useState("");
  const [email, setemail] = useState("");
 


  const [description, setdescription] = useState("");
  const [experienceLevel, setexperienceLevel] = useState("");


  const [phoneNumber, setphoneNumber] = useState("");
    const [image, setimage] = useState("");

  const [success, setsuccess] = useState(null);
  const [failed, setfailed] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("/coaches/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        password,
        password_confirmation,
        email,
        description,
        experienceLevel,
        phoneNumber,
        image,
       
      }),
    });
    const content = await response.json();
    try {
      setsuccess(content.message);
      setfailed(content.error.message);
    } catch (err) {
      console.error(err.message);
    }
  };
  if (success) {
    return <Redirect to="/coachactivation"></Redirect>;
  }

  return (
    <Fragment>
      <div className="signup">
        <div className="coll ">
          <div className="main-card card card-signup">
            <span className="pt-5">
              <a href="">
                {" "}
                <h3>Join Now</h3>
              </a>
              <a href="/coachlogin">
                <h3 className="active">Login</h3>
              </a>
            </span>
            <form onSubmit={submit}>
              <div className=" test form-row pt-5">
                <div className="form-group col-sm-6 ">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-sm-6 pb-5 ">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setemail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-sm-6  ">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-sm-6 pb-5 ">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setconfirm(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-sm-6  ">
                  <input
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setdescription(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-sm-6 pb-5 ">
                  <input
                    type="text"
                    placeholder="Experience Level"
                    onChange={(e) => setexperienceLevel(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-sm-6 pb-5 ">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setphoneNumber(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-sm-6   ">
                  <input
                    type="text"
                    placeholder="Image"
                    onChange={(e) => setimage(e.target.value)}
                  ></input>
                </div>

                <div className="form-group col-md-12">
                  <button className="confirm">CONTINUE</button>
                </div>
              </div>
              {success && success ? <div>{success}</div> : <div>{failed}</div>}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CoachSingUp;
