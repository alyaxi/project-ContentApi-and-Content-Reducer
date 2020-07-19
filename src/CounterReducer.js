

const counterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
        case 'Decrement':
            return state - 1
            case 'Reset':
                return state = 0
      
    }
  }
export default counterReducer;