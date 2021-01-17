import { SHOW_ALERT } from '../../types/alert';

const initialState = {
  showAlert: false
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: action.payload
      }
    default:
      return { ...state }
  }
}

export default alertReducer;