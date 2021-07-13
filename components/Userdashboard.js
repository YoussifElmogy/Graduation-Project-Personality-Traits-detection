import React from 'react';
import { Link } from 'react-router-dom'
import picc from '../ui/dash.png'
import logout from '../ui/logout.png'
import settings from '../ui/settings.png'
import live from '../ui/live.png'
import live2 from '../ui/live2.png'
import last from '../ui/last.png'
import logoo from '../ui/logo.png'
import ReactTypingEffect from 'react-typing-effect';
import  {  useEffect, useState } from 'react';



export default function Userdashboard(){

    const [name, setname] = useState('');
    
  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch("http://127.0.0.1:7000/dashboard/get-personality", {

            headers: { "x-auth-token": localStorage.getItem("token") },
            withCredentials: true,



          });
          const content = await response.json();

          setname(content.data.userinfo.name);
       
          console.log(content.data.userinfo);
        }
        catch (err) {
          console.log(err.message)
        }


      }
    )();


  });

   

    
    return (
      <div>
        <div className="container-fluid dashboardback">
          <div className="dashimg">
            <img src={picc}></img>
          </div>
          <div className="welcome">
            <ReactTypingEffect
              className="h1"
              text={"Welcome, " + name}
              speed="100"
            />
          </div>
          <div className="row">
            <div className="col-5">
              <div className="dashmenu">
                <div>
                  <Link to="/signin">
                    <img
                      onClick={() => {
                        localStorage.setItem("token", null);
                      }}
                      src={logout}
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link to="/dashboard">
                    <img src={live2} alt="" />
                  </Link>
                </div>

                <div>
                  <Link to="/todolist">
                    <img src={last} alt="" />
                  </Link>
                </div>
                <div>
                  <img src={live2} alt="" />
                </div>
                <div>
                  <img src={live} alt="" />
                </div>
                <div>
                  <img src={settings} alt="" />
                </div>
              </div>
            </div>
            <div className="col-5 dashcol">
              <div className="dashlogo">
                {" "}
                <img src={logoo}></img>
              </div>
            </div>
            <div className="col-2">
              <div className="dashCard">
                <span>
                  {" "}
                  <a href="">Dashboard </a>&ensp; | &ensp;
                  <Link to="course">
                    {" "}
                    <a href="">Courses</a>{" "}
                  </Link>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}