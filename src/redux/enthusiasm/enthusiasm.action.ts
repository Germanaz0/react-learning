import * as constants from './enthusiasm.const'
import { IncrementEnthusiasm, DecrementEnthusiasm } from './enthusiasm.types'

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  }
}
