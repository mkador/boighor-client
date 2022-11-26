import React from 'react'

const ProductCard = ({ product }) => {
  const {
    product_name,
    resale_price,
    picture,
    location,
    original_price,
    post_time,
    sellers_name,
    varified,
    year_of_use,
  } = product
  return (
    <div className="flex">
      <div class="ml-8 w-full max-w-sm overflow-hidden bg-base-400  rounded-lg shadow-lg dark:bg-gray-800">
        <div>
          <img
            class="object-cover object-center w-52 h-48 "
            src={picture}
            alt="avatar"
          />
        </div>

        <div className="card-body">
          <h2 className="card-title">Name: {product_name}</h2>
          <div className="text">Post Time: {post_time}</div>
          <div className="">Seller Name: {sellers_name}</div>
          <div className="">Location: {location}</div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Used Duration: {year_of_use}
            </div>
            <div className="badge badge-outline">
              Original Price: {original_price}
            </div>
            <div className="badge badge-outline badge-secondary">
              Resale Price: {resale_price}
            </div>
          </div>
        </div>
        <button className="w-full btn btn-success">Book Now</button>
      </div>
    </div>
  )
}

export default ProductCard
