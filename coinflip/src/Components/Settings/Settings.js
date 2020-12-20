import "./Settings.css";
import {Link} from "react-router-dom";
import React from 'react';

export default  class SettingsPage extends React.Component {

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
        return <div>
        <div className="background">
                <div className="backToMain">
                    <button><Link to="/MainPage">назад</Link></button>
                </div>
                <div className="refillIcon">
                    <div className="refillIconImg"></div>
                </div>
                <div className="settingsMenuFiller">
                    <div className="settingsOptions">
                        <h2><a href="#">cменить аватар</a></h2>
                        <h2><a href="#">написать в поддержку</a></h2>
                        <h2><a href="#">политика конфиденциальности</a></h2>
                        <h2><a href="#">о нас</a></h2>
                    </div>
                </div>
        </div>
        </div>
    }
}