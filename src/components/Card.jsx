import React from 'react'

const Card = (props) => {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }

  
  return (
    <div className='card'>
      <div className='card-badge'>{badgeText}</div>
        <img className='card-image' src={props.item.coverImg} alt="" />
        <div className='card-stats'>
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
        </div>
        <p className='description'>{props.item.title}</p>
        <p className='price'>From {props.item.price} <span>/per person</span></p>
        
    </div>
  )
}

export default Card