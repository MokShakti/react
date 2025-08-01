import React from "react"

const GridRow = React.memo(({ item }) => {
   return (
      <div className="row">
         <span>{item.name}</span>
         <span>{item.age}</span>
      </div>
   )
})

export default GridRow