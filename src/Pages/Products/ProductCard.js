import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Contexts/AuthProvider'

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext)
  const handleBooking = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    console.log(name, email, phone)
  }
  const handleBookNow = () => {
    toast.success('This Item is now Booked ')
  }
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
        <label htmlFor="booking-product" className="btn btn-success w-full">
          Book Now
        </label>
        <div>
          <input
            type="checkbox"
            id="booking-product"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="booking-product"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Name: {product_name}</h3>
              <h3 className=" font-bold">Price:$ {resale_price}</h3>
              <h3 className=" font-bold">Meeting Location: {location}</h3>
              <form
                onSubmit={handleBooking}
                className="grid grid-cols-1 gap-2 mt-5 "
              >
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  disabled
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-success w-full "
                />
                <input
                  defaultValue={user?.email}
                  readOnly
                  disabled
                  name="email"
                  type="email"
                  placeholder="Tour Email address"
                  className="input input-bordered input-success w-full "
                />
                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="Phone Number"
                  className="input input-bordered input-success w-full "
                />

                <br />

                <label
                  onClick={handleBookNow}
                  type="submit"
                  value="Submit"
                  htmlFor="booking-product"
                  className="btn btn-success  bottom-0"
                >
                  Confirmed
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
