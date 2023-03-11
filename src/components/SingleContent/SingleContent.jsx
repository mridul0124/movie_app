import React from 'react'
import {img_300,unavailable} from '../config/config'
import './SingleContent.css'

function SingleContent({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) {
  return (
    <div className='media'>
      <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className='title'>{title}</b>
      <span className='subTitle'>
        {media_type === "tv" ? " TV Series" : " Movies"}
        <span className='subTitle'>{date}</span>
      </span>
    </div>
  )
}

export default SingleContent;