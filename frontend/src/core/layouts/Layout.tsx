import React, { ReactNode } from 'react'

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <div className='container'>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
