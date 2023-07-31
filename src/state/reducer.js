export const initialState = {
    username: "",
    skinColor: "#ffcc66",
    suitColor: "#ffffff",
    spacecraft: "spaceShip1",
  };

  //Funzioni reducer per tenere traccia dello stato
  export const mainReducer = (state, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return { ...state, username: action.payload };
      case "SET_SKIN_COLOR":
        return { ...state, skinColor: action.payload };
      case "SET_SUIT_COLOR":
        return { ...state, suitColor: action.payload };
      case "SET_SPACECRAFT":
        return { ...state, spacecraft: action.payload };
      default:
        return state;
    }
  };