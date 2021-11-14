import { FunctionalComponent, h } from "preact";

import Typography from "preact-material-components/Typography";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import "preact-material-components/Typography/style.css";

import style from "./style.css";

const renderChords = () => {
  return [...Array(48)].map((c, idx) => (
    <LayoutGrid.Cell key={idx} cols={2}>
      <Typography body1 class={style.chordTitle}>
        C
      </Typography>
      <img class={style.chordImg} src="/assets/piano-chord.png" alt="logo" />
    </LayoutGrid.Cell>
  ));
};

const Notfound: FunctionalComponent = () => {
  return (
    <div class="container content">
      <Typography headline3 class={style.title}>
        Piano Chords
      </Typography>
      <LayoutGrid>
        <LayoutGrid.Inner>{renderChords()}</LayoutGrid.Inner>
      </LayoutGrid>
    </div>
  );
};

export default Notfound;
