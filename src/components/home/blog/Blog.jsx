import React from 'react'
import { blog } from '../../assets/dados/data'
import Heading from '../../common/Heading'

const Blog = () => {
  return (
  <>
    <section className='blog'>
        <Heading title='Lorem ipsum dolor sit amet ' desc='Lorem illo distinctio tempora tenetur iste corrupti consequuntur autem excepturi ex odit veritatis cupiditate similique. Molestias, praesentium ipsa.'/>

        <div className="posts">
            {blog.slice(0,3).map((items) => (
                <div className="post">
                    <div className="content">
                        <div className="img">
                        <img src={items.cover} alt="" />
                        </div>
                    
                        <div className="text">
                            <button className='button'>{items.category}</button>
                            <p>Data de Postagem: <span>{items.date}</span></p>
                        </div>
                        <h3>{items.title.slice(0, 35)} ... </h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
  </>
  )
}

export default Blog