import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "This is a high-performance laptop",
      price: 1000
    },
    {
      id: 2,
      name: "Desktop",
      description: "This is a powerful desktop computer",
      price: 1500
    },
    {
      id: 3,
      name: "Tablet",
      description: "This is a versatile tablet device",
      price: 500
    }
  ]

  return (
    <div>
      <h1>Services</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3 className="font-bold">{product.name}</h3>
          <Link
            className="text-blue-500"
            to={`/services/${product.id}`}
          >
            View Description
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Services