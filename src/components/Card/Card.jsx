import React from 'react'
import './Card.scss'

const Card = ({ image,name, rate,price,stars}) => {
  return (
<>
<div className="card">
    <img src={image} alt="" />
    <h3>{name}</h3>
    <div className="card__rating">
        {stars}
    ⭐⭐⭐🌟
        <p>{rate}/5</p>
    </div>

<b> {price}</b>
</div>
</>
  )
}

export default Card