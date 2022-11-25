import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCards = ({ category }) => {
  const { category_id, name, image } = category
  const navigate = useNavigate()
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`category/${category_id}`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCards
