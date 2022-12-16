import React from 'react'
import { price } from '../../assets/dados/data'
import Heading from '../../common/Heading'

const Price = () => {
  return (
    <>
        <section className='price'>
            <Heading title='Lorem ipsum, dolor sit amet consectetur' desc='  adipisicing elit. Ullam enim illo harum maiores, est sequi vel vitae doloribus.'/>

            <div className="content">
                {price.map((item) => (
                    <div className="box">
                        <h3>{item.name}</h3>
                        <h1>
                            <span>$</span>
                            {item.price}
                            <label htmlFor="">usuário por mês</label>
                        </h1>
                        <p>{item.desc}</p>
                        <button className='button'>Iniciar</button>

                        <ul>
                            {item.list.map((lists) => (
                                <li>
                                    <i>{lists.icon}</i>
                                    <i>{lists.para}</i>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

    </>
  )
}

export default Price