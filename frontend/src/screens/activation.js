import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';



export default function activation(){

  const [email,setemail] = useState('');
  const [theString,setthestring] = useState('');

  const [success,setsuccess] = useState(null);
  const [failed,setfailed] = useState('');

 
 

  const submit = async (e)=>{
    e.preventDefault();
    
    const response = await fetch("http://127.0.0.1:7000/users/confirm-email",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          email,
          theString,
          
        })
    });
    const content =await response.json();
   
    try {
      setsuccess(content.message);
      setfailed(content.error.message)
      
    } catch (err) {
      console.error(err.message);      
    }
  
 
        

  }
  if(success){
    return <Redirect to="/signin"></Redirect>
}
 
    return(
      
      
              
          <div className="activation">
              <div className="coll ">
                
                 
                  <div className="main-card card card-signin">
                      <span className="pt-5">
                         <a> <h3 className="text-center" >Activation</h3></a>
                         
                      </span>
                    <form onSubmit={submit}>
                   < div className="form-row pt-5">
                      <div className="form-group col-lg-12 signin-form pb-5">
                            
                      <input type="email" placeholder="Email"   onChange={e => setemail(e.target.value) } ></input>
                          
                        
                        </div>
                        <div className="form-group col-lg-12  signin-form">
                            
                            <input type="text" placeholder="Activation code"  onChange={e => setthestring(e.target.value) } ></input>
                                
                              
                              </div>
                              <div className="form-group col-md-12 signin-form pt-5 ">
                            
                      
                            
                            <button  className="confirm">Continue</button>
                            
                            </div>
                        </div>
                        {
                        success&&
                        success? <div>{success}</div> : <div>{failed}</div>
                        }
                    </form>
                      
                     

                  </div>
                  
              </div>
              


          </div>

      
     
          
    )
}