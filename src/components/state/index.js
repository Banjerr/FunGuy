// @flow
import { BehaviorSubject } from "rxjs";

const stateService = new BehaviorSubject(0);

type StateObject = {
  overallHealth?: number,
  oxygen?: number,
  light?: number,
  nutrition?: number,
  temperature?: number,
  humidity?: number,
  age?: number,
};

const initialState = {
  overallHealth: 0,
  oxygen: 0,
  light: 0,
  nutrition: 0,
  temperature: 0,
  humidity: 0,
  age: 0
};

let state = initialState;

const stateStore = {
  init: () => {
    state = { ...state};
    stateService.next(state);
  },
  sendState: (newState: StateObject) => {
    state = {
      ...state,
      ...newState
    };
    console.log(`state is now`, newState);
    stateService.next(state);
  },
  clearState: () => {
    state = initialState;
    stateService.next(state);
  },
  initialState,
};

export { stateStore, stateService };
