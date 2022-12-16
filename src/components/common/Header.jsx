import React, { useState } from 'react'
import logo from '../assets/images/logo-editor.svg'
import cartImg from '../assets/images/cart.png'
import {BsBagCheck} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {RiUser3Line} from 'react-icons/ri'
import { AiOutlineHeart,  AiOutlineCloseCircle, AiOutlineMenu, AiOutlineDelete } from 'react-icons/ai'
import { navlist } from '../assets/dados/data'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { DELETE } from '../../controller/action'
import { useEffect } from 'react'



export const Header = () => {
    
    
    const [mobile, setMobile] = useState(false)

     const [cartList, setCartList] = useState(false)
    const handleClose = () => {
        setCartList(null)
    }

    window.addEventListener("scroll", function() {
        const header = this.document.querySelector(".header")
       header.classList.toggle("active", this.window.scrollY > 100)
    })

    

    //carrinho add na loja
    const getdata = useSelector((state) => state.cartReducer.carts)
    console.log(getdata)

   

    const dispatch = useDispatch()
    const delet = (id) => {
        dispatch(DELETE(id))
    }

   /* const handleCloses = () => {
        setCartList(null)
    }*/

    const [price, setPrice] = useState(0)
    console.log(price)
    const totals = () => {
        let price = 0
        getdata.map((e, i) => {
            price = parseFloat(e.price) * e.qty + price
        })
        setPrice(price)
    }

    useEffect(() => {
        totals()
    }, [totals])
 
  return (
    <>
        <header className='header'>
            <div className="container">
                <nav>
                    <div className="toggle">
                        <button onClick={() => setMobile(!mobile)}>
                            {mobile? <AiOutlineCloseCircle className='close heIcon'/> : <AiOutlineMenu className='open heIcon'/>}
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="center">
                        <ul className={mobile? 'mobile-nav' : 'menu'}>
                            {navlist.map((nav) => (
                                <li key={nav.id}>
                                    <Link to={nav.path}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="right">
                    <div className="right_search">
                        <input type="text" placeholder='Procurar Produtos...' />
                        <BiSearch className='searchIcon heIcon'/>
                    </div>
                    <div className="right_user">
                        <RiUser3Line className='userIcon heIcon'/>
                        <AiOutlineHeart className='usericon'/>
                    </div>
                    <div className="right_card">
                        <button className='button' onClick={() => setCartList(!cartList)}>
                            <BsBagCheck className='shop heIcon' />
                            CARRINHO<span>({getdata.length})</span>
                        </button>
                        <div className={cartList ? 'showCart' : 'hideCart'}>
                                {getdata.length ? (
                                    <section className='details'>
                                        <div className="details_title">
                                            <h3>fadcvdv</h3>
                                            <h3>Nome do Produto</h3>
                                        </div>
                                        {getdata.map((e) => (
                                            <div className="details_content">
                                                <div className="details_content_img">
                                                    <Link to={`/cart/${e.id}`} onClick={handleClose}>
                                                        <img src={e.cover} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="details_content_detail">
                                                    <div className="details_content_detail_price">
                                                        <p>{e.title.slice(0, 20)} ...</p>
                                                        <p>Preço: ${e.price}</p>
                                                        <p>Quantidade: ${e.qty}</p>
                                                    </div>
                                                </div>

                                                <div className="details_content_detail_icon">
                                                    <i onClick={() => delet(e.id)} >
                                                        <AiOutlineDelete/>
                                                    </i>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="details_total">
                                            <h4>Total: ${price}</h4>
                                        </div>
                                    </section>
                                ): (
                                    <div className="empty">
                                        <p>Esta vazio!</p>
                                        <img src={cartImg} alt="" />
                                    </div>
                                )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    </>
  )

  
}
const mapStateToProps = (state) => {
    return {
        amount : state.amount
    }
}
connect(mapStateToProps)(Header)