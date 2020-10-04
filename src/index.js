import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultData from "./blankChar.json";
import "./index.css";

import { Card, Button, FormControl, InputGroup, Form } from "react-bootstrap";

const Data = React.createContext(defaultData);

class Wrapper extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="bg-light mb-5">
          <div className="container pt-5 pb-5">
            <div className="headerFlex">
              <div className="flex-grow-1">
                <a href="https://summerysaturn.github.io/">
                  <img
                    src={process.env.PUBLIC_URL + "/title-graphic.png"}
                    className="title-graphic"
                    alt="5e-Strife"
                  />
                </a>

                <p>
                  <span className="text-muted">
                    Online D&D Character Sheet utility
                  </span>
                </p>
              </div>

              <div>
                <Button block variant="outline-secondary" size="lg" disabled>
                  Import Character
                </Button>{" "}
                <Button block variant="outline-secondary" size="lg" disabled>
                  Export Character
                </Button>{" "}
                <p className="text-muted">
                  <small>coming soon!</small>
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-white">
          <div className="container">
            <div className="text-center">
              <h5 className="underDevelopment">
                This tool is under development!
              </h5>
              <a href="https://github.com/summerysaturn/5e-strife">
                Link to Repo
              </a>
            </div>

            {this.props.children}
          </div>
        </main>

        <div style={{ height: "20vh" }}></div>
      </div>
    );
  }
}

class Heading extends React.Component {
  render() {
    return (
      <div className="hr">
        <hr data-content={this.props.text} className="hr-text" />
      </div>
    );
  }
}

class InputBox extends React.Component {
  render() {
    return (
      <Form.Group>
        <Form.Label htmlFor="inlineFormInput">{this.props.label}</Form.Label>
        <InputGroup>
          <FormControl type="number" />
          <InputGroup.Append>
            <InputGroup.Text>{this.props.append}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    );
  }
}

class Abilities extends React.Component {
  static contextType = Data;

  render() {
    return (
      <Card>
        {this.context.stats.abilities.map((e,i) => (
          <AbilityCard
            element={e}
            target={JSON.stringify(stats.abilities[i])}
          />
        ))}
      </Card>
    );
  }
}

class AbilityCard extends React.Component {
  constructor(props) {
    super(props);
  }

  updateValue() {}

  render() {
    return (
      <Card.Body>
        {this.props.element.name}
        <Button onClick={this.updateValue}>clicke</Button>
      </Card.Body>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading text="Stats" className="stats" />
        <Abilities />
      </Wrapper>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
