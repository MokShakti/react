// const BASE = import.meta.env.VITE_API_URL || ''

// export const API = {
//    products: {
//       list: () => `${BASE}/api/products`,
//       byId: (id) => `${BASE}/api/products/${id}`,
//       search: (q) => `${BASE}/api/products/search?q=${encodeURIComponent(q)}`,
//    },
// }


const API_BASE = 'https://backend-2-tqj2.onrender.com/api';

export default {
   productsList: `${API_BASE}/products`,
   getProductByCategory: (category) => `${API_BASE} /products/category / ${category}`,
   getProductById: (id) => `${API_BASE} /products/${id}`
}