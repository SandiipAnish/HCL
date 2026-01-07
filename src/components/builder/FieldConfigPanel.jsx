import { useContext, useEffect, useState } from "react"
import { FormContext } from "../../context/FormContext"

const FieldConfigPanel = ({ field }) => {
  const { dispatch } = useContext(FormContext)

  const [label, setLabel] = useState(field.label)
  const [required, setRequired] = useState(field.required)

  useEffect(() => {
    setLabel(field.label)
    setRequired(field.required)
  }, [field])

  const updateField = updates => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        id: field.id,
        updates
      }
    })
  }

  return (
    <div>
      <h4>Field Configuration</h4>

      <div>
        <label>Label</label>
        <input
          value={label}
          onChange={e => {
            setLabel(e.target.value)
            updateField({ label: e.target.value })
          }}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={required}
            onChange={e => {
              setRequired(e.target.checked)
              updateField({ required: e.target.checked })
            }}
          />
          Required
        </label>
      </div>
    </div>
  )
}

export default FieldConfigPanel
