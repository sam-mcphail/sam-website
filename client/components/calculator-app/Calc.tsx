import React, { useState } from 'react'
import { FaPowerOff } from 'react-icons/fa'

const defaultEquation = {
  num1: '',
  num2: '',
  operator: '+',
}

export default function Calc() {
  const [onScreenNum, setOnScreenNum] = useState('0')
  const [equation, setEquation] = useState(defaultEquation)

  function handleDigitClick(digit) {
    console.log(digit)
    let newNum = onScreenNum
    if (newNum.length < 5) {
      newNum += digit
      const newNumArr = newNum.split('')
      while (
        newNumArr.length > 1 &&
        newNumArr[0] == '0' &&
        newNumArr[1] !== '.'
      ) {
        newNumArr.shift()
      }
      newNum = newNumArr.join('')
    }
    setOnScreenNum(newNum)
  }

  function handleOperatorClick(op) {
    let newEq = { ...equation }
    if (newEq['num1'] == '' && newEq['num2'] == '') {
      newEq['num1'] = onScreenNum
      newEq['operator'] = op
    }
    setEquation(newEq)
  }

  function handleEqualsClick() {
    console.log(equation['num1'], equation['operator'], equation['num2'])
  }

  function handlePowerClick() {
    setOnScreenNum('0')
    setEquation(defaultEquation)
  }

  return (
    <div className="calc-game">
      <h1>Calculator App</h1>
      <div className="calc">
        <div className="calc-row">
          <div className="calc-text-box">
            <h1>{onScreenNum}</h1>
          </div>
          <button className="calc-button" onClick={handlePowerClick}>
            <FaPowerOff />
          </button>
        </div>
        <div className="calc-all-rows">
          <div className="calc-row">
            <button
              className="calc-button"
              onClick={() => handleDigitClick('7')}
            >
              <h1>7</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleDigitClick('8')}
            >
              <h1>8</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleDigitClick('9')}
            >
              <h1>9</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleOperatorClick('÷')}
            >
              <h1>÷</h1>
            </button>
          </div>
          <div className="calc-row">
            <button
              className="calc-button"
              onClick={() => handleDigitClick('4')}
            >
              <h1>4</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleDigitClick('5')}
            >
              <h1>5</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleDigitClick('6')}
            >
              <h1>6</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleOperatorClick('x')}
            >
              <h1>x</h1>
            </button>
          </div>
          <div className="calc-row">
            <button
              className="calc-button"
              onClick={() => handleDigitClick('1')}
            >
              <h1>1</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleDigitClick('2')}
            >
              <h1>2</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleDigitClick('3')}
            >
              <h1>3</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleOperatorClick('-')}
            >
              <h1>-</h1>
            </button>
          </div>
          <div className="calc-row">
            <button
              className="calc-button"
              onClick={() => handleDigitClick('0')}
            >
              <h1>0</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleDigitClick('.')}
            >
              <h1>.</h1>
            </button>
            <button
              className="calc-button"
              onClick={() => handleOperatorClick('+')}
            >
              <h1>+</h1>
            </button>
            <button className="calc-button" onClick={handleEqualsClick}>
              <h1>=</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
