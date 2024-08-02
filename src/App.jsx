import React, { useState } from "react";
// import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  const [calVal, setCalVal] = useState("");
  const [finalVal, setFinalVal] = useState("");

  const handleButtonClicked = (buttonText) => {
    // console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
      setFinalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      // setCalVal(result);
      setFinalVal(result);
    } else if (buttonText === "DEL") {
      setCalVal(calVal.slice(0, -1));
    } else if (buttonText === "%") {
      const result = calVal / 100;
      setFinalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
      // setFinalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayCalculate={calVal} displayResult={finalVal} />
      <ButtonsContainer onButtonClick={handleButtonClicked} />
    </div>
  );
};

export default App;
