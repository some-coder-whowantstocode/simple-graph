import React from 'react'

import { usePopup } from '../context/PopupContext'
import '../styles/popup.css'

const Popup = ({data,type}) => {
    const {TYPE} = usePopup();
  return (
    <div className='popup-box' 
    style={{
        borderColor:TYPE[type].border,
        color:TYPE[type].text,
        background:TYPE[type].background
    }}
    >
        {data}
    </div>
  )
}

export default Popup
