import { createStore, applyMiddleware, combineReducers, Middleware } from 'redux'
import { createLogger, ReduxLoggerOptions } from 'redux-logger'
import thunk from 'redux-thunk'

// Custom modules
import EnthusiasmSample from './modules/enthusiasm'

// App Reducers
const reducer = combineReducers({
  EnthusiasmSample,
})

// Middlewares
const middlewares: Middleware[] = [thunk]

const loggerOptions: ReduxLoggerOptions = {}
const loggerMiddleware = createLogger(loggerOptions)

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware)
}

// Store creation
export type AppState = ReturnType<typeof reducer>

export default createStore(reducer, applyMiddleware(...middlewares))
