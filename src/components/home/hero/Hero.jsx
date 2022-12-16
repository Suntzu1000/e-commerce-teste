import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { products } from '../../assets/dados/data'
import SearchItems from './SearchItems'

const Hero = () => {

    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSearch = (key) => {
        setValue(key)
        console.log(`Search ${key}`)
    }
  return (
   <>
    <section className='hero'>
        <div className="container">
            <h1>
                <label htmlFor="">
                    Lorem <span>ipsum dolor sit</span> amet consectetur.
                </label>
                <br />
                <label htmlFor="">
                    Lorem ipsum dolor sit amet <span>consectetur adipisicing elit</span>.
                </label>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi cumque odio, laudantium illo, veniam officiis reprehenderit blanditiis iste ipsam consectetur nulla architecto obcaecati aliquam nam a mollitia eligendi doloribus!</p>
            <div className="search">
                <span>Todas as Categorias</span>
                <hr />
                <input type="text" placeholder='Procurar Produtos...' onChange={onChange} value={value}/>
                <button onClick={() => onSearch(value)}>
                    <BiSearch className='searchIcon heIcon'/>
                </button>
                </div>
            <SearchItems product={products} value={value} onSearch={onSearch}/>   
            <p>In facere laudantium natus.</p>
        </div>
    </section>
   </>
  )
}

export default Hero