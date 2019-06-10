import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import "../main.css";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <React.Fragment>
          <Header />

          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" exact component={StreamCreate} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/:id" exact component={StreamShow} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
