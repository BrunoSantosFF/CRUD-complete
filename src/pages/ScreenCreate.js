import styles from '../styles/App.module.css'
import React, {useState} from 'react';


function ScreenCreate (){

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const functionSubmit = (event) => {
    event.preventDefault();
    alert("Está okay")

    setName("")
    setAge("")
  }

  const functionName = (event) => {
    setName(event.target.value);
  }

  const functionAge = (event) => {
    setAge(event.target.value)
  }

  const test = () => {
    console.log(name + age);
    alert(`${name} + ${age}`)
  }
  

  return (
    <div className={styles.container_general}>
      <div>
        <h1>CREATE</h1>
      </div>
      
      <form onSubmit={functionSubmit}>
        <div>
          <label>Name: </label>
          <input type='text' value={name} onChange={functionName} placeholder='Insert your name'></input>
        </div>
        <div>
          <label>Age: </label>
          <input type='number' value={age} onChange={functionAge} placeholder='Insert your age'></input>
        </div>
        <button type='submit' onClick={test}>Send</button> 
      </form>

    </div>
  )
}

export default ScreenCreate;