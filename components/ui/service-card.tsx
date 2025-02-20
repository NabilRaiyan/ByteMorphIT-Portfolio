

import Image from 'next/image'
import React from 'react'
interface cardProps {
  title: string,
  description: string,
  icon: string
}

const ServiceCard = ({title, description, icon}:cardProps) => {
  return (
    <div className='bg-gradient-to-r from-amber-400 to-orange-700 text-white p-6 rounded'>
      <img src={icon} alt={title + ' image'} width={32} height={32} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard
