import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <>
  <section className="header">
    <div className="container">
        <div className="header__wrap">
<Link to={'/'}>
<img src="./SHOP.CO.svg" alt="" />

</Link>

<div className="menu">


  <Link to={'/sale'} className='dropdown'>
  Shop
  <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" />

  <div>
  <Link to={'/'} >Man</Link>
  <Link to={'/'} >woman</Link>
  <Link to={'/'} >kids</Link>
</div>

  </Link>

  <a href="/#arrivals">New Arrivals</a>
  <a href="/#selling">On Sale</a>
  <Link to={'/'} >Brands</Link>
</div>


          
            <p></p>
            <p></p>
            <p></p>
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