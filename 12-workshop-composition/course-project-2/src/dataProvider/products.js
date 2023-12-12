import axiosInstance from '../configs/axios';

export async function fetchAllProducts(skip, limit) {
  try {
    const res = await axiosInstance.get(`products?limit=${limit}&skip=${skip}`);
    return res.data;
  }
  catch (error) {
    console.error(error);
    return {
      products: [],
      total: 10,
      skip: 0,
      limit: 10,
    };
  }
}
