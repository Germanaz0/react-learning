import { createStore, applyMiddleware, combineReducers, Middleware } from 'redux'
import { createLogger, ReduxLoggerOptions } from 'redux-logger'
import thunk from 'redux-thunk'

// Custom modules
import EnthusiasmSample from './modules/enthusiasm'

const middlewares: Middleware[] = [thunk]

const loggerOptions: ReduxLoggerOptions = {}
const loggerMiddleware = createLogger(loggerOptions)

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware)
}

const reducer = combineReducers({
  EnthusiasmSample,
})

export type AppState = ReturnType<typeof reducer>

export default createStore(reducer, applyMiddleware(...middlewares))
