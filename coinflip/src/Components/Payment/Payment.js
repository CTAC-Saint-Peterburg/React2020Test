import "./Payment.css";
import {Link} from "react-router-dom";
import React from "react";

export default  class Payment extends React.Component {

    componentDidMount(){
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=device-width, initial-scale=0.4');
    }

    componentWillUnmount(){
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=device-width, initial-scale=1');
    }

    render() {
        return <div className="background">
            <div className="backToMain">
                <button><Link to="/MainPage">назад</Link></button>
            </div>
            <div className="refillIcon">
                <div className="refillIconImg"></div>
            </div>
            <div className="sumOfRefill">
                <div className="sumDiv">
                    <h4>пополнить на:</h4>
                    <h1>50₽</h1>
                </div>
                <div className="refillButton">
                    <button>пополнить</button>
                </div>
            </div>
            <div className="sumOfRefill">
                <div className="sumDiv">
                    <h4>пополнить на:</h4>
                    <h1>100₽</h1>
                </div>
                <div className="refillButton">
                    <button>пополнить</button>
                </div>
            </div>
            <div className="sumOfRefill">
                <div className="sumDiv">
                    <h4>пополнить на:</h4>
                    <h1>200₽</h1>
                </div>
                <div className="refillButton">
                    <button>пополнить</button>
                </div>
            </div>
            <div className="sumOfRefill">
                <div className="sumDiv">
                    <h4>пополнить на:</h4>
                    <h1>500₽</h1>
                </div>
                <div className="refillButton">
                    <button>пополнить</button>
                </div>
            </div>
            <div className="sumOfRefill">
                <div className="sumDiv">
                    <h4>пополнить на:</h4>
                    <h1>1000₽</h1>
                </div>
                <div className="refillButton">
                    <button>пополнить</button>
                </div>
            </div>
            <div className="sumOfRefill">
                <div className="sumDiv">
                    <h4>пополнить на:</h4>
                    <h1>5000₽</h1>
                </div>
                <div className="refillButton">
                    <button>пополнить</button>
                </div>
                <div className="withdrawMoney">
                    <h3>текущий баланс:<h1 className="WithdrawMoney">600₽</h1></h3>
                    <button>вывести</button>
                </div>
            </div>

        </div>
    }
}