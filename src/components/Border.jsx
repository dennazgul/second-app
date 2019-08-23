import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import Header from './Header';
import ColumnsTable from './ColumnsTable';
import InProgressTable from './InProgressTable';
import Register from './Register';

// Создаётся объект promise
/*function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    }
    

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

};
httpGet("/dfgfhrtfjrthjrt jrtj rtyty tyjtyj")
  .then(
    response => alert(`Fulfilled:`),
    error => alert(`Rejected:`)
  );*/
function Border() {
  return (<div>
    <header>
      <Route component={Header} />
    </header>
    <div style={{ textAlign: "center" }}>

      <Route path="/register" component={Register} />
    </div>
    <div >
      <ColumnsTable />
    </div>
  </div>
  )
}
export default Border;