import React from 'react'
import { notFound } from 'next/navigation';

// metadata is for SEO purposes and it can be in every component, title will be shown in document title
export const metadata = {
  title: 'users page',
  description: 'first project on next js ',
}
function Users() {
  const post=false
  if (!post) {
    notFound()
  }
  return (
    <div>Users page
    </div>
  )
}

export default Users