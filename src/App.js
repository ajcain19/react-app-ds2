import logo from "./logo.svg";
import "./App.css";
import { Button } from "dribbble-app";
import { Badge } from "dribbble-ds2-repo";
import { Card } from "dribbble-ds2-repo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Badge from Design System #2</h2>
        <Badge label="Badge Label" />
        <hr />
        <h2>Card from Design System #2</h2>
        <div
          style={{
            maxWidth: "500px",
          }}
        >
          <Card
            header="This is a Card"
            feature="I'm a Feature"
            img="https://www.qed42.com/sites/default/files/styles/featured_image/public/2022-11/Color%20in%20design%20system_0.png?itok=CUevO4U3"
            introduction="This card makes use of the card-divider element."
            url="This is a link"
          />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
