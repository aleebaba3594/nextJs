import Link from 'next/link';
import React from 'react'

function NotFound() {
    return (
      <>
        <h2>Not Found</h2>
        <Link href="/">
        go Home
        </Link>
      </>
    );
  }

export default NotFound