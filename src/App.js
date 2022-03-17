import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import Chatscreen from "./Chatscreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<TinderCards />}
            component={<SwipeButtons />}
          ></Route>
          <Route
            path="/message"
            element={<Chats />}
            components={<Chatscreen />}
          ></Route>
          <Route path="/message/:person" element={<Chatscreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
