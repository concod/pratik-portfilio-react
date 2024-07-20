import { themes } from "../utils/themes";

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return {
        ...state,
        ...themes[action.payload],
        themeCurrent: action.payload,
      };
    case "light":
      return {
        ...state,
        ...themes[action.payload],
        themeCurrent: action.payload,
      };

    case "isShow":
      return { ...state, show: action.payload };

    default:
      return state;
  }
};
