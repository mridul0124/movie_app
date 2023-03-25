import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=beb68b05923ead4e5eda6fb768129411&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres && 
      selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres && 
      genres.map((genre) => (
        <Chip
          style={{ margin: 2,color:"black", background:"white" }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;



// import React from 'react'
// import axios from 'axios'
// import { useEffect } from 'react';

// function Genres(selectedGenres,
//     setSelectedGenres,
//     genres,
//     setGenres,
//     setPage) {
//     const fetchGenres = async () => {
//         const { data } = await axios.get(`
//             https://api.themoviedb.org/3/genre/movie/list?api_key=beb68b05923ead4e5eda6fb768129411&language=en-US`
//         );
//         setGenres(data.genres);
//     };
//     useEffect(() => {
//         fetchGenres();
//         return () => {
//             setGenres({});
//         };
//         // eslint-disable-next-line
//     }, [])



//     return (
//         <div>Genres</div>
//     )
// }

// export default Genres