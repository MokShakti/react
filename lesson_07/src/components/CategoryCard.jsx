import { Link } from 'react-router-dom'
import { frontRoutes } from '../routes/frontRoutes'

export default function CategoryCard({ category, image }) {
   return (
      <div className="category-card">
         <Link to={frontRoutes.navigate.products.category(category)}>
            <img src={`/images/categories/${image}`} alt={category} />
            <p>{category}</p>
         </Link>
      </div>
   );
}