import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCards = ({ category }) => {
  const { category_id, name, image } = category
  const navigate = useNavigate()
  return (
    <div className="card w-96 bg-base-300 shadow-xl image-full">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-600 font-mono">{name}</h2>
        <div className="">
          <button
            className="btn btn-success"
            onClick={() => navigate(`category/${category_id}`)}
          >
            See Products
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCards
