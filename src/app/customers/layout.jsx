import React from 'react'
import Header from './header'
import Footer from './Footer'


function customersLayout({ children }) {
    return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    {/* to use footer in just customers page  */}
    <Footer/>
    </>
  )
}

export default customersLayout