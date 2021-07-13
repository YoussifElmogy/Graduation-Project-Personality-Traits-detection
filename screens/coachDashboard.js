import React from "react";


import { useEffect,  } from "react";
import { Redirect } from "react-router";
import CoachDashboard from "../components/Coachdashboard";


export default function coachDashboard() {
      if (localStorage.getItem("token") == "null") {
        return <Redirect to="/coachlogin"></Redirect>;
      }


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:7000/coaches/login", {
          headers: { "x-auth-token": localStorage.getItem("token") },
          withCredentials: true,
        });
        const content = await response.json();

       

        console.log(content);
      } catch (err) {
        console.log(err.message);
      }
    })();
  });

  return (
    <div>
     <CoachDashboard></CoachDashboard>
     
     

      
    </div>
  );
}
