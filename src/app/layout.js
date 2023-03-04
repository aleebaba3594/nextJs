import Nav from './components/nav/Nav'
import './globals.css'


// metadata is for SEO purposes and it can be in every component, title will be shown in document title
export const metadata = {
  title: 'home page',
  description: 'first project on next js ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* this nav will be shown in every component coz this the main layout, rootlayout  */}
        <Nav/>
        {children}
        </body>
    </html>
  )
}
