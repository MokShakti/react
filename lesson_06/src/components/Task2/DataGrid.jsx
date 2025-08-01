import { useState, useMemo, useCallback } from "react"
import mockData from "../../data/mockData.json"
import GridRow from "./GridRow"
import "./DataGrid.css"
import useDebounce from "../../hooks/useDebounce"

function DataGrid() {
   const [search, setSearch] = useState("")
   const [sortBy, setSortBy] = useState(null)
   const [sortOrder, setSortOrder] = useState("ascending")

   const debouncedSearch = useDebounce(search, 500)

   const filteredAndSorted = useMemo(() => {
      let result = mockData

      if (debouncedSearch.trim()) {
         const q = debouncedSearch.toLowerCase();
         result = result.filter((item) =>
            item.name.toLowerCase().includes(q)
         )
      }

      if (sortBy) {
         const direction = sortOrder === "ascending" ? 1 : -1
         result = [...result].sort((a, b) => {
            let aVal = a[sortBy]
            let bVal = b[sortBy]

            if (typeof aVal === "string") {
               return aVal.localeCompare(bVal) * direction
            } else {
               return (aVal - bVal) * direction
            }
         })
      }

      return result
   }, [debouncedSearch, sortBy, sortOrder])

   const handleSort = useCallback(
      (column) => {
         if (sortBy === column) {
            setSortOrder((prev) =>
               prev === "ascending" ? "descending" : "ascending"
            )
         } else {
            setSortBy(column)
            setSortOrder("ascending")
         }
      },
      [sortBy]
   )

   return (
      <div className="data-grid">
         <div className="controls">
            <div className="search-box">
               <label>
                  Search:{" "}
                  <input
                     type="text"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     placeholder="Name"
                  />
               </label>
            </div>
            <div className="sort-buttons">
               <button onClick={() => handleSort("name")}>
                  Sort by name {sortBy === "name" ? `(${sortOrder})` : ""}
               </button>
               <button onClick={() => handleSort("age")}>
                  Sort by age {sortBy === "age" ? `(${sortOrder})` : ""}
               </button>
            </div>
         </div>

         <div className="grid">
            {filteredAndSorted.map((item) => (
               <GridRow key={item.id} item={item} />
            ))}
            {filteredAndSorted.length === 0 && <p>Nothing's found</p>}
         </div>
      </div>
   )
}

export default DataGrid