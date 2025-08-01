import { useState } from "react"
import useDebounce from "../../hooks/useDebounce"
import "./SearchWithDebounce.css"

const fakeData = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango"]

export default function SearchWithDebounce() {
   const [search, setSearch] = useState('')

   const debounced = useDebounce(search, 500)

   const results = fakeData.filter(item =>
      item.toLowerCase().includes(debounced.toLowerCase())
   )

   return (
      <div className="search-box">
         <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
         />
         <ul>
            {results.map(item => (
               <li key={item}>{item}</li>
            ))}
         </ul>
      </div>
   )
}