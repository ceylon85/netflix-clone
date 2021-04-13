import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Route>
            <LoginScreen />
            <Footer />
          </Route>
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
              <Footer />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
