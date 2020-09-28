export const initialState = {
  isDarkMode: true,
};

const reducer = (state, action) => {
  console.log(action);

  //   action -> type, [payload]
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        isDarkMode: action.isDarkMode,
      };

    default:
      return state;
  }
};

export default reducer;
