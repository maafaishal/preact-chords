import { FunctionalComponent, h } from "preact";

import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

import { Col, Row } from "../../components/Grid";

import { CHORDS, SUFFIXES } from "../../constants/chords";

import style from "./style.css";

const BREAKPOINTS = 7;
const BREAKPOINTS_NUMBER = 100 / BREAKPOINTS;

const renderChordSuffixes = (chord: string) => {
  return SUFFIXES.map((suffix, idx) => {
    const chordName = suffix !== "major" ? chord + suffix : chord;

    return (
      <Row key={idx} breakpoints={BREAKPOINTS_NUMBER}>
        <Typography body1 class={style.chordTitle}>
          {chordName}
        </Typography>
        <img
          class={style.chordImg}
          src={`/assets/ukulele-chords/${chord}/${suffix}.svg`}
          alt={`${chordName} chord`}
        />
      </Row>
    );
  });
};

const renderChords = () => {
  return CHORDS.map((chord, idx) => (
    <div class={style.chordContainer} key={idx}>
      <Col>{renderChordSuffixes(chord)}</Col>
    </div>
  ));
};

const Notfound: FunctionalComponent = () => {
  return (
    <div class="container content">
      <Typography headline3 class={style.title}>
        Ukulele Chords
      </Typography>
      <div>{renderChords()}</div>
    </div>
  );
};

export default Notfound;
