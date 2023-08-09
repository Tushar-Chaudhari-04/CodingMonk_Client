import React from 'react'
import "./FAQCard.scss"

const FAQCard = (data) => {
  return (
    <div className='faq-card'>
        <p className='faq-question'>{data.data.question}</p>
        <p className='faq-answer'>{data.data.answer}</p>
        </div>
  )
}

export default FAQCard