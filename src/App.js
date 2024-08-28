import "./styles/App.css"

import { GrAddCircle } from "react-icons/gr";
import { CiRead } from "react-icons/ci";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import React, { useState } from 'react';

function App() {
  const [create_, setCreate] = useState();
  const [read_, setRead] = useState();
  const [update_, setUpdate] = useState();
  const [delete_, setDelete] = useState();

  const functionCreate = () => {
    
  };

  const functionRead = () => {
    
  };

  const functionUpdate = () => {
    
  };

  const functionDelete = () => {
    
  };

  return (
    <div className="container-general">
      <div className="container-main">
        C R U D
      </div>
      <div className="container-commands">
        create read update delete
      </div>
      <div className="container-options">
        <div className="class-icon">
          <button onClick={functionCreate} className="class-button"><GrAddCircle className="icons"/></button>
        </div>
        <div className="class-icon">
          <button onClick={functionRead} className="class-button"><CiRead className="icons"/></button>
        </div>
        <div className="class-icon">
          <button onClick={functionUpdate} className="class-button"><IoPencil className="icons"/></button>
        </div>
        <div className="class-icon">
          <button onClick={functionDelete} className="class-button"><MdDelete className="icons"/></button>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
