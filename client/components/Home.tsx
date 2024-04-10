import Header from './Header'
import Footer from './Footer'
import React from 'react'

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="page-title">
          <h1>Hello world!</h1>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <Footer />
    </>
  )
}
