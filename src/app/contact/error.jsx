"use client";

import { useRouter } from 'next/navigation';
function GlobalError({ error, reset }) {
    const router = useRouter()  ;

  return (
    <html>
      <head></head>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={()=>{router.push('/')}}>Go Home</button>
      </body>
    </html>
  );
}
export default GlobalError
