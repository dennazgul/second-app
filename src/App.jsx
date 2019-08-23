import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Border from './components/Border';

var obj = {
	id: "awesome",
	cool: function coolFn() {
	}
};

var id = "not awesome";

obj.cool(); // awesome

setTimeout( obj.cool, 100 ); // not awesome
function App() {
  return (
    <Router>
        <Route component={Border} />
    </Router>
  );
}
export default App;
