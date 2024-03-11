import Header from './Header'
import Footer from './Footer'
import React from 'react'

export default function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="page-title">
          <h1>This is the about page!</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}
