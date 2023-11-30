import axios from 'axios';

export async function loginUser(userData) {
  try {
    const res = await axios.post('https://dummyjson.com/auth/login', userData);
    return res.data;
  }
  catch (e) {
    console.log('oops', e);
    return null;
  }
}
