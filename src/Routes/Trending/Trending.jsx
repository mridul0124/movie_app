import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css'


function Trending() {
    const[content,setContent] = useState([]); 

    const fetchTrending = async () =>{
     const{data} = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=beb68b05923ead4e5eda6fb768129411`
        );
          //console.log(data);
         setContent(data.results);
    }; 

    useEffect(()=>{
        fetchTrending();
    },[]);

  return (
  

      <div > 
        <span className='pageTitle'>Trending Today</span>
        <div className='trending'>
          {
            content && content.map((c) =>
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            )
          }
        </div>

      </div>
   
  )
}

export default Trending ;