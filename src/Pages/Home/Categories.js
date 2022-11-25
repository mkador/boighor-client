import React, { useEffect, useState } from 'react'

import CategoryCards from './CategoryCards'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])
  console.log(categories)
  return (
    <div className="mt-5 mb-5 ">
      <h1 className="mt-6 text-4xl font-bold font-mono mb-4 text-center">
        Used Books Categories
      </h1>

      <div className=" p-6 grid gap-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 ">
        {categories?.map((category) => (
          <CategoryCards key={category.category_id} category={category}></CategoryCards>
        ))}
      </div>
    </div>
  )
}

export default Categories
