import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const testtodo = () => {
 

  const [ok, sok] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:7000/to-do-list/all-event",
          {
            headers: { "x-auth-token": localStorage.getItem("token") },
            withCredentials: true,
          }
        );
        const content = await response.json();

        sok(content.data);
        

        console.log(ok);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

 
//   const check = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/to-do-list/mark-Event", {
//       headers: {
//         "Content-Type": "application/json",
//         "x-auth-token": localStorage.getItem("token"),
//       },
//       withCredentials: true,
//     });
//     const content = await response.json();

//     console.log(content);
//     try {
//       setsuccess(content.message);
//       setfailed(content.error.message);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

  return (
    <div>
      
      {ok.map((item) => (
        <div key={item.id} >{item.name}</div>
      ))}

    
    </div>
  );
};
export default testtodo;
