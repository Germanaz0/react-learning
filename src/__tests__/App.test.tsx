import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App/App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const onIncrement = { type: 'ENTHUSIASM_INCREMENT' }
  const onDecrement = { type: 'ENTHUSIASM_INCREMENT' }
  ReactDOM.render(
    <App enthusiasmLevel={1} onDecrement={() => onDecrement} onIncrement={() => onIncrement} />,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
