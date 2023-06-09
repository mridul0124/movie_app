import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import './SimpleBottomNavigation.css'



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
 


  
  
  return (
   
     <BottomNavigation  sx={{width:'100%', position:'fixed', bottom:0, display:'flex', justifyContent:'space-evenly',zIndex:100, backgroundColor:'#2d313a'}}
     value={value}
     onChange={(event, newValue) => {
       setValue(newValue);
      }}
      showLabels
      >
        <BottomNavigationAction  style={{color:'white'}} value='Trending' a href='/'  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction  style={{color:'white'}} value='Movies' a href='/movies'  label="Movies" icon={<MovieCreationIcon />} />
        <BottomNavigationAction  style={{color:'white'}} value='Series' a href='/series' label="Series" icon={<TvIcon />} />
        <BottomNavigationAction  style={{color:'white'}} value='Search' a href='search' label="Search " icon={<SearchIcon />} />
      </BottomNavigation>
        
    );
  }