import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Link, Route, HashRouter } from "react-router-dom";
import CreateAccount from "./components/createaccount.js";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Logout from "./components/logout";
import Balance from "./components/balance";
import usersReducer from "./components/reducer";

export const UserContext = React.createContext({
  name:"", 
  email:"",
  password:"",
  balance:0,
  isLogin: false,
  isAuth: false,
});

function App() {
  const initialContext = React.useContext(UserContext);
  const [state, dispatch] = React.useReducer(usersReducer, initialContext);

  return (
    <HashRouter>
        <NavBar/>        
        <UserContext.Provider value={{ state, dispatch }}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/logout/" component={Logout} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
    </HashRouter>
  );
}

/*ReactDOM.render(
  <App/>,
  document.getElementById('root')
);*/

export default App;
