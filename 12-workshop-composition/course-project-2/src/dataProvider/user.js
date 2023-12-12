import axiosInstance from '../configs/axios';

export async function createUser(body) {
  try {
    const res = await axiosInstance.post('/users/add', body);
    console.log('createUser', res.data);
    return true;
  }
  catch (error) {
    console.error('Oops', error);
    return false;
  }
}

export async function loginUser(body) {
  try {
    const res = await axiosInstance.post('/auth/login', body);
    return res.data;
  }
  catch (error) {
    console.error('oops', error);
    return null;
  }
}
