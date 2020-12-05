import logo from "../../logo.svg";
import "./index.css";

function MainPage() {
  return (
    <div className="mainPage-background">
      <div className="mainPage-menu-block">
        <div className="mainPage-menu-block-header">
          <div className="mainPage-menu-block-header-balance_block">
            <h3>Общий баланс</h3>
            <h1>500₽</h1>
            <button className="">Demo/основной</button>
          </div>
          <div className="mainPage-menu-block-header-profile_block">
            <img className="" src="" alt="" />
            <h3>Никнейм</h3>
          </div>
          <div className="mainPage-menu-block-header-bets_section">
            <button className="">текущие ставки</button>
          </div>
        </div>
      </div>
      <div className="mainPage-menu-block-menu">
        <div className="mainPage-menu-block-menu-content">
          <div className="mainPage-menu-block-menu-content-image" />
          <p>
            <a href="">история пари</a>
          </p>
        </div>
        <div className="mainPage-menu-block-menu-content">
          <div className="mainPage-menu-block-menu-content-image" />
          <p>
            <a href="">снять/пополнить</a>
          </p>
        </div>
        <div className="mainPage-menu-block-menu-content">
          <div className="mainPage-menu-block-menu-content-image" />
          <p>
            <a href="">настройки</a>
          </p>
        </div>
        <div className="mainPage-menu-block-menu-content">
          <div className="mainPage-menu-block-menu-content-image" />
          <p>
            <a href="">создать пари</a>
          </p>
        </div>
      </div>
      <div className="mainPage-main_events">
        <div className="mainPage-main_events-button">
          <button>открыть</button>
        </div>
        <div className="mainPage-main_events-search_input">
          <input value="поиск" />
        </div>
        <div className="mainPage-main_events-event_list">
          <div className="mainPage-main_events-event_list-event">
            <div className="mainPage-main_events-event_list-event-left_block">
              <img className="mainPage-main_events-event_list-event-left_block-img" />
              <h3>Никнейм</h3>
            </div>
            <div className="mainPage-main_events-event_list-event-info">
              <h1>VS</h1>
              <h5>110₽</h5>
            </div>
            <div className="mainPage-main_events-event_list-event-right_block">
              <div className="mainPage-main_events-event_list-event-right_block-accept">
                <p>Победа:</p>
                <img />
                <p>Поражение:</p>
                <img />
                <button>принять</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
