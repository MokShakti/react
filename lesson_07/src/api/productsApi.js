import { API } from './apiRoutes'

export async function fetchProducts() {
   const res = await fetch(API.products.list())
   if (!res.ok) throw new Error('Failed to load products')
   return res.json()
}

export async function fetchProductById(id) {
   const res = await fetch(API.products.byId(id))
   if (!res.ok) throw new Error('Product not found')
   return res.json()
}