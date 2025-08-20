import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/utils'
import { frontRoutes } from '../routes/frontRoutes'

export default function ProductCard({ product }) {
   return (
      <Link
         to={frontRoutes.navigate.products.detail('all', product.id)}
         className="product-card"
      >
         <img src={product.imageUrl ?? `/images/products/${product.image}`} alt={product.name} />
         <h3>{product.name}</h3>
         <p>Price: {formatPrice(product.price)}</p>
      </Link>
   )
}