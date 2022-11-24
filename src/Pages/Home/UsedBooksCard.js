import React from 'react'

const UsedBooksCard = ({ card }) => {
  const { id, para, name, img } = card
  return (
    <div>
      <div className="card bg-base-200 shadow-xl ">
        <figure className="px-3 pt-3 ">
          <img src={img} alt="img" className=" h-48 w-64  rounded-lg" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default UsedBooksCard
