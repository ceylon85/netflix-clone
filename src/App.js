import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
      } else {
        //Logged out
      }
    });
    return unsubscribe;
  }, []);

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
