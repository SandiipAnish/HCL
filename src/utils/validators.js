export const validateField = (field, value) => {
  if (field.required && !value) {
    return "This field is required"
  }

  if (field.minLength && value.length < field.minLength) {
    return `Minimum ${field.minLength} characters required`
  }

  return ""
}
