import { FunctionalComponent, h } from "preact";
import style from "./style.css";

type Props = {
  breakpoints: number;
};

const Notfound: FunctionalComponent<Props> = ({ children, breakpoints }) => {
  return (
    <div
      class={style.row}
      style={{
        "flex-basis": `${breakpoints}%`,
        "max-width": `${breakpoints}%`,
      }}
    >
      {children}
    </div>
  );
};

export default Notfound;
