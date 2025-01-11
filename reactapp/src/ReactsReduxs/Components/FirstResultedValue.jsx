import React from 'react'
import { useSelector } from 'react-redux'
export default function FirstResultedValue() {
  const count=useSelector((a)=>a.count)
  return (
    <div>
      <h1>{count}</h1>
      
    </div>
  )
}
