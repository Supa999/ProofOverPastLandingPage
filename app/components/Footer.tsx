import React from 'react'

function getYear() {
  const date = new Date()
  const year = date.getFullYear()
  return year;
}

export default function Footer() {
  return (
    <footer className='text-white text-xl tracking-widest pb-10 px-4'>
      <h2>&copy; {getYear()} Proof Over Past</h2>
    </footer>
  )
}
