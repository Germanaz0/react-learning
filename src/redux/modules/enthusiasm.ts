import { AnyAction } from 'redux'

const ENTHUSIASM_INCREMENT = 'ENTHUSIASM_INCREMENT'
const ENTHUSIASM_DECREMENT = 'ENTHUSIASM_DECREMENT'

export const enthusiasmIncrement = () => {
  return {
    type: ENTHUSIASM_INCREMENT,
  }
}

export const enthusiasmDecrement = () => {
  return {
    type: ENTHUSIASM_DECREMENT,
  }
}

export interface EnthusiasmStateProps {
  enthusiasmLevel: number
}

export interface EnthusiasmDispatchProps {
  onIncrement: () => any
  onDecrement: () => any
}

export type EnthusiasmAction = typeof enthusiasmDecrement | typeof enthusiasmIncrement

const initialState: EnthusiasmStateProps = {
  enthusiasmLevel: 1,
}

export default (state: EnthusiasmStateProps = initialState, action: AnyAction) => {
  switch (action.type) {
    case ENTHUSIASM_INCREMENT:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case ENTHUSIASM_DECREMENT:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
    default:
      return state
  }
}
