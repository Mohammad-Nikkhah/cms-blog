import React, { Children } from 'react'
import Header from './Header'
export const Layout = ({Children}:any) => {
  return (
    <>
       <Header/>
       {Children}
    </>
  )
}

export default Layout