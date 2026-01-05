export const initialState = {
  form: {
    id: null,
    name: "",
    fields: []
  }
}

export const formReducer = (state, action) => {
  switch (action.type) {

    case "CREATE_FORM":
      return {
        ...state,
        form: {
          id: Date.now().toString(),
          name: action.payload,
          fields: []
        }
      }

    case "ADD_FIELD":
      return {
        ...state,
        form: {
          ...state.form,
          fields: [...state.form.fields, action.payload]
        }
      }

    case "UPDATE_FIELD":
      return {
        ...state,
        form: {
          ...state.form,
          fields: state.form.fields.map(field =>
            field.id === action.payload.id
              ? { ...field, ...action.payload.updates }
              : field
          )
        }
      }

    case "REMOVE_FIELD":
      return {
        ...state,
        form: {
          ...state.form,
          fields: state.form.fields.filter(
            field => field.id !== action.payload
          )
        }
      }

    case "LOAD_FORM":
      return {
        ...state,
        form: action.payload
      }

    default:
      return state
  }
}
