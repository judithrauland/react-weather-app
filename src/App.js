import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <div className="footer">
        <small>
          <a
            href="https://github.com/judithrauland/react-weather-app"
            target="_blank"
            rel="noreferrer"
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
