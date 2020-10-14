import { IAppState, IAppReducer } from '../common/mocks'

export const reducer = (state: IAppState, action: IAppReducer) => {
  
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, loginPayload: action.data }
    }
    default: {
      return state
    }
  }
}