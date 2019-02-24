const initialState = {
  isMessageVisible: false
}

export default function(state = initialState, {type}) {
  switch (type) {
    case 'TOGGLE_VISIBILITY':
      return state;
     

    default:
      return state;;
  }
}