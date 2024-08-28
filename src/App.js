import "./styles/App.css"

import { GrAddCircle } from "react-icons/gr";
import { CiRead } from "react-icons/ci";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function App() {
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
          <button className="class-button"><GrAddCircle className="icons"/></button>
        </div>
        <div className="class-icon">
          <button className="class-button"><CiRead className="icons"/></button>
        </div>
        <div className="class-icon">
          <button className="class-button"><IoPencil className="icons"/></button>
        </div>
        <div className="class-icon">
          <button className="class-button"><MdDelete className="icons"/></button>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
