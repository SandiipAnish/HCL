import { useContext } from "react"
import { FormContext } from "../../context/FormContext"

const FieldList = () => {
  const { state, dispatch } = useContext(FormContext)

  if (state.form.fields.length === 0) {
    return <p>No fields added yet</p>
  }

  return (
    <div>
      <h4>Fields</h4>

      {state.form.fields.map(field => (
        <div key={field.id}>
          <strong>{field.label}</strong> ({field.type})
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FIELD",
                payload: field.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default FieldList
