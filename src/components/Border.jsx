import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';
import Header from './Header';
import IdeasTable from './IdeasTable';
import InProgressTable from './InProgressTable';
import Register from './Register';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    reject("result");
  }, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );
function Border() {
    return (<div>
        <header>
        <Route component={Header} />
        </header>
        <div style={{ textAlign: "center"}}>
            
        <Route path="/register" component={Register} />
        </div>
            <div className="bodyContainer">
                <div><IdeasTable />
                </div>
                <div><InProgressTable /></div>
                <div></div>
                <div></div>
            </div>
    </div>
    )
}
export default Border;