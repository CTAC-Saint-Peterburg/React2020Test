import "./MainPage.css";
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <div>
            <div className="mainBlock">
                <div className="balance">
                    <h3>Общий баланс</h3>
                    <h1>500₽</h1>
                    <button className="">Demo/основной</button>
                </div>
                <div className="avatar">
                    <img className="" src=""></img>
                    <h3>Никнейм</h3>
                </div>
                <div className="stavki">
                    <button className="">текущие ставки</button>
                </div>
            </div>
            <div class="buttonblock">
                <div class="blockimg"></div>
                <p>
                    <Link to="/HistoryPari">история пари</Link>
                </p>
            </div>
            <div className="buttonblock">
                <div className="blockimg"></div>
                <p>
                    <Link to="/payment">снять/пополнить</Link>
                </p>
            </div>
            <div className="buttonblock">
                <div className="blockimg"></div>
                <p>
                    <Link to="/Settings">настройки</Link>
                </p>
            </div>
            <div className="buttonblock">
                <div className="blockimg"></div>
                <p>
                    <Link to="/CreatePari">создать пари</Link>
                </p>
            </div>
            <div className="mainEvents">
                <div>
                    <button className="buttonOpen">открыть</button>
                </div>
                <div>
                    <input className="search" value="поиск" />
                </div>
                <div className="events">
                    <div className="leftBlock">
                        <img className="eventsImg" />
                        <h3>Никнейм</h3>
                    </div>
                    <div className="eventsInfo">
                        <h1>VS</h1>
                        <h5>110₽</h5>
                    </div>
                    <div className="accept">
                        <p>Победа:</p>
                        <img/>
                        <p>Поражение:</p>
                        <img/>
                    </div>
                    <div className="acceptButton">
                        <button>принять</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
