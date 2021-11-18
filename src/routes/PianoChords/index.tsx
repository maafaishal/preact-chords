import { FunctionalComponent, h } from "preact";

import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

import { Col, Row } from "../../components/Grid";

import { CHORDS_V2, SUFFIXES_V2 } from "../../constants/chords";

import style from "./style.css";

const BREAKPOINTS = 5;
const BREAKPOINTS_NUMBER = 100 / BREAKPOINTS;

const renderChordSuffixes = (chord: string) => {
  return SUFFIXES_V2.map((suffix, idx) => {
    const chordName = suffix !== "major" ? chord + suffix : chord;
    const chordFolderName = chord.includes("#")
      ? chord.replace("#", "-sharp")
      : chord;

    return (
      <Row key={idx} breakpoints={BREAKPOINTS_NUMBER}>
        <div class={style.chordContentContainer}>
          <Typography body1 class={style.chordTitle}>
            {chordName}
          </Typography>
          <img
            class={style.chordImg}
            src={`/assets/piano-chords/${chordFolderName}/${suffix}.png`}
            alt={`${chordName} chord`}
          />
        </div>
      </Row>
    );
  });
};

const renderChords = () => {
  return CHORDS_V2.map((chord, idx) => (
    <div class={style.chordContainer} key={idx}>
      <Col>{renderChordSuffixes(chord)}</Col>
    </div>
  ));
};

const Notfound: FunctionalComponent = () => {
  return (
    <div class="container content">
      <Typography headline3 class={style.title}>
        Piano Chords
      </Typography>
      <div>{renderChords()}</div>
    </div>
  );
};

export default Notfound;
