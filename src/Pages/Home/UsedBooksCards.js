import React from 'react'
import UsedBooksCard from './UsedBooksCard'
import pic1 from '../../assets/images/pic1.jpg'
import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'
import pic4 from '../../assets/images/pic4.jpg'

const UsedBooksCards = () => {
  const booksCardData = [
    {
      id: 1,
      name: 'Cheap prices',
      img: pic1,
      para:
        'Used books offer tremendous value for money to avid readers on a budget. With prices starting from $1 plus shipping, AbeBooks customers never run out of reading material.',
    },
    {
      id: 2,
      name: 'Sustainability',
      img: pic2,
      para:
        'The used book business is one of the oldest forms of recycling. A book should have many owners during its lifetime. Be sustainable by building a collection of pre-owned used books',
    },
    {
      id: 3,
      name: 'Vintage paperbacks',
      img: pic3,
      para:
        'You can find thousands of vintage used Penguin paperbacks for sale on BoiGhor. Orange is the most famous color but Penguin had a whole spectrum of colors to distinguish their books.',
    },
    {
      id: 4,
      name: 'Unbeatable selection',
      img: pic4,
      para:
        'BoiGhor offers millions of used books for sale .network of sellers which specialize in used and out-of-print titles. Plus, our selection includes books on every genre and topic you can imagine..',
    },
  ]
  return (
    <div className="mt-8">
      <h1 className="mt-6 text-4xl font-bold font-mono mb-4 text-center">
        Four reasons to buy used books online
      </h1>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 mb-5 p-5">
        {booksCardData.map((card) => (
          <UsedBooksCard key={card.id} card={card}></UsedBooksCard>
        ))}
      </div>
    </div>
  )
}

export default UsedBooksCards

const booksCardData = {}
