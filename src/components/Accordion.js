'use client'

import { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left py-4 flex justify-between items-center"
            onClick={() => handleClick(index)}
          >
            <span className="font-poppins font-bold">{item.title}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="pb-4">
              <p className="font-lato">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
