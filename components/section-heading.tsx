import React from 'react'

export default function SectionHeading({children}:{
    children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl font-medium text-center mb-8">{children}</h2>
    </div>
  )
}
