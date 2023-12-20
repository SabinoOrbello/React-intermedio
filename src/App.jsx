import logo from "./logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBarComponent from "./component/TopBarComponent";
import MainComponent from "./component/MainComponent";

function App() {
  return (
    <div>
      <header>
        <TopBarComponent />
      </header>
      <main>
        <MainComponent src={logo}></MainComponent>
      </main>
    </div>
  );
}

export default App;
