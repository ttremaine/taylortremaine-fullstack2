import React from "react";
import bootstrap from "bootstrap";
import Card from "./context";
import { UserContext } from "../App";

function Withdraw(){
  const { state, dispatch } = React.useContext(UserContext);
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [name, setName]     = React.useState("");
  //const [email, setEmail]   = React.useState("");
  //const [password, setPassword] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [balance, setBalance] = React.useState(0);

  const isLogin = state.isLogin;
  const isAuth = state.isAuth;
  const email = state.email;
  const password =  state.password;

  console.log('state object:' + JSON.stringify(state));

  React.useEffect(() => {
    /*if(isLogin) {
      email = state.email;
      password = state.password;
    } */
    fetch(`/account/login/${email}/${password}`)
        .then(response => response.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                setBalance(data.balance);
                console.log('JSON:', data);
                console.log(data.balance);
            } catch(err) {
                console.log('err:', text);
            }
        });
    console.log('Use Effect ' + email);
  })

  console.log('UseEffect state object: ' + JSON.stringify(state));

  function clearForm() {
    setAmount(0);
  }
  function updateState() {
    const userDeposit = {
      name: name,
      email: email,
      password: password,
      amount: amount,
      balance: balance,
      isLogin: isLogin,
      isAuth: isAuth
    };
    //setBalance(data.);
    dispatch( { type: "UPDATE_BALANCE", payload: { userDeposit }});
  }

  function handleWithdraw() { 
    fetch(`/account/update/${email}/${-amount}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              setStatus('');
              setSuccess(true);
              console.log('JSON:', data);
              //setBalance(data.balance);
          } catch(err) {
              setStatus('Withdraw failed')
              console.log('err:', text);
          }
    });
    
    updateState();
    clearForm();
    console.log('After Withdraw ' + email);
    console.log('After withdraw state: ' + state.balance);
    setShow(true);
  }   
  
  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      body={show ? ( 
        <>
        <h5>Current Balance: {balance}</h5><br />
        Amount<br/>
        <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-light" disabled={!amount} onClick={handleWithdraw}>Withdraw</button>
        </>
      ):(
        <>
        <h5>{success}</h5>
        </>
      )}
      useraccount={email}
      status={status}
    />
  )
}

export default Withdraw;