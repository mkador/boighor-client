import React from 'react'
import { Link } from 'react-router-dom'
import guideBook from '../../assets/images/guideBook.jpg'

const BookCondition = () => {
  return (
    <div>
      <div className="p-20">
        <div className="hero bg-base-300">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <img src={guideBook} className=" rounded-lg shadow-2xl" alt="" />
            </div>
            <div>
              <p className="text-green-600 font-mono text-bold hover:underline">
                <Link>BOOK COLLECTING GUIDE</Link>
              </p>
              <h1 className="mt-6 text-4xl font-bold font-mono mb-4 ">
                Guide to used book conditions
              </h1>
              <p className="py-6">
                As new, fine, very good, good... Used booksellers use several
                terms and abbreviations to describe the condition of a used
                book. We've prepared a guide to help you find the used book
                that's right for you, and understand exactly what the seller is
                offering.
              </p>
              <button className="btn btn-success">See the guide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCondition
