import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import "./WindowSizeDisplay.css"

export default function WindowSizeDisplay() {
   const { width, height } = useWindowSize();

   const device =
      width <= 600 ? "Phone" : width <= 1024 ? "Tablet" : "Monitor"

   return (
      <div className="window-info">
         <p>
            Size: <strong>{width} x {height}</strong>
         </p>
         <p>
            Device: <strong>{device}</strong>
         </p>
      </div>
   )
}