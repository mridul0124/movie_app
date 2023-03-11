import Heading from '../src/components/Heading/Heading'
import './App.css';
import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation';
import {  Route, Routes } from "react-router-dom";
import { Container } from '@mui/system';
import Trending from './Routes/Trending/Trending'
import Movies from './Routes/Movies/Movies'
import Series from './Routes/Series/Series'
import Search from './Routes/Search/Search';


function App() {
  return (
    
    <>
    <Heading />
    <div className='App'>
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>} index/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Container>
      </div>
      <SimpleBottomNavigation />
   
    </>
    
  );
}

export default App;
