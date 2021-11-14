import { FunctionalComponent, h } from "preact";
import style from "./style.css";

const GidCol: FunctionalComponent = ({ children }) => {
  return <div class={style.col}>{children}</div>;
};

export default GidCol;
