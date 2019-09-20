import { EnthusiasmAction } from './enthusiasm.types'
import { StoreState } from '../../types'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from './enthusiasm.const'

export default function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
    default:
      return state
  }
}
