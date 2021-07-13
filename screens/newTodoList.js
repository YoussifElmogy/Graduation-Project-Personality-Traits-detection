import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const newTodoList = () => {
  const [name, setnamee] = useState("");


 

  const [success, setsuccess] = useState(null);
  const [failed, setfailed] = useState("");
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
   

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("/to-do-list/add-Event", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      withCredentials: true,
      body: JSON.stringify({
        name,
      }),
    });
    const content = await response.json();
    setnamee(content.data.name);
    console.log(content);
    try {
      setsuccess(content.message);
      setfailed(content.error.message);
    } catch (err) {
      console.error(err.message);
    }
  };
 
  const check = async (e) => {
    e.preventDefault();

    const response = await fetch("/to-do-list/mark-Event", {
    

      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      withCredentials: true,
   
    });
    const content = await response.json();
   
    console.log(content);
    try {
      setsuccess(content.message);
      setfailed(content.error.message);
    } catch (err) {
      console.error(err.message);
    }
  };

   
 


  return (
    <div>
      <form className="todoform mb-5">
        <input
          onChange={(e) => setnamee(e.target.value)}
          type="text"
          className="todo-input"
        />

        <button onClick={submit} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      {ok.map((item) => (
        <div key={item.id} className="todo">
          <li  className="todo-item ">{item.name}</li>

          <button onClick={check} className="complete-btn">
            <i
              
              className="fas fa-check"
            ></i>
          </button>
          <button className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}

      {success && success ? <div>{success}</div> : <div>{failed}</div>}
    </div>
  );
};
export default newTodoList;
