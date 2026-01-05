import { FormProvider } from "./context/FormContext"
import FormBuilder from "./components/builder/FormBuilder"

const App = () => {
  return (
    <FormProvider>
      <FormBuilder />
    </FormProvider>
  )
}

export default App
