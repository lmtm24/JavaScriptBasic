const calculator = (() => {
  const plus = (firstNumber) => {   
    console.log('Plus') 
    const addNumbers = (secondNumber) => {      
      return firstNumber + secondNumber;
    }
    return addNumbers;
  }
  const minus = (firstNumber) => {
    console.log('minus')    
    const minusNumber = (secondNumber) =>{
      return firstNumber - secondNumber;
    }
    return minusNumber;
  }
  const times = (firstNumber) => {
    console.log('times')    
    const minusNumber = (secondNumber) =>{
      return firstNumber * secondNumber;
    }
    return minusNumber;
  }
  const divide = (firstNumber) => {
    console.log('Dividing')    
    const minusNumber = (secondNumber) =>{
      return firstNumber / secondNumber;
    }
    return minusNumber;
  }

  return {
    plus,
    minus,
    times,
    divide
  }
})();
const firstNumber = 10;
const secondNumber = 10;
let returnedMethod = calculator.divide(firstNumber);
let result = returnedMethod(secondNumber);

console.log('Result: '+result)
