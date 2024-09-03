import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import stylesCreate from '../styles/ScreenCreate.module.css';
import { fetchUsers } from '../services/useServices';
import { updateUser } from '../services/useServices';

function ScreenUpdateEdit ({setEdit, user}){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const functionSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateUser(user.id, { name, age });
      setEdit(false); // Volta para a tela anterior após salvar
    } catch (error) {
      console.error("Failed to update user:", error);
    }
    
  } 

  const functionName = (event) => {
    setName(event.target.value);
  }

  const functionAge = (event) => {
    setAge(event.target.value)
  }

  const functionEdit = () => {
    setEdit(false)
  }

  return (
    <div className={styles.container_general}>
          
      <h1>Insert info</h1>
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
          <button type='submit'>Save</button> 
          <button type="button" onClick={functionEdit} >
            Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default ScreenUpdateEdit