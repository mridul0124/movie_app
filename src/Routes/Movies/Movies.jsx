import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import useGenre from '../../Hooks/useGenres';

function Movies() {
  const [page,setPage] = useState(1);
  const[content,setContent] = useState([]);
  const [numOfPages,setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]); 
  const genreforURL = useGenre(selectedGenres);
  
  useEffect(()=>{
    const fetchMovies = async ()=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=beb68b05923ead4e5eda6fb768129411&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
       console.log(data);
      setContent(data.results);
      setNumOfPages(data.total_pages);
    }
    //  eslint-disable-next-line
    fetchMovies();
  },[page,genreforURL]);

   
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres}
      setPage={setPage}
      />
      <div className='trending'>
          {
            content && content.map((c) =>
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type='movies'
                vote_average={c.vote_average}
              />
            )
          }
        </div>
        {numOfPages >1 && 
        <CustomPagination  setPage={setPage} numOfPages={numOfPages}/>
        }
    </div>
  ) 
}

export default Movies