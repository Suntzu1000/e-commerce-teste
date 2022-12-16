import React, { useState } from 'react'
import { products } from '../../assets/dados/data'
import Heading from '../../common/Heading'
import ProductItem from './ProductItem'


const Product = () => {
    const [data, setData] = useState(products)
    console.log(setData)
  return (
    <>
        <section className='product'>
            <div className="container">
                <Heading title='Produtos em Alta' desc='orem ipsum dolor sit amet consectetur, adipisicing elit. Hic voluptatibus nobis quisquam unde dolores reiciendis odio, fuga corrupti' />

                <ProductItem data={data}/>
            </div>
        </section>
    </>
  )
}

export default Product