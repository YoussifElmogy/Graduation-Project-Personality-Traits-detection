import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

export default function createBlogpost() {
   if (localStorage.getItem("token") == "null") {
     return <Redirect to="/coachlogin"></Redirect>;
   }


     
     const [title, settitle] = useState("");
     const [contentt, setcontent] = useState("");
  
     
    
     
     const [success, setsuccess] = useState(null);
     const [failed, setfailed] = useState("");

     const submit = async (e) => {
       e.preventDefault();

       const response = await fetch(
         "http://127.0.0.1:7000/blogposts/add-blogpost",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "x-auth-token": localStorage.getItem("token"),
           },
           withCredentials: true,
           body: JSON.stringify({
             
             title,
             contentt,
           }),
         }
       );
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
        <h1>Create BlogPost</h1>
        <br></br>
        <br></br>

        <Form onSubmit={submit}>
         
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => settitle(e.target.value)}
              className="formcourse"
              type="text"
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              onChange={(e) => setcontent(e.target.value)}
              className="formcoursed formcourse"
              type="text"
              placeholder="Write your content here!"
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
