import { LoginPayload } from '../pages/auth/Login'
import { SignupPayload } from '../pages/auth/Signup'

export interface IAppState {
  loginPayload: LoginPayload,
  signupPayload: SignupPayload,
}

export interface IAppReducer {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any,
}

export const initialState:IAppState = {
  loginPayload: {
    username: '',
    password: '',
  },
  signupPayload: {
    username: '',
    email: '',
    password: '',
  },
}

export default {
  initialState,
}