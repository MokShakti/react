import routes from './apiRoutes'

export async function fetchProducts() {
   const res = await fetch(routes.productsList)
   if (!res.ok) throw new Error('Failed to load products')
   return res.json()
}

export async function fetchProductById(id) {
   const res = await fetch(routes.getProductById(id))
   if (!res.ok) throw new Error('Product not found')
   return res.json()
}