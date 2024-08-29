import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import stylesCreate from '../styles/ScreenCreate.module.css';
import { fetchUsers } from '../services/useServices';

function ScreenRead({functionSelect}) {
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


  return (
    <div className={styles.container_general}>
      <div className={stylesCreate.title}>
        <h1>READ</h1>
      </div>
      <p>Name - AGE</p>
      <div className= {stylesCreate.container_list}>
        {users.length > 0 ? (
          <div>
            {users.map(user => (
              <div key={user.id} className={stylesCreate.container_user}>
                {user.name} - {user.age}
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

export default ScreenRead;
