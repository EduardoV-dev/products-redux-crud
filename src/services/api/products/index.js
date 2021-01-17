import axiosClient from '../config/axios';

export const fetchProductsFromAPI = async endpoint => 
  await (await axiosClient.get(endpoint)).data;

export const createProduct = async product => 
  await axiosClient.post('/productos', product);

export const editProduct = async product => 
  await axiosClient.put(`/productos/${product.id}`, product);

export const deleteProduct = async idProduct => 
  await axiosClient.delete(`/productos/${idProduct}`);