import React, { useState } from 'react'
import { topProducts } from '../../assets/dados/data'
import Heading from '../../common/Heading'
import ProductItem from '../product/ProductItem'

const TopProduct = () => {
  const [data, setData] = useState(topProducts)
  const allCategories = ['all', ...new Set(data.map((item) => item.category))]
  const [category, setCategory] = useState(allCategories)

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category)
    setCategory(newItem)

    if(category === 'all') {
      setData(topProducts)
      return
    }
  }
  return (
    <>
        <section className='topproduct'>
            <div className="container">
                <div className="head">
                    <Heading title='Lorem ipsum dolor sit amet ' desc='Lorem illo distinctio tempora tenetur iste corrupti consequuntur autem excepturi ex odit veritatis cupiditate similique. Molestias, praesentium ipsa.'/>
                    <div className="category">
                      {category.map((category) =>(
                        <button className='button' onClick={() => handleFilter(category)}>{category}</button>
                      ))}
                    </div>
                </div>
                <ProductItem data={data}/>
                
            </div>
        </section>
    </>
  )
}

export default TopProduct