/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Todo = ({text,todo,todos,settodos}) => {
    
    const [ok, sok] = useState([]);
   

    const deleteHandler=()=>{
        // eslint-disable-next-line react/prop-types
        settodos(todos.filter((el) => el.id !== todo.id));

    }
    
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
         console.log(ok)

       } catch (err) {
         console.log(err.message);
       }
     })();
   }, []);

  
  
   

     

    const completehandler=()=>{
        // eslint-disable-next-line react/prop-types
        settodos(todos.map(items=>{
            // eslint-disable-next-line react/prop-types
            if(items.id===todo.id){
                return{
                    ...items,completed: !items.completed
                }
            }
            return items;
        }))
    }
    
     
  return (
      
      <div className="todo">
          
          <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
          <button onClick={completehandler} className="complete-btn"><i className="fas fa-check"></i></button>
         <button onClick={deleteHandler} className="trash-btn" >
             <i className="fas fa-trash" ></i>
             </button>
      </div>

    
  );
  }
export default Todo;
