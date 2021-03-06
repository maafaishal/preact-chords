import { h } from "preact";
import cx from "classnames";

import { Link } from "preact-router/match";

import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";

import { Col } from "../../components/Grid";

import style from "./style.css";

const Header = () => {
  return (
    <header class={style.header}>
      <div class="container">
        <LayoutGrid class={style.menuGrid}>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols={3}>
              <img class={style.logo} src="/assets/logo.svg" alt={"logo"} />
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols={9}>
              <Col className={style.menuCol}>
                <Link
                  class={cx(style.link, style.link1)}
                  activeClassName={style.link1}
                  href="/"
                >
                  <div class={style.menu}>Home</div>
                </Link>
                <Link
                  class={cx(style.link, style.link2)}
                  activeClassName={style.link2}
                  href="/ukulele-chords"
                >
                  <div class={style.menu}>Ukulele</div>
                </Link>
                <Link
                  class={cx(style.link, style.link3)}
                  activeClassName={style.link3}
                  href="/guitar-chords"
                >
                  <div class={style.menu}>Guitar</div>
                </Link>
                <Link
                  class={cx(style.link, style.link4)}
                  activeClassName={style.link4}
                  href="/piano-chords"
                >
                  <div class={style.menu}>Piano</div>
                </Link>
              </Col>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    </header>
  );
};

export default Header;
