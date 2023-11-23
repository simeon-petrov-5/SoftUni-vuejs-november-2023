import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export async function getAllProducts() {
  const url = `${BASE_URL}/products`;
  try {
    const response = await axios.get(url);
    console.log('res', response);
    return response.data;
  }
  catch (error) {
    console.error('Oops', error);
    return [];
  }
}

export async function getProduct(id) {
  const url = `${BASE_URL}/products/${id}`;
  try {
    const response = await axios.get(url);
    console.log('res', response);
    return response.data;
  }
  catch (error) {
    console.error('Oops', error);
    return [];
  }
}
