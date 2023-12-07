import axios from 'axios';

export async function getAllTodos() {
  try {
    const res = await axios.get('https://dummyjson.com/todos');
    return res.data.todos;
  }
  catch (e) {
    console.error(e);
    return [];
  }
}
