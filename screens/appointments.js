import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

export default function appointments() {
      if (localStorage.getItem("token") == "null") {
        return <Redirect to="/signin"></Redirect>;
      }
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [hours, sethours] = useState("");

  const [success, setsuccess] = useState(null);
  const [failed, setfailed] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("/users/add-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        date,
        hours,
        time,
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
  return (
    <div>
      <div className="container">
        <h1>Make an appointment</h1>
        <br></br>
        <br></br>

        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setname(e.target.value)}
              className="formcourse"
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>date</Form.Label>
            <Form.Control
              onChange={(e) => setdate(e.target.value)}
              className="formcourse"
              type="text"
              placeholder="Date"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hours</Form.Label>
            <Form.Control
              onChange={(e) => sethours(e.target.value)}
              className="formcourse"
              type="text"
              placeholder="Hours"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control
              onChange={(e) => settime(e.target.value)}
              className="formcoursed formcourse"
              type="text"
              placeholder="Time"
            />
          </Form.Group>

          <Button className="formcourse" variant="primary" type="submit">
            Submit
          </Button>
          {success && success ? <div>{success}</div> : <div>{failed}</div>}
        </Form>
      </div>
    </div>
  );
}
