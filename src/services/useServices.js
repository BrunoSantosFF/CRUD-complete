import api from './Api';

export const createUser = async (name, age) => {
  try {
    const response = await api.post('/create', { name, age });
    return response.data;
  } 
  catch (error) {
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } 
  catch (error) {
    throw error;
  }
};