import React from 'react'

import Banner from './Banner'
import BookCondition from './BookCondition'
import UsedBooksCards from './UsedBooksCards'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BookCondition></BookCondition>
      <UsedBooksCards></UsedBooksCards>
      <h4>This is Home</h4>
    </div>
  )
}

export default Home
