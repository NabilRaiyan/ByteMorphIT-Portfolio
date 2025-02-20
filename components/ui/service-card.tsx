

import React from 'react'

interface cardProps {
  title: string,
  description: string,
  icon: string
}

const ServiceCard = ({title, description, icon}:cardProps) => {
  return (
    <div className='bg-gradient-to-r from-amber-400 to-orange-700 text-white p-6 rounded'>
      <h1>{title}</h1>
      <p>We provide frontend solution</p>
    </div>
  )
}

export default ServiceCard
