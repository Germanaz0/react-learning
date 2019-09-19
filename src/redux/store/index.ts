import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import enthusiasm from '../enthusiasm/enthusiasm.reducer'

const store = combineReducers({
  enthusiasm,
})

export default createStore(store, applyMiddleware(thunk))
