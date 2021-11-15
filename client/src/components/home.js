import React from "react";
//import bootstrap from "bootstrap";
//import popper from "popper.js";
import HomeCard from "./homecard";

function Home(){
  return (
    <HomeCard
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to TaylorBank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}

export default Home;