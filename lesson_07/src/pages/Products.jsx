import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../api/productsApi'

export default function Products() {
   const { category } = useParams()
   const [all, setAll] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      let mounted = true
      setLoading(true)
      fetchProducts()
         .then((data) => mounted && setAll(data))
         .catch((e) => mounted && setError(e.message))
         .finally(() => mounted && setLoading(false))
      return () => { mounted = false }
   }, [])

   if (loading) return <section className='products'><h2>Loading...</h2></section>
   if (error) return <section className='products'><h2>Error: {error}</h2></section>

   const list = category
      ? all.filter(p => p.category === category)
      : all

   if (!list.length) {
      return (
         <div className='not-found'>
            <h2 className='not-found__title'>
               No products found{category ? ` in "${category}"` : ''}
            </h2>
            <Link to="/">Back to Home</Link>
         </div>
      )
   }

   const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'

   return (
      <section className='products'>
         <h2>{title}</h2>
         <div className="product-list">
            {list.map(p => (
               <ProductCard key={p.id} product={p} />
            ))}
         </div>
      </section>
   )
}