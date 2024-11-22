import React from 'react'
import './Section.scss'

const Section = () => {
  return (
  <>
  <section className="section">
    <div className="container">
        <div className="brands">
            <img className='section__img' src="./brands-1.svg" alt="" />
            <img className='section__img' src="./brands-2.svg" alt="" />
            <img className='section__img' src="./brands-3.svg" alt="" />
            <img className='section__img' src="./brands-4.svg" alt="" />
            <img className='section__img' src="https://shopco2.vercel.app/brands-5.svg" alt="" />
        </div>
    </div>
  </section>
  </>
  )
}

export default Section