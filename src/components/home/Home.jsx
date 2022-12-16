import React from 'react'
import Banner from './banner/Banner'
import Blog from './blog/Blog'
import Testimonials from './depoimentos/Testimonials'
import Card from './hero/Card'
import Hero from './hero/Hero'
import Price from './preço/Price'
import Product from './product/Product'
import TopProduct from './topProduct/TopProduct'


const Home = () => {
  return (
    <>
       <Hero/>
       <Card/>
       <Product/>
       <Banner/>
       <TopProduct/>
       <Price/>
       <Testimonials/>
       <Blog/>
    </>
  )
}

export default Home