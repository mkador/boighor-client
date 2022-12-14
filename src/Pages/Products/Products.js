import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingModal from './BookingModal'
import ProductCard from './ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://boighor-server-nine.vercel.app/category/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [id])
  console.log(products)
  return (
    <div>
      <div className="grid gap-2 lg:grid-cols-2 grid-cols-1 mb-12 ">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
    </div>
  )
}

export default Products
