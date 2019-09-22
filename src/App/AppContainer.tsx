import App from './App'
import { connect } from 'react-redux'
import { enthusiasmDecrement, enthusiasmIncrement, EnthusiasmStateProps } from '../redux/modules'
import { AnyAction, Dispatch } from 'redux'

export function mapStateToProps({ enthusiasmLevel }: EnthusiasmStateProps) {
  return {
    enthusiasmLevel,
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
