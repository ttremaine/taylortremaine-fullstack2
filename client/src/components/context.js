import React from "react";
import bootstrap from "bootstrap";
import { BrowserRouter as Link, Route, HashRouter } from "react-router-dom";
/*const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;*/


function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="text-left" style={{fontSize: "16px"}}>{props.header}</div>
            </div>
            <div className="col-5">
              <div className="text-right" style={{fontSize: "12px"}}>Username:</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-right" style={{fontSize: "12px"}}>{props.useraccount}</div>
            </div>
          </div>
        </div>
      </div> 
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}

/*function HomeCard(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body} <br />
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );
}*/

export default Card;