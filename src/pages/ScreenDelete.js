import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import stylesCreate from '../styles/ScreenCreate.module.css';
import { fetchUsers } from '../services/useServices';
import { deleteUsers } from '../services/useServices';


function ScreenDelete ({functionSelect}){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);

      } 
      catch (error) {
        console.error(error);
      } 
    };

    loadUsers();
  }, []);

  const funtionDelete = async (userId) => {
  if (window.confirm("Do you really want to delete the user?")) {
      try {
        await deleteUsers(userId);
        setUsers(users.filter(user => user.id !== userId));
        window.alert("deleted user")
      } catch (error) {
        console.error('Erro ao deletar o usuário:', error);
      }

  } 
    
  };

  return (

    <div className={styles.container_general}>
      <div className={stylesCreate.title}>
        <h1>DELETE</h1>
      </div>
      <p>Name - AGE</p>
      <div className= {stylesCreate.container_list}>
        {users.length > 0 ? (
          <div>
            {users.map(user => (
              <div key={user.id} className={stylesCreate.container_user}>
                <button type='button' onClick={() => funtionDelete(user.id)} className={stylesCreate.container_buttonEdit}>{user.name} - {user.age}</button>
              </div>
              
            ))}
          </div>
        ) : (
          <p>No users found</p>
        )}
      </div>
      <div className={stylesCreate.container_button}>  
        <button type='button' onClick={() => functionSelect('crud')}>Back</button>
      </div>
      
    </div>
  );

}

export default ScreenDelete;