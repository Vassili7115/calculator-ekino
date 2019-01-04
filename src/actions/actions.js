export const INPUT_NUMBER = 'INPUT_NUMBER'
export const INPUT_OPERATOR = 'INPUT_OPERATOR'
export const CLEAR = 'CLEAR'

export const inputNumber = (number) => {
  return{
    type:INPUT_NUMBER,
    number
  }
}

export const inputOperator = (operator) => {
  return{
    type:INPUT_OPERATOR,
    operator
  }
}

export const clear = () => {
  return{
    type:CLEAR,
  }
}