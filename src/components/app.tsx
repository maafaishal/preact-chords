import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import Helmet from "preact-helmet";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../routes/home";
import UkuleleChords from "../routes/UkuleleChords";
import GuitarChords from "../routes/GuitarChords";
import PianoChords from "../routes/PianoChords";
import NotFoundPage from "../routes/notfound";

import style from "./style.css";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Helmet
        title="Home"
        titleTemplate="%s - All Chords of Piano, Guitar, and Ukulele"
        meta={[
          {
            name: "description",
            content: "A collection of Piano, Guitar, and Ukulele chords",
          },
          {
            name: "keywords",
            content: "chord, guitar chord, piano chord, ukulele chord",
          },
          { property: "og:type", content: "article" },
        ]}
      />
      <Header />
      <div class={style.bodyContent}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/ukulele-chords" component={UkuleleChords} />
          <Route path="/guitar-chords" component={GuitarChords} />
          <Route path="/piano-chords" component={PianoChords} />
          <NotFoundPage default />
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
