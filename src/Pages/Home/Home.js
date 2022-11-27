import React from 'react'

import Banner from './Banner'
import BookCondition from './BookCondition'
import Categories from './Categories'
import UsedBooksCards from './UsedBooksCards'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <BookCondition></BookCondition>

      <UsedBooksCards></UsedBooksCards>
    </div>
  )
}

export default Home
