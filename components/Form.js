import React, {  useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ setstatus,inputtxt, setinputtxt, todos, settodos }) => {
  
      const [name, setnamee] = useState(" ");
      const [description, setdescription] = useState(" ");
      
     
     
      const [success, setsuccess] = useState(null);
      const [failed, setfailed] = useState("");
      
  const inputtxtHandler = (e) => {
    setinputtxt(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    settodos([
      ...todos,
      { text: inputtxt, completed: false, id: Math.random() * 1000 },
    ]);
    setinputtxt("");
  };
  const statusHandler =(e)=>{
      setstatus(e.target.value);

  }

    const submit = async (e) => {
      e.preventDefault();

      const response = await fetch("/to-do-list/add-event", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        withCredentials: true,
        body: JSON.stringify({
          name,
          description
        
        }),
      });
      setdescription("")
      const content = await response.json();
      try {
        setsuccess(content.message);
        setfailed(content.error.message);
        console.log(success)
        console.log(failed)

      } catch (err) {
        console.error(err.message);
      }
    };
    


  return (
    <div>
      <form className="todoform mb-5">
        <input
          value={inputtxt}
          onChange={(e) => setnamee(e.target.value)}
          onChangeCapture={inputtxtHandler}
          type="text"
          className="todo-input"
          placeholder="Your plan for today..."
        />
        <input
          className="ml-3"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Description"
        ></input>

        <button
          onClick={submitTodoHandler}
          onClickCapture={submit}
          className="todo-button ml-3"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};
export default Form;
