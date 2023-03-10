import React, { useState } from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import {/*AiOutlineClose,*/ AiOutlineHeart} from 'react-icons/ai'
import { products } from '../../assets/dados/data'

const SearchItems = ({value, product, onSearch}) => {

   const [openImage, setOpenImage] = useState(false)
    const [img, setImg] = useState('')
  
    const onOpenImage = (src) =>{
      setImg(src)
      setOpenImage(true)
    }
  return (
    <>
        <section className='searchItems'>
        <div className="product_items">
        {product.filter((items) =>{
          const searchkey = value.toLowerCase()
          const title = items.title.toLowerCase()

          return searchkey && title.startsWith(searchkey) && title === searchkey

        }).slice(0,10).map((items) => (
            <div className="product_items">
        {products.map((items) =>{
          return (
            <div className="box" key={items.id}>
              <div className="img">
                <img src={items.cover} alt="" />
                <div className="overlay">
                  <button className='button'>
                    <FiShoppingBag />
                  </button>
                  <button className='button'>
                    <AiOutlineHeart />
                  </button>
                  <button className='button'>
                    <FiSearch />
                  </button>
                </div>
              </div>
              <div className="details">
                <h3>{items.title}</h3>
                <p>{items.author}</p>
                <h4>Price: ${items.price}</h4>
              </div>
            </div>
          )
        })}
      </div>
        ))}
      </div>
        </section>
    </>
  )
}

export default SearchItems