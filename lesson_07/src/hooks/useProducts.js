import { products } from '../utils/products'

const useProducts = () => {
   const getAll = () => products
   const getById = id => products.find(p => p.id === id)

   return { getAll, getById }
};

export default useProducts