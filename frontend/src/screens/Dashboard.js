import React, { Fragment, useEffect, useState } from 'react';

import { Link, Redirect } from 'react-router-dom';

import contact from '../ui/contact.png'
import synergy from '../ui/synergy.png'
import travel from '../ui/travel.png'
import gardens from '../ui/gardens.png'
import urban from '../ui/urban.png'
import Userdashboard from '../components/Userdashboard'



// eslint-disable-next-line react/prop-types
export default function Dashboard() {

  if (localStorage.getItem("token") == 'null') {
    return <Redirect to="/signin"></Redirect>
  }


 
  const [personalitydetection, setpersonalitydetection] = useState('');




  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch("http://127.0.0.1:7000/dashboard/get-personality", {

            headers: { "x-auth-token": localStorage.getItem("token") },
            withCredentials: true,



          });
          const content = await response.json();

         
          setpersonalitydetection(content.data.pesonality.personality);
          console.log(content.data.userinfo);
        }
        catch (err) {
          console.log(err.message)
        }


      }
    )();

  

  });


  return (
    <Fragment>
      <div>
        <Userdashboard></Userdashboard>

        <div className="profileDashboard">
          <div className="container">
            <div className="some-page-wrapper">
              <div className="row">
                <div className="col-lg-6 pt-5 mb-5">
                  <div className="blue-column mb-5">
                    <div className="leftblue person">
                      <h1 className="pt-5 ">
                        Your personality detection result
                      </h1>
                    </div>
                    <div className="rightblue person">
                      <h2 className="">
                        {personalitydetection[1] === "1" ? (
                          <div className="mb-3">1-Sociable person</div>
                        ) : (
                          <div className="mb-3">1-Introvert person</div>
                        )}
                        {personalitydetection[3] === "1" ? (
                          <div className="mb-3">2-Neurotic person</div>
                        ) : (
                          <div className="mb-3">2-tranquil person</div>
                        )}
                        {personalitydetection[5] === "1" ? (
                          <div className="mb-3">3-Friendly person</div>
                        ) : (
                          <div className="mb-3">3-hostile person</div>
                        )}
                        {personalitydetection[7] === "1" ? (
                          <div className="mb-3">4-diligent person</div>
                        ) : (
                          <div className="mb-3">4-Casual person</div>
                        )}
                        {personalitydetection[9] === "1" ? (
                          <div>5-Open to experience</div>
                        ) : (
                          <div>5-Closed mindedness</div>
                        )}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 pt-5 mb-5">
                  <div className="green-column">
                    <div className="contact pt-5 mb-5 ">
                      <img src={contact} alt="" />
                    </div>
                    <div className="text-center mb-5">
                      <button type="button">Message</button>
                    </div>
                    <Link to="/appointments">
                      <div className="text-center">
                        <button type="button">Make an appointment</button>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 pt-1 cont">
                  <div className="text center font-weight-bold mb-5">
                    Top Motivitional Blogposts
                  </div>
                  <div className="orange-column mb-5">
                    <img src={synergy} alt="" />
                  </div>
                  <div className="orange-column mb-5">
                    <img src={travel} alt="" />
                  </div>
                  <div className="orange-column mb-5">
                    <img src={gardens} alt="" />
                  </div>

                  <div className="orange-column">
                    <img src={urban} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}