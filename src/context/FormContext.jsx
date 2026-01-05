import { createContext, useReducer } from "react"
import { formReducer, initialState } from "../reducers/formReducer"

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}
