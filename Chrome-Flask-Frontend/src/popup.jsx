import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
var cors = require("cors");

//chrome.action.onClicked.addListener
function Popup() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(null); //aqui se declara

  useEffect(() => {
    //esto es una funcion de chrome dentro de una funcion de react, hay que declararlo siempre primero a la que
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // since only one tab should be active and in the current window at once
      // the return variable should only have one entry
      setActiveTab(tabs[0]);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/webs/`) //https:
      .then((result) => {
        console.log(result.data);
        setData(result.data); //or reponse.data
      })
      .catch(console.error);
  }, []);

  useEffect(() => {

    if(activeTab){
      axios
      .post(`http://localhost:5000/webs/`, {
        url: result.data,
        
      })
      .then((result) => {
        console.log("Hi");
        setData(result.data); //or reponse.data
      })
      .catch(console.error);
    }

  }, [activeTab]);
  // se manda una vez que haya informacion dentro de activeTab, ya que de primeras hemos declarado que esa variable es null

  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a Pop Up created with React that shows an URL</p>
      <p>{activeTab ? activeTab.url : ""}</p>
      {/* happening twice; lo registra dos veces, ya que de primeras hemos declarado que "activeTab" era null, entonces a la que 
      registra ya se activa, pero por eso se necesita el if statement */}
      {/* de esta manera checkeamos si activeTab tiene valor null o no. Si hay valor null, react no puede como tal mostrar nada, */}
      {/* ya que useEffect ha tenido efecto antes de eso. */}
      <p>{data ? data.webs : ""}</p>
      <p>{data}</p>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
