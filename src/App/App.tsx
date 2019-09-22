import * as React from 'react'
import logo from '../logo.svg'
import './App.css'
import { EnthusiasmDispatchProps, EnthusiasmStateProps } from '../redux/modules'

type Props = EnthusiasmDispatchProps & EnthusiasmStateProps

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}

function App({ enthusiasmLevel, onIncrement, onDecrement }: Props) {
  if (!enthusiasmLevel) {
    enthusiasmLevel = 1
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="greeting">Hello {getExclamationMarks(enthusiasmLevel)}</div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </header>
    </div>
  )
}

export default App
