import { FunctionalComponent, h } from "preact";

import { Link } from "preact-router/match";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";

import { Col, Row } from "../../components/Grid";

import style from "./style.css";

const BREAKPOINTS_NUMBER = 100 / 5;

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <div class="container">
        <LayoutGrid class={style.menuGrid}>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols={3}>
              <img class={style.logo} src="/assets/logo.png" alt={"logo"} />
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols={9}>
              <Col className={style.menuCol}>
                <Link
                  class={style.link}
                  activeClassName={style.menuActive}
                  href="/"
                >
                  <div class={style.menu}>Home</div>
                </Link>
                <Link
                  class={style.link}
                  activeClassName={style.menuActive}
                  href="/ukulele-chords"
                >
                  <div class={style.menu}>Ukulele</div>
                </Link>
                <Link
                  class={style.link}
                  activeClassName={style.menuActive}
                  href="/guitar-chords"
                >
                  <div class={style.menu}>Guitar</div>
                </Link>
                <Link
                  class={style.link}
                  activeClassName={style.menuActive}
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
