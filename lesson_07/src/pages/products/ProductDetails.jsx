import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { formatPrice } from '../../utils/utils'
import { frontRoutes } from '../../routes/frontRoutes'
import { fetchProductById } from '../../api/productsApi'

export default function ProductDetail() {
   const { category, id } = useParams()
   const [product, setProduct] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      let mounted = true
      setLoading(true)
      fetchProductById(id)
         .then((data) => mounted && setProduct(data))
         .catch((e) => mounted && setError(e.message))
         .finally(() => mounted && setLoading(false))
      return () => { mounted = false }
   }, [id])

   if (loading) return <div><h2>Loading...</h2></div>
   if (error) return <div><h2>Error: {error}</h2></div>
   if (!product) {
      return (
         <div>
            <h2>Product not found</h2>
            <Link to={frontRoutes.navigate.products.index}>Back to Products</Link>
         </div>
      )
   }

   return (
      <div>
         <h2>{product.name}</h2>
         <img src={product.imageUrl} alt={product.name} />
         <p>Price: {formatPrice(product.price)}</p>
         <Link to={frontRoutes.navigate.products.index}>Back to Products</Link>
      </div>
   )
}