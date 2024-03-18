import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Calculator from './Calc'

export default function CalcApp() {
  return (
    <div>
      <Header />
      <div className="calc-page">
        <h1>Calculator App</h1>
        <Calculator />
      </div>
      <Footer />
    </div>
  )
}
