import { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"
import FieldConfigPanel from "./FieldConfigPanel"

const FieldList = () => {
  const { state, dispatch } = useContext(FormContext)
  const [selectedField, setSelectedField] = useState(null)

  if (state.form.fields.length === 0) {
    return <p>No fields added yet</p>
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h4>Fields</h4>

        {state.form.fields.map(field => (
          <div
            key={field.id}
            onClick={() => setSelectedField(field)}
            style={{
              cursor: "pointer",
              border:
                selectedField?.id === field.id
                  ? "2px solid black"
                  : "1px solid gray",
              padding: "6px",
              marginBottom: "5px"
            }}
          >
            <strong>{field.label}</strong> ({field.type})
            <button
              onClick={e => {
                e.stopPropagation()
                dispatch({
                  type: "REMOVE_FIELD",
                  payload: field.id
                })
                setSelectedField(null)
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {selectedField && (
        <FieldConfigPanel field={selectedField} />
      )}
    </div>
  )
}

export default FieldList
