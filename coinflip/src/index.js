import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Payment from "./Components/Payment/Payment";
import CreatePari from "./Components/CreatePari/CreatePari";

let NotFoundPage = ()=><h1>not found</h1>;
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact={true} path="/Mainpage" >
                <MainPage />
            </Route>
            <Route exact={true} path="/CreatePari" >
                <CreatePari />
            </Route>
            <Route exact={true} path="/payment" >
                <Payment />
            </Route>
            <Route component={NotFoundPage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
