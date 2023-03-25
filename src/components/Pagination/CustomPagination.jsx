import React from 'react'
import { Pagination } from '@mui/material';
import './CustomPagination.css'



function CustomPagination({setPage,numOfPages = 10}) {

    const handlePageChange = (page)=>{
        setPage(page);
        window.scroll(0,0);
    }

  return (
    <div
    style={{
      width:"100%",
      display:"flex",
      justifyContent:"center",
      marginTop:10,
      color:'white'
  }}>
        {/* <Pagination 
        count={10} 
        color="primary"
         onChange={(e)=>handlePageChange(e.target.textcontent)} 
        // onChange={(e,value)=>setPage(value)}
        /> */}
       
        
    
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          type='dark'
          hideNextButton
          hidePrevButton
          />
       
        
    </div>
  )
}

export default CustomPagination;