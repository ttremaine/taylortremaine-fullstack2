import React from "react";
import bootstrap from "bootstrap";
import Card from "./context";
import { UserContext } from "../App";

function Logout(){
  const { state, dispatch }     = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [balance, setBalance]   = React.useState(0);
  const [isLogin, setIsLogin]   = React.useState(false); 
  const [isAuth, setIsAuth]     = React.useState(false);
  
  React.useEffect(() => {
    if(isLogin) {
      setShow(false);
      setStatus(state.email + " is logged in");
      //setBalance(state.balance);
    } else {
      setEmail('');
      setShow(true);
    }
  }, []);
  
  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      alert("Error: " + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    } else

      return true;
  }

  function updateState() {
    const loginUser = { 
      name: name,
      email: email,
      password: password,
      balance: balance,
      isLogin: isLogin,
      isAuth: isAuth
    };
    console.log('update: ' + balance);
    dispatch( { type: "LOGIN_USER", payload: { loginUser }});
  }

  function handleLogout() {
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    fetch(`/account/login/${email}/${password}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              setStatus('');
              setShow(true);
              setIsLogin(false);
              setBalance(data.balance);
              setName('');
              setEmail('');
              setPassword('');
              setBalance(0);
              setIsAuth(false);
              console.log('JSON:', data);
              console.log(data.balance);
          } catch(err) {
              setStatus(text)
              setShow(true);
              setPassword('');
              console.log('err:', text);
          }
    });

    if(!isLogin) {
      setShow(false);
      setStatus(state.email + " is logged out");
      //setBalance(state.balance);
    } else {
      setShow(true);
    }
   
    //setShow(false);
    updateState();
  }    
  
  return (
    <Card
      bgcolor="primary"
      header="Logout"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" disabled={!email && !password} onClick={handleLogout}>Logout</button>
              </>
            ):(
              <>
              <h5>Logged Out</h5>
              </>
            )}
      useraccount={email}
    />
  )
}

export default Logout;