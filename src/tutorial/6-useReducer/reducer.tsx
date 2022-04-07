// An enum with all the types of actions to use in our reducer
export enum CountActionTypes {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  RESET = "RESET",
}

// An interface for our actions
interface ICountAction {
  type: CountActionTypes;
  payload: number;
}

// An interface for our state
interface ICountState {
  count: number;
}

const counterReducer = (state: ICountState, action: ICountAction) => {
  const { type, payload } = action;

  switch (type) {
    case CountActionTypes.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountActionTypes.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    case CountActionTypes.RESET:
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
