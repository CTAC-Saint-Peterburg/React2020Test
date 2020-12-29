import "./HistoryPari.css";
import {Link} from "react-router-dom";
import React from 'react';
import API from "../../utils/API";

export default  class HistoryPari extends React.Component {

   async componentDidMount(){
       let pariData = await API.get("/getPari")
       console.log(pariData)
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
                <div className="MenuWhiteFiller">
                    <div>
                        <div className="parihistoryHeaders">
                            <h2>Ожидают результат:</h2>
                        </div>
                        <div className="pariHistoryBlock">
                            <div className="pariBlockLevo">
                                <img src=""></img>
                                    <h4 className="">Никнейм</h4>
                            </div>
                            <div className="parihistoryInfo">
                                <h4>Победа:<i>Zen</i></h4>
                                <h4>Поражение:<i>Spar</i></h4>
                                <h1>100₽</h1>
                            </div>
                            <div className="pariBlockPravo">
                                <img src=""></img>
                                    <h4 className="">Никнейм</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="parihistoryHeaders">
                            <h2>Победа:</h2>
                        </div>
                        <div className="pariHistoryBlock">
                            <div className="pariBlockLevo">
                                <img src=""></img>
                                    <h4 className="">Никнейм</h4>
                            </div>
                            <div className="parihistoryInfo">
                                <h4>Победа:<i>Zen</i></h4>
                                <h4>Поражение:<i>Spar</i></h4>
                                <h1>100₽</h1>
                            </div>
                            <div className="pariBlockPravo">
                                <img src=""></img>
                                    <h4 className="">Никнейм</h4>
                            </div>
                        </div>
                        <div>
                            <div className="parihistoryHeaders">
                                <h2>Поражение:</h2>
                            </div>
                            <div className="pariHistoryBlock">
                                <div className="pariBlockLevo">
                                    <img src=""></img>
                                        <h4 className="">Никнейм</h4>
                                </div>
                                <div className="parihistoryInfo">
                                    <h4>Победа:<i>Zen</i></h4>
                                    <h4>Поражение:<i>Spar</i></h4>
                                    <h1>100₽</h1>
                                </div>
                                <div className="pariBlockPravo">
                                    <img src=""></img>
                                        <h4 className="">Никнейм</h4>
                                </div>
                            </div>
                            <div>
                                <div className="parihistoryHeaders">
                                    <h2>Возврат:</h2>
                                </div>
                                <div className="pariHistoryBlock">
                                    <div className="pariBlockLevo">
                                        <img src=""></img>
                                            <h4 className="">Никнейм</h4>
                                    </div>
                                    <div className="parihistoryInfo">
                                        <h4>Победа:<i>Zen</i></h4>
                                        <h4>Поражение:<i>Spar</i></h4>
                                        <h1>100₽</h1>
                                    </div>
                                    <div className="pariBlockPravo">
                                        <img src=""></img>
                                            <h4 className="">Никнейм</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}