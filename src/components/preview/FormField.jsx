const FormField = ({ field, value, error, onChange }) => {
  const renderInput = () => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return (
          <input
            type={field.type}
            value={value}
            onChange={e => onChange(field.id, e.target.value)}
          />
        )

      default:
        return null
    }
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <label>
        {field.label}
        {field.required && " *"}
      </label>

      {renderInput()}

      {error && (
        <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
      )}
    </div>
  )
}

export default FormField
