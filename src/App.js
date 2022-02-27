import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <div class="footer">
        <small>
          <a
            href="https://github.com/judithrauland/react-weather-app"
            target="_blank"
          >
            Open-source code
          </a>
          {""} by Judith Rauland
        </small>
      </div>
    </div>
  );
}

export default App;
