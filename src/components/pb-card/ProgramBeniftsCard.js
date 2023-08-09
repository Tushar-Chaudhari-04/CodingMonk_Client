import React from 'react'
import "./ProgramBeniftsCard.scss"

const ProgramBeniftsCard = (data) => {
    console.log("data",data)
  return (
    <div className='program-benifits-card' style={{backgroundColor:data.data.backgroundColor,borderColor:data.data.borderColor}}>
        <h3>{data.data.heading}</h3>
        <p>{data.data.subheading}</p>
    </div>
  )
}

export default ProgramBeniftsCard