import { CLEAR, INPUT_NUMBER, INPUT_OPERATOR } from "../actions/actions";

const initialState = {
  currentValue: 0,
  inputValue: 0,
  displayValue: 0,
  operator: null,
  history: {
    inputValue: null,
    operator: null
  }
};

const operators = {
  "+": (a, b) => Number(a) + Number(b),
  "-": (a, b) => Number(a) - Number(b),
  "*": (a, b) => Number(a) * Number(b),
  "/": (a, b) => Number(a) / Number(b),
  "=": (a, b) => Number(a)
};

const currentInputZero = (inputValue, number) => {
  switch (number) {
    case ".":
      return  "0.";
    case "0":
      return "" + inputValue;
    default:
      return  "" + number;
  }
};

const currentInputNonZero = (inputValue, number) => {
  let newValue;
  if (number === ".") {
    let check = "" + inputValue;
    if (check.match(/\./)) {
      check.match(/^./) ? (newValue = ".") : (newValue = check);
    } else {
      newValue = check + number;
    }
  } else {
    newValue = inputValue + number;
  }
  return newValue;
};


export default function(state = initialState, action) {
  switch (action.type) {

    case CLEAR:
      return { ...initialState };

    case INPUT_NUMBER:
      let newValue;
      state.inputValue === 0
        ? (newValue = currentInputZero(state.inputValue, action.number))
        : (newValue = currentInputNonZero(state.inputValue, action.number));
      if (state.operator !== null && state.currentValue === 0) {
        let actionNumber = action.number === "." ? "0." : action.number;
        return {
          ...state,
          currentValue: state.inputValue,
          inputValue: actionNumber,
          displayValue: actionNumber
        };
      } else {
        return { ...state, inputValue: newValue, displayValue: newValue };
      }

    case INPUT_OPERATOR:
      let calc;
      if (state.operator === null) {
        if (
          action.operator === "=" &&
          state.history.operator
          // && state.history.inputValue
        ) {
          calc = operators[state.history.operator](
            state.currentValue,
            state.history.inputValue
          );
          return {
            ...state,
            currentValue: calc,
            inputValue: 0,
            displayValue: calc
          };
        }
        if (state.inputValue === 0) {
          return {
            ...state,
            currentValue: 0,
            inputValue: state.currentValue,
            operator: action.operator
          };
        }
        return {
          ...state,
          currentValue: state.inputValue,
          inputValue: 0,
          operator: action.operator
        };
      } else {
        calc = operators[state.operator](state.currentValue, state.inputValue);
        let newOperator = action.operator === "=" ? null : action.operator;
        return {
          ...state,
          currentValue: calc,
          inputValue: 0,
          displayValue: calc,
          operator: newOperator,
          history: {
            ...state.history,
            inputValue: state.inputValue,
            operator: state.operator
          }
        };
      }

    default:
      return state;
  }
}
