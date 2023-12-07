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
