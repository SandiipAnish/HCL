import { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"
import FormField from "./FormField"
import { validateField } from "../../utils/validators"

const DynamicForm = () => {
  const { state } = useContext(FormContext)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  const handleChange = (id, value) => {
    setValues(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newErrors = {}

    state.form.fields.forEach(field => {
      const error = validateField(field, values[field.id])
      if (error) newErrors[field.id] = error
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", values)
    }
  }

  if (!state.form.id) return null

  return (
    <div>
      <h3>Form Preview</h3>

      <form onSubmit={handleSubmit}>
        {state.form.fields.map(field => (
          <FormField
            key={field.id}
            field={field}
            value={values[field.id] || ""}
            error={errors[field.id]}
            onChange={handleChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default DynamicForm
