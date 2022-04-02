import { Button,Form } from "react-bootstrap";
import React,{useState, userEffect, useContext} from 'react';
import Home from './Home';



function Login() {


  const [phone_number,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [full_name,setName]=useState("");
  const [id,setId]=useState("");
  const [RoleId,setRoleId]=useState("");
  const [role,setRole]=useState("");
  const [token,setToken]=useState("");
  
  // const [global.config.status.success, setSuccess] = useState(false);
  let info ={id,full_name,role,RoleId,token};

  // function login(){
  //   console.log(phone,password);
  //   let item={phone,password};
  //   let result = await fetch(""),{}

  // }  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log({phone_number,password});
    let data={phone_number,password}

    const response = await fetch("https://billbook.dotminds.in/public/api/user/login",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },body:JSON.stringify(data)
    }).then((result)=>{
      //console.log("result",result);
      result.json().then((resp)=>{
        console.log("resp",resp.result[0].full_name);
        setName(resp.result[0].full_name);
        setId(resp.result[0].user_id);
        setRoleId(resp.result[0].user_role_id);
        setRole(resp.result[0].user_role_name);
        setToken(resp.result[0].token);
        // setSuccess(resp.success);
        global.config.status.success= resp.success;
        console.log("resp",resp);
        
      })
    });
    

    setPhone('');
    setPassword('');
    
    
       
  }
  
  return (
   
<>
    {global.config.status.success ? (<Home info={info}
    
    />) 
    
    :(
    <div className="App">
     <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicPhone">
    
    <Form.Control type="phone" placeholder="Enter Phone Number"  
    onChange={(e)=>setPhone(e.target.value)} value={phone_number}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Enter Password" 
    onChange={(e)=>setPassword(e.target.value)} value={password}/>
  </Form.Group>
{/* <button onClick={login}></button> */}
  <Button type="submit" onClick={handleSubmit} >
  {/* <Button type="submit" onClick={login}> */}
    Submit
  </Button>
</Form>
    </div>
    )}
    </>
  );
}

export default Login