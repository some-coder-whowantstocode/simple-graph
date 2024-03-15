import React from 'react'

import { useData } from '../context/DataContext'
import '../styles/refresh.css';

const Refresh = () => {
    const { getData, loading } = useData();
  return (
    <div >
      {
        !loading ?
        <span
        className='refresh-btn'
        onClick={()=>getData()}
        >
            Reload
        </span>
        :
        <div
        className='refresh-btn'
        >
      <div className='rotate '>
          +
        </div>
        </div>
      
      }
   
    </div>
    
  )
}

export default Refresh
