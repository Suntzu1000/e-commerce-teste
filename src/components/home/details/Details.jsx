import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {MdStarRate} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { ADD, DELETE, REMOVE_INT } from '../../../controller/action'
import { REMOVE_ITEM } from '../../../controller/type'

const Details = () => {
    const [data, setData] = useState([])
    const getdata = useSelector((state) => state.cartReducer.carts)
    const {id} = useParams()
    const compare = () => {
        let compareData = getdata.filter((e) => {
            return e.id === id
        }) 
        setData(compareData)
    }

    useEffect(() => {
        compare()
    },  [id])

    const dispatch = useDispatch()
    const increment = (e) => {
        dispatch(ADD(e))
    }

    const decrement = (item) => {
        dispatch(REMOVE_INT(item))
    }

    const history = useNavigate()
    const deletes = (id) => {
        dispatch(DELETE(id))
        history.push('/')
    }

    
  return (
    <>
        <article>
            <section className='details'>
                <h2 className='details_title'>Product details pages </h2>
                {data.map((item) => (
                    <div className="details_content">
                        <div className="details_content_img">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="details_content_detail">
                            <h1>{item.title}</h1>
                            <div className="rating">
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <label htmlFor="">(1 avaliação de cliente)</label>
                            </div>
                            <h3>{item.price * item.qty}</h3>
                            <p>{item.author}</p>
                            <div className="qty">
                                <div className="count">
                                    <button onClick={() => increment(item)}>
                                        <AiOutlinePlus/>
                                    </button>
                                    <span>{item.qty}</span>
                                    <button onClick={item.qty <= 1 () ? deletes(item.id) : () => decrement(item)} >
                                        <AiOutlineMinus/>
                                    </button>
                                </div>
                                <button className='button'>Adicionar no Carrinho</button>
                            </div>
                            <div className='desc'>
                                <h4 > Lorem, ipsum.</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quod sit, eligendi obcaecati doloremque, recusandae nulla natus ipsum ea reiciendis ex cupiditate similique quos tempora. Nulla itaque at quo nesciunt.</p>
                                <h4>Lorem ipsum.</h4>
                                <ul>
                                    <li><p>Materiais:</p></li>
                                    <li><p>Materiais:</p></li>
                                    <li><p>Materiais:</p></li>
                                    <li><p>Materiais:</p></li>
                                    <li><p>Materiais:</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    </>
  )
}

export default Details