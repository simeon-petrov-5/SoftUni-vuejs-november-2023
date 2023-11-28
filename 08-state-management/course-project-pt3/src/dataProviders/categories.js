import axios from 'axios';

export async function getAllCategories() {
  try {
    const res = await axios.get('https://dummyjson.com/products/categories');
    return res.data;
  }
  catch (error) {
    console.error('Oops', error);
    return [];
  }
}
