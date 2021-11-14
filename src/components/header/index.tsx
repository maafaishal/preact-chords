import { FunctionalComponent, h } from "preact";

import { Link } from "preact-router/match";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";

import style from "./style.css";

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <div class="container">
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols={3}>
              <img class={style.logo} src="/assets/logo.png" alt={"logo"} />
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols={6}>
              <Link activeClassName={style.active} href="/ukulele-chords">
                Ukulele
              </Link>
              <Link activeClassName={style.active} href="/guitar-chords">
                Guitar
              </Link>
              <Link activeClassName={style.active} href="/piano-chords">
                Piano
              </Link>
              <Link activeClassName={style.active} href="/profile">
                Profile
              </Link>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    </header>
  );
};

export default Header;
