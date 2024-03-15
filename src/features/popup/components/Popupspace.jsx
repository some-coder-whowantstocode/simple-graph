import React from 'react'

import { usePopup } from '../context/PopupContext'
import Popup from './Popup';
import '../styles/popupspace.css'



const Popupspace = () => {
    const { Popups } = usePopup();
  return (
    <div className='popupspace'>
    {
      
        Popups.map(({type,text},i)=>(
            <Popup type={type} key={i} data={text}/>
        ))
    }
    </div>
  )
}

export default Popupspace
