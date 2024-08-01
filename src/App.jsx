import React from "react";
// import "./App.css";
import styles from "./App.module.css";
import { FaDivide } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { TiBackspaceOutline } from "react-icons/ti";
import { LuPercent } from "react-icons/lu";
import { FaEquals } from "react-icons/fa6";

const App = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <input className={styles.opertaion} type="text" value="3*7" disabled />
        <input className={styles.result} type="text" value="21" disabled />
      </div>
      <div>
        <table className={styles.buttonsContainer}>
          <tr>
            <td>
              <button className={styles.button}>C</button>
            </td>
            <td>
              <button className={styles.button}>
                <TiBackspaceOutline />
              </button>
            </td>
            <td>
              <button className={styles.button}>
                <LuPercent />
              </button>
            </td>
            <td>
              <button className={styles.button}>
                <FaDivide />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className={styles.button}>7</button>
            </td>
            <td>
              <button className={styles.button}>8</button>
            </td>
            <td>
              <button className={styles.button}>9</button>
            </td>
            <td>
              <button className={styles.button}>x</button>
            </td>
          </tr>

          <tr>
            <td>
              <button className={styles.button}>4</button>
            </td>
            <td>
              <button className={styles.button}>5</button>
            </td>
            <td>
              <button className={styles.button}>6</button>
            </td>
            <td>
              <button className={styles.button}>
                <RiSubtractLine />
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button className={styles.button}>1</button>
            </td>
            <td>
              <button className={styles.button}>2</button>
            </td>
            <td>
              <button className={styles.button}>3</button>
            </td>
            <td>
              <button className={styles.button}>
                <IoMdAdd />
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button className={styles.button}>0</button>
            </td>
            <td>
              <button className={styles.button}>.</button>
            </td>
            <td>
              <button className={styles.button}>
                <FaEquals />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
