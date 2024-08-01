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
      /* const key = buttonText.key;
      if (
        key === "Backspace" ||
        key === "Delete" ||
        (key.ctrlKey && key.key === "z")
      ) {
        return;
      } */
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
