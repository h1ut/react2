import React from "react";
import "./App.css";

const App = () => {
  const remove = () => {
    const h1 = document.querySelector("h1")
    h1.style = "display: block;"
  }


  return (

    <section>
      <div className="div1">
        <h1 className="have">Succes! Thank you for registering</h1>
        <input type="text" placeholder="First Name" className="input-name"/>
        <br />
        <input type="text"  placeholder="Last Name" className="input-last"/>
        <br />
        <input type= "email" placeholder="Email" className="input-email"/>
        <br />
        <button className="btn" onClick={remove}>Register</button>
      </div>
    </section>
  );
};

export default App;
