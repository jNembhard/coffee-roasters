export const planReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DRINK":
      return { id: action.plan.id, title: action.plan.title }
    default:
      return state
  }
}
