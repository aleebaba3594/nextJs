"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

function page() {
  const id = usePathname().split('/').pop()
  return (
    <div>
      its a book whose id is {id}
    </div>
  )
}

export default page
