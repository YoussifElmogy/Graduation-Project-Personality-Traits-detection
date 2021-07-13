import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  // const [courses,setCourses ] = useState(null);
  // useEffect(()=>{
  //     const fetchData = async () =>{

  //         const data = await fetch('/courses/display-course');
  //         const jsonData = await data.json();
  //         setCourses(jsonData);

  //     };
  //     fetchData();
  // },[]);

  return (
    <div>
      <div className="jumbotron ">
        <div className="container">
          <h1 className="display-4">Hello, everyone! </h1>
          <p className="lead">
            “It feels incredible to finally be understood.” That’s what
            everybody says. <br></br>Take our Personality detector test and get
            an accurate description of who you are and why you do things the way
            you do.
          </p>
          <Link to="/JoinNow">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block btntest"
            >
              <h1>For testing your personality, please Join now!</h1>
            </button>
          </Link>
          <hr className="my-4"></hr>
          <p>
            You already tested your personality?
            <Link to="/signin">
              {" "}
              <a className="alreadylogged">Login here!</a>
            </Link>{" "}
            
          </p>
         
            {" "}
            <Link to="/coachsignup">
              <h1 className="coach"> Coach? Join Now! </h1>
            </Link>
         
        </div>
      </div>
    </div>
  );
}
