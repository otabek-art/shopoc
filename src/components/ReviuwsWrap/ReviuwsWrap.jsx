import React from 'react'
import ReviewsData from './reviews.json'
import ReviewCard from '../ReviewCard/ReviewCard'
import   './ReviuwsWrap.scss'


const ReviuwsWrap = () => {
  return (
   <>
   <section className="reviuwswrap">
    <div className="container">
        <div className="reviws__wrapper">

{ReviewsData.map(card =>(
<>
<ReviewCard key={card.id} card={card}/>
</>



))}
            
   
        </div>
    </div>
   </section>
   </>
  )
}

export default ReviuwsWrap