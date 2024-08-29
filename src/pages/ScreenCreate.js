import styles from '../styles/App.module.css'
import stylesCreate from '../styles/ScreenCreate.module.css'
import React, {useState} from 'react';


function ScreenCreate ({functionSelect}){

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

  

  return (
    <div className={styles.container_general}>
      <div className={stylesCreate.title}>
        <h1>CREATE</h1>
      </div>
      
      <form onSubmit={functionSubmit} className={stylesCreate.container_form}>
        <div className={stylesCreate.container}>
          <label>Name: </label>
          <input type='text' value={name} onChange={functionName} placeholder='Insert your name'></input>
        </div>
        <div className={stylesCreate.container}>
          <label>Age: </label>
          <input type='number' value={age} onChange={functionAge} placeholder='Insert your age'></input>
        </div>
        <div className={stylesCreate.container_button}>
          <button type='submit' >Send</button> 
          <button onClick={() => functionSelect('crud')}>Back</button>
        </div>
      </form>

    </div>
  )
}

export default ScreenCreate;