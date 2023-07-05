import axios from 'axios';
import { Product } from '../types/Product';

export const addProduct = (newProduct: Product) => {
  axios.post('http://localhost:3001/products', newProduct)
    .then(response => {
      // Handle successful POST operation
      console.log('Product added:', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error adding product:', error);
    });
};

export const deleteProduct = (productId: number) => {
  axios.delete(`http://localhost:3001/products/${productId}`)
    .then(response => {
      // Handle successful DELETE operation
      console.log('Product deleted:', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error deleting product:', error);
    });
};
