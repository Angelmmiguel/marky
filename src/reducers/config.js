// Actions
import actionNames from '../actions/actionNames';

// Initial state of the config
const initialState = {
  fontSize: 1.2,
  fontFamily: 'Roboto, Arial',
  lineHeight: 1.5,
  layout: 'typewriter',
  theme: 'light'
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.CONFIG_SET:
      return Object.assign({}, state, {
        [action.key]: action.value
      });
    default:
      return state;
  }
}

export default reducer;
