import { SET_WEATHER } from "../constants";

const initialState = {};

const weather = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload;

    default:
      return state;
  }
};

export default weather;
