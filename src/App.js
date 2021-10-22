import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ShowCase from "./Pages/ShowCase/ShowCase";
import NavigationBar from "./Componants/NavigationBar/NavigationBar"
import Form from "./Pages/Form/Form";
import DisplayCard from "./Componants/DisplayCard/DisplayCard";
import ExpandedUserData from "./Library/ExpandedData";
import { Users } from "./Library/Library";



const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <ShowCase />
      </Route>
      <Route exact path="/form">
        <Form />
      </Route>
      <Route
        exact
        path='/profileview/:id'
        component={ExpandedUserData}
      />

    </Router>
  );
};

export default App;