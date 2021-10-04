import { useState } from "react";
import "./styles.css";

export default function App() {
  var [statement, setStatement] = useState("");
  var [number, setNumber] = useState(0);

  function isPrimeNumber() {
    if (number > 1) {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          return 2;
        }
      }
      return 1;
    } else if (number === "0" || number === "1") {
      return 3;
    } else {
      return 4;
    }
  }

  function clickHandler() {
    var flag = isPrimeNumber();
    switch (flag) {
      case 1: {
        setStatement(number + " is a prime number.");
        break;
      }
      case 2: {
        setStatement(number + " is not a prime number.");
        break;
      }
      case 3: {
        setStatement(number + " is neither a prime number nor a composite.");
        break;
      }
      default:
        setStatement("please enter a valid input.");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>is Prime Number? </h1>
        <input
          placeholder={"enter a number"}
          onChange={(element) => setNumber(element.target.value)}
        />
        <button onClick={() => clickHandler()}>Check</button>
        <p>{statement}</p>
      </div>
    </div>
  );
}
