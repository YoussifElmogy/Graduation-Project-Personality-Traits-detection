import React from "react";
import { Link } from "react-router-dom";

import logout from "../ui/logout.png";
import settings from "../ui/settings.png";
import live from "../ui/live.png";
import live2 from "../ui/live2.png";
import last from "../ui/last.png";
import logoo from "../ui/logo.png";
import Carousel from 'react-bootstrap/Carousel'
import reactjs from "../ui/reactjs.jpg";

import contact from "../ui/travel.png";


export default function CoachDashboard() {
 



  return (
    <div>
      <div className="container-fluid dashboardback">
        <div className="row">
          <div className="col-5">
            <div className="dashmenu">
              <div>
                <Link to="/coachlogin">
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
                <Link to="/live">
                  <img src={live} alt="" />
                </Link>
              </div>
              <div>
                <img src={live2} alt="" />
              </div>
              <div>
                <img src={last} alt="" />
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

            <br></br>
            <br></br>
            <div className="welcome h1 pl">Courses</div>
            <br></br>
            <Carousel className="Carousel">
              <Carousel.Item>
                <img
                  className="d-block courseimg"
                  src={reactjs}
                  alt="First slide"
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block courseimg"
                  src={contact}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block courseimg"
                  src={contact}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br></br>

            <div className="welcome h1 pl">BlogPosts</div>

            <br></br>
            <Carousel className="Carousel">
              <Carousel.Item>
                <img
                  className="d-block courseimg"
                  src={contact}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block courseimg"
                  src={contact}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block courseimg"
                  src={contact}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-2">
            <div className="dashCard coachdash">
              <span>
                {" "}
                <Link to="/createcourse">
                  {" "}
                  <a href="" className="mr-5">
                    Add Course{" "}
                  </a>
                </Link>
                <Link to="/createBlogpost">
                  <a href="">Add BlogPost</a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
