import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import stylesCreate from '../styles/ScreenCreate.module.css';
import { fetchUsers } from '../services/useServices';

import ScreenUpdateEdit from "./ScreenUpdateEdit"

function ScreenUpdate({ functionSelect }) {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error(error);
      }
    };

    loadUsers();
  }, []);

  const functionTest = () => {
    setEdit(true);
  };

  return (
    <div className={styles.container_general}>
      {!edit && (
        <>
          <div className={stylesCreate.title}>
            <h1>UPDATE</h1>
          </div>
          <p>Name - AGE</p>
          <div className={stylesCreate.container_list}>
            {users.length > 0 ? (
              <div>
                {users.map((user) => (
                  <div key={user.id} className={stylesCreate.container_user}>
                    <button
                      type="button"
                      onClick={functionTest}
                      className={stylesCreate.container_buttonEdit}
                    >
                      {user.name} - {user.age}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No users found</p>
            )}
          </div>
          <div className={stylesCreate.container_button}>
            <button type="button" onClick={() => functionSelect('crud')}>
              Back
            </button>
          </div>
        </>
      )}
      {
        edit && (
          <ScreenUpdateEdit setEdit={setEdit}/>
        )
      }
    </div>
  );
}

export default ScreenUpdate;
