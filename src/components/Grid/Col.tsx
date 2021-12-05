import { FunctionalComponent, h } from "preact";
import cx from "classnames";
import style from "./style.css";

type Props = {
  className?: string;
};

const GidCol: FunctionalComponent<Props> = ({ children, className }) => {
  return <div class={cx(style.col, className)}>{children}</div>;
};

export default GidCol;
