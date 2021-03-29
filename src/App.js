import "./App.css";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
