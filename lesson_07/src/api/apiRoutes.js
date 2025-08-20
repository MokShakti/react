const BASE = import.meta.env.VITE_API_URL || ''

export const API = {
   products: {
      list: () => `${BASE}/api/products`,
      byId: (id) => `${BASE}/api/products/${id}`,
      search: (q) => `${BASE}/api/products/search?q=${encodeURIComponent(q)}`,
   },
}