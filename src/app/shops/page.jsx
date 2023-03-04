import React from 'react'
import { notFound } from 'next/navigation';

function page() {
    const a=false
    if(!a){
        notFound()
    }
  return (
    <div>shopes page</div>
  )
}

export default page
