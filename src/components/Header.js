import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <nav>
        <div>
          <img src={require("../icons/apps.png")} alt="apps" />
        </div>
        <div>
          <img src={require("../icons/home.png")} alt="apps" />
        </div>
        <div>
          <img src={require("../icons/zoom.png")} alt="apps" />
        </div>
        <div className="Logo">
          <label>Trello</label>
        </div>
        <div>
          <img src={require("../icons/info.png")} alt="apps" />
        </div>
        <div>
          <img src={require("../icons/alarm_bell.png")} alt="apps" />
        </div>
        <div>
          <img src={require("../icons/user.png")} alt="apps" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
