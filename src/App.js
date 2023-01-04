import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          {" "}
          This project was coded by Rebecca Shuping and is{" "}
          <a href="https://www.github.com/rsm917/dictionary-project">
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
