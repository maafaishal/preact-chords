import { h } from "preact";
import { useState } from "preact/hooks";

import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

import TabSelector from "../../components/TabSelector";

import { Col, Row } from "../../components/Grid";

import { CHORDS, SUFFIXES } from "../../constants/chords";

import style from "./style.css";

const BREAKPOINTS_NUMBER = 100 / 6;
const ALL_CHORDS_TEXT = "All Chords";
const TABS_CONTENTS = [ALL_CHORDS_TEXT, ...CHORDS];

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

const chordComp = (chord: string, idx: number) => {
  return (
    <div key={idx} class={style.chordContainer}>
      <Col>{renderChordSuffixes(chord)}</Col>
    </div>
  );
};

const renderChords = (selectedTab: string) => {
  const chordsArray: JSX.Element[] = [];

  if (selectedTab !== ALL_CHORDS_TEXT) {
    chordsArray.push(chordComp(selectedTab, 0));
  } else {
    CHORDS.forEach((chord, idx) => {
      chordsArray.push(chordComp(chord, idx));
    });
  }

  return chordsArray;
};

const renderTabs = (selectedTab: string, setSelectedTab: any) => {
  return TABS_CONTENTS.map((chord, idx) => (
    <TabSelector
      key={idx}
      isActive={selectedTab === chord}
      onClick={() => setSelectedTab(chord)}
    >
      {chord}
    </TabSelector>
  ));
};

const UkuleleChordPage = () => {
  const [selectedTab, setSelectedTab] = useState(ALL_CHORDS_TEXT);

  return (
    <div class="container content">
      <Typography headline3 class={style.title}>
        Ukulele Chords
      </Typography>
      <div className="flex border-b border-gray-300 justify-between">
        {renderTabs(selectedTab, setSelectedTab)}
      </div>
      <div>{renderChords(selectedTab)}</div>
    </div>
  );
};

export default UkuleleChordPage;
