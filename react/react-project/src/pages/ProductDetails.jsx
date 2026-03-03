import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const products=[
        {
          id:1,name:"Laptop",description:"This is a high-performance laptop",price:1000
        },
        {   id:2,name:"Desktop",description:"This is a powerful desktop computer",price:1500
        },
        {   id:3,name:"Tablet",description:"This is a versatile tablet device",price:500       
        }
      ]
      const product=products.find((p)=>p.id===Number(id))
  return (
    <div>
         <h1>Product Details</h1>
         <h3>Name: {product.name}</h3>
            <p>Description: {product.description}</p>
            <p className="font-bold text-lg">Price: ${product.price}</p>
    </div>
    
  )
}

export default ProductDetails