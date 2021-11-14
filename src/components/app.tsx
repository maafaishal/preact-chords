import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import UkuleleChords from "../routes/UkuleleChords";
import GuitarChords from "../routes/GuitarChords";
import PianoChords from "../routes/PianoChords";
import NotFoundPage from "../routes/notfound";
import Header from "./header";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <Route path="/ukulele-chords" component={UkuleleChords} />
        <Route path="/guitar-chords" component={GuitarChords} />
        <Route path="/piano-chords" component={PianoChords} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
