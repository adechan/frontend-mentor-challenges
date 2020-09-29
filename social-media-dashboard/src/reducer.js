export const initialState = {
  isDarkMode: true,
  listOfFollowers: [],
};

export const getTotalFollowers = (listOfFollowers) =>
  listOfFollowers?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

export function convertValue(value) {
  if (value >= 1000000) {
    value = value / 1000000 + "M";
  } else if (value >= 10000) {
    value = value / 1000 + "K";
  }
  return value;
}

const reducer = (state, action) => {
  console.log(action);

  //   action -> type, [payload]
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        isDarkMode: action.isDarkMode,
      };
    case "SET_LIST_OF_FOLLOWERS":
      return {
        ...state,
        listOfFollowers: [...state.listOfFollowers, action.listOfFollowers],
      };

    default:
      return state;
  }
};

export default reducer;
