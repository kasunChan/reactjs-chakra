
import React, { createContext, useReducer, ReactNode } from 'react'
// eslint-disable-next-line import/no-cycle
import { initialState, IAppState, IAppReducer } from '../common/mocks'
// eslint-disable-next-line import/no-cycle
import { reducer } from './reducer'

type Props = {
  children: ReactNode
}

export const AppContext = createContext<{
  state: IAppState;
  dispatch: React.Dispatch<IAppReducer>;
}>({
  state: initialState,
  dispatch: () => null,
})

export const AppProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      { props.children }
    </AppContext.Provider>
  )
}