export const initialState = {
  isDarkMode: true,
  totalFollowers: 0,
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
    case "SET_TOTAL_FOLLOWERS":
      console.log(initialState.totalFollowers);
      return {
        ...state,
        totalFollowers: action.totalFollowers,
      };

    default:
      return state;
  }
};

export default reducer;
