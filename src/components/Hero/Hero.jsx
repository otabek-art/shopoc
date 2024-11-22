import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
  <>
  <section className="hero">
  <div className="container">
    <div className="hero__wrapper">
      <div className="hero__box">
        <h1>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
        <p className='hero__text'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>
        <div className="hero__inner">
          <div  >
            <h3>200+</h3>
            <p>International Brands</p>
          </div>
          <div>
            <h3>2,000+</h3>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h3>30,000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <img className='hero__img' src="./hero-img.png" alt="" />
    </div>
  </div>
</section>
  </>
  )
}

export default Hero