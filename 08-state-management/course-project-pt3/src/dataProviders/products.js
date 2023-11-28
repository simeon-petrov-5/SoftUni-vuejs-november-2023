import axios from 'axios';

export async function getAllProducts() {
  try {
    const res = await axios.get('https://dummyjson.com/products');
    return res.data;
  }
  catch (e) {
    console.error('Oops', e);
    return {
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  }
}

export async function getProduct(id) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  }
  catch (e) {
    console.error('Oops', e);
    return null;
  }
}
