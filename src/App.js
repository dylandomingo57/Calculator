import './App.css';
import React, {useState} from 'react';

function App() {
  const [totalExpression, setTotalExpression] = useState("");
  const [operator, setOperator] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isSomething, changeNum] = useState(false);

  const handleNumClick = (e) => {
    if (isSomething === false) {
      setNum1(num1 + e.target.textContent);
    } 
    else {
      setNum2(num2 + e.target.textContent);
    }
    setTotalExpression(totalExpression + e.target.textContent);
  }
  const handleOpClick = (e) => {
    setOperator(e.target.textContent);
    setTotalExpression(totalExpression + e.target.textContent)
    changeNum(true);
  }
  const handleClearClick = () => {

  }
  const handleEqualClick = () => {
    console.log(num1);
    console.log(num2);
    switch(operator) {
      case("+"):
      setTotalExpression(parseInt(num1) + parseInt(num2));
      break;

      case("-"):
      setTotalExpression(parseInt(num1) - parseInt(num2));
      break;

      case("*"):
      setTotalExpression(parseInt(num1) * parseInt(num2));
      break;
      
      case("/"):
      setTotalExpression(parseInt(num1) / parseInt(num2));
      break;

      default:
    }
    setNum1(0);
    setNum2(0);
  }

  return(
    <div>
      <div>
        <input value={totalExpression}/>
      </div>
      <div>
        <button onClick={handleNumClick}>7</button>
        <button onClick={handleNumClick}>8</button>
        <button onClick={handleNumClick}>9</button>
        <button onClick={handleOpClick}>+</button>
      </div>
      <div>
        <button onClick={handleNumClick}>4</button>
        <button onClick={handleNumClick}>5</button>
        <button onClick={handleNumClick}>6</button>
        <button onClick={handleOpClick}>-</button>
      </div>
      <div>
        <button onClick={handleNumClick}>1</button>
        <button onClick={handleNumClick}>2</button>
        <button onClick={handleNumClick}>3</button>
        <button onClick={handleOpClick}>*</button>
      </div>
      <div>
        <button onClick={handleNumClick}>AC</button>
        <button onClick={handleNumClick}>0</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleOpClick}>/</button>
      </div>
    </div>
  );
}

export default App;