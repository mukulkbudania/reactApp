import { ACTIONS } from '../constants'
import auditTrailActions from './auditTrailActions'

function resetErrorMessage () {
  return { type: ACTIONS.RESET_ERROR_MESSAGE }
}

export {
  auditTrailActions,
  resetErrorMessage
}