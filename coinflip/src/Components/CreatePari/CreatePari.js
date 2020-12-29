import "./CreatePari.css";
import {Link} from "react-router-dom";
import React from 'react';
import API from "../../utils/API";

export default  class CreatePari extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            SportsList: []
        }
       this.getSportsList = this.getSportsList.bind(this)
    }
    async getSportsList(){
        const response = await API.get("/getSportsList")
        console.log(response.data)
        this.setState({SportsList: response.data })
    }

    componentDidMount(){
        this.getSportsList();
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=device-width, initial-scale=0.4');
    }

    componentWillUnmount(){
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=device-width, initial-scale=1');
    }

    function zapusk(){
        let x = document.getElementById("okno");
        x.style.display = "block";
    };

    render() {
        return <div>
            <div className="background">
                <div className="backToMain">
                    <button><Link to="/MainPage">назад</Link></button>
                </div>
                <div className="refillIcon">
                    <div className="refillIconImg"></div>
                </div>
                <div className="MenuWhiteFiller">
                    <div className="createpariTitle"><h1>создать пари</h1></div>
                    <div className="choice">
                        <h2>Вид спорта:</h2><h1>Футбол</h1>
                        <button onClick="zapusk();">выбрать</button>
                    </div>
                    <div className="choice">
                        <h2>Турнир:</h2><h1>Чемпионат России</h1>
                        <button>выбрать</button>
                    </div>
                    <div className="choice">
                        <h2>выбрать победителя:</h2><h1>Зен:победа</h1><h1>Спар:поражение</h1>
                        <button>выбрать</button>
                    </div>
                    <div className="choice"><h2>Ничья:</h2><input type="checkbox" className="checkpari" name=""></input>
                    </div>
                    <div className="choice">
                        <h2>Размер ставки:</h2><h1>50₽</h1>
                        <button>выбрать</button>
                    </div>
                    <button className="createButton">создать</button>
                </div>
                <div className="okno" id="okno">
                    <div className="oknoText">
                        <h3><a onClick="" id="football">Футбол</a></h3>
                        <h3><a onClick="" id="hockey">Хоккей</a></h3>
                        <h3><a onClick="" id="basketball">Специальные события</a></h3>
                    </div>
                </div>
            </div>
        </div>
    }
}
