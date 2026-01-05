import { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"
import FieldSelector from "./FieldSelector"
import FieldList from "./FieldList"

const FormBuilder = () => {
  const { state, dispatch } = useContext(FormContext)
  const [formName, setFormName] = useState("")

  const createForm = () => {
    if (!formName.trim()) return
    dispatch({ type: "CREATE_FORM", payload: formName })
  }

  return (
    <div>
      <h2>Form Builder</h2>

      {!state.form.id && (
        <>
          <input
            placeholder="Enter form name"
            value={formName}
            onChange={e => setFormName(e.target.value)}
          />
          <button onClick={createForm}>Create Form</button>
        </>
      )}

      {state.form.id && (
        <>
          <h3>{state.form.name}</h3>
          <FieldSelector />
          <FieldList />
        </>
      )}
    </div>
  )
}

export default FormBuilder
