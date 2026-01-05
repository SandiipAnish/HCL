import { useContext } from "react"
import { FormContext } from "../../context/FormContext"

const FieldSelector = () => {
  const { dispatch } = useContext(FormContext)

  const addField = type => {
    dispatch({
      type: "ADD_FIELD",
      payload: {
        id: Date.now().toString(),
        type,
        label: `${type} field`,
        required: false
      }
    })
  }

  return (
    <div>
      <h4>Add Field</h4>
      <button onClick={() => addField("text")}>Text</button>
      <button onClick={() => addField("email")}>Email</button>
      <button onClick={() => addField("number")}>Number</button>
    </div>
  )
}

export default FieldSelector
