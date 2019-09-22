import App from './App'
import { connect } from 'react-redux'
import { enthusiasmDecrement, enthusiasmIncrement } from '../redux/modules'
import { AnyAction, Dispatch } from 'redux'
import { AppState } from '../redux'

export function mapStateToProps({ EnthusiasmSample }: AppState) {
  return {
    enthusiasmLevel: EnthusiasmSample.enthusiasmLevel,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    onIncrement: () => dispatch(enthusiasmIncrement()),
    onDecrement: () => dispatch(enthusiasmDecrement()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
