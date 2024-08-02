import React from "react";
import { FaDivide } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { TiBackspaceOutline } from "react-icons/ti";
import { LuPercent } from "react-icons/lu";
import { FaEquals } from "react-icons/fa6";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  /*   const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ]; */

  return (
    // <div>
    <table>
      <tbody className={styles.buttonsContainer}>
        <tr>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("C")}
            >
              C
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("DEL")}
            >
              <TiBackspaceOutline />
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("%")}
              // onClick={handlePercent}
            >
              <LuPercent />
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("/")}
            >
              <FaDivide />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("7")}
            >
              7
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("8")}
            >
              8
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("9")}
            >
              9
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("*")}
            >
              x
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("4")}
            >
              4
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("5")}
            >
              5
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("6")}
            >
              6
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("-")}
            >
              <RiSubtractLine />
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("1")}
            >
              1
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("2")}
            >
              2
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("3")}
            >
              3
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("+")}
            >
              <IoMdAdd />
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("0")}
            >
              0
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick(".")}
            >
              .
            </button>
          </td>
          <td>
            <button
              className={styles.button}
              onClick={() => onButtonClick("=")}
            >
              <FaEquals />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    // </div>
  );
};

export default ButtonsContainer;
