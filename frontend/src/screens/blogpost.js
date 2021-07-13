import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import reactjs from "../ui/reactjs.jpg";

export default function blogpost() {
  const [ok, sok] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:7000/users/all-blogpost", {
          headers: { "x-auth-token": localStorage.getItem("token") },
          withCredentials: true,
        });
        const content = await response.json();

        sok(content.data);

        console.log(content.data);
        console.log(ok);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);
  const imag = [
    {
      photo: reactjs,
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <input
            type="text"
            id="myInput"
            placeholder="Search for courses.."
          ></input>
        </div>

        <div className="row">
          {ok.map((item) => (
            <div key={item.id} className="col-3">
              <Card style={{ width: "18rem" }}>
                {imag.map((e, idx) => (
                  <Card.Img
                    key={idx}
                    className="courseimg2"
                    variant="top"
                    src={e.photo}
                  />
                ))}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  
                  <Card.Text>
                  {item.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
