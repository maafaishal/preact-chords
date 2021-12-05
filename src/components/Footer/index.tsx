import { FunctionalComponent, h } from "preact";

import style from "./style.css";

const Footer: FunctionalComponent = () => {
  return (
    <footer class={style.footer}>
      <div class="container">
        Made with love <span class={style.loveIcon}>♥</span>
      </div>
    </footer>
  );
};

export default Footer;
