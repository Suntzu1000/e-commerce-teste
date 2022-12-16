import React from 'react'
import {ImQuotesRight} from 'react-icons/im'
import { customer } from '../../assets/dados/data'
import Heading from '../../common/Heading'

const Testimonials = () => {
  return (
    <>
        <section className='customer'>
        <Heading title='Lorem ipsum dolor sit amet ' desc='Lorem illo distinctio tempora tenetur iste corrupti consequuntur autem excepturi ex odit veritatis cupiditate similique. Molestias, praesentium ipsa.'/>

        <div className="content">
            {customer.map((items) => (
                <div className="card">
                    <button>
                        <ImQuotesRight/>
                    </button>
                    <p>"{items.desc}"</p>
                    <h3>{items.name}</h3>
                    <span>{items.post}</span>
                </div>
            ))}
        </div>
        </section>
    </>
  )
}

export default Testimonials