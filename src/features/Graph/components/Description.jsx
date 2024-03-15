import React from 'react'

import { useData } from '../context/DataContext'
import '../styles/Description.css'

const Description = () => {

    const { totalreqs,alldesk } = useData();

  return (
    <div className='des'>
        <div 
        className='total'
        >
        Total requestes: {totalreqs}
        </div>
        <div className='desks'>
        List of unique department names across all Hotels: 
        {
            alldesk.map((desk,i)=>
            (
                i !== alldesk.length -1 ?
                <p key={i}>{desk},</p>

                :
                (<p key={i}>{desk}.</p>)
            )
            )
        }
        </div>
    </div>
  )
}

export default Description
