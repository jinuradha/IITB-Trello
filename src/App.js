import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
