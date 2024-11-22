import React from 'react'
import './Header.scss'

const Header = () => {
  return (
  <>
  <section className="header">
    <div className="container">
        <div className="header__wrap">
            <img src="./SHOP.CO.svg" alt="" />
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
            <input img placeholder='Search for products...' type="text" />
            <img src="./icon-1.svg" alt="" />
            <img src="./icon-2.svg" alt="" />
        </div>
    </div>
  </section>
  </>
  )
}

export default Header