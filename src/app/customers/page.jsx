import React from 'react'
import styles from "./style.module.css"


// metadata is for SEO purposes and it can be in every component, title will be shown in document title
export const metadata = {
  title: 'customers page',
  description: 'first project on next js ',
}
function customers() {
  return (
    <>
    <div className={styles.one}>customers</div>
    <p className={styles.two}>checking</p>

    </>
  )
}

export default customers