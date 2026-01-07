import { FormProvider } from "./context/FormContext"
import FormBuilder from "./components/builder/FormBuilder"
import DynamicForm from "./components/preview/DynamicForm"

const App = () => {
  return (
    <FormProvider>
      <FormBuilder />
      <hr />
      <DynamicForm />
    </FormProvider>
  )
}

export default App
