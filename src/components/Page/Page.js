import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Page.less'

const Page = WrappedComponent => {
  return (
    <div className="page">
      <Header/>
      <WrappedComponent/>
      <Footer/>
    </div>
  )
}

export default Page