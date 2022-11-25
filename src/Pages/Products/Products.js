import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [id])
  return <div>Products</div>
}

export default Products
