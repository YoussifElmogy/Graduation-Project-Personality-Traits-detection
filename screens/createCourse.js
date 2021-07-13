import React,{useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router";

export default function createCourse() {
   if (localStorage.getItem("token") == "null") {
     return <Redirect to="/coachlogin"></Redirect>;
   }

     const [name,setname] = useState('');
    const [description,setdescription] = useState('');
    const [hours,sethours] = useState('');
    const [category,setcategory] = useState('');
       const [success,setsuccess] = useState(null);
    const [failed,setfailed] = useState('');


        const submit = async (e)=>{
        e.preventDefault();
        
        const response = await fetch("/courses/add-course", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name,
            description,
            hours,
            category,
          }),
        });
        const content =await response.json();
        try {
            setsuccess(content.message);
            setfailed(content.error.message)
            
          } catch (err) {
            console.error(err.message);      
          }
          
        
       
           
           
        

    }
  return (
    <div>
      <div className="container">
        <h1>Create Course</h1>
        <br></br>
        <br></br>

        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setname(e.target.value)}
              className="formcourse"
              type="text"
              placeholder="Enter course name"
            />
          </Form.Group>
          

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              onChange={(e) => setcategory(e.target.value)}
              className="formcourse"
              type="text"
              placeholder="Category"
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
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setdescription(e.target.value)}
              className="formcoursed formcourse"
              type="text"
              placeholder="Write your description here!"
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
