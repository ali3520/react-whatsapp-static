import React from "react";
import  ReactDOM  from "react-dom";
import loop from "./loop.js" ;
import View from "./View.jsx";
import Header from "./Header.jsx";

const Whatsapp = () => {
  return(
    <>
    <div className="container col-lg-4 shadow p-2">
      <Header/>
      {loop.map((data) => {
        return< View {...data} />      
          })}
    </div>
    </>
  )
    }

ReactDOM.render(<Whatsapp/>,document.getElementById("root"))