import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './blankChar.json';
import './index.css';

import {
  Button, Card, FormControl, InputGroup, Form
} from 'react-bootstrap';

class Wrapper extends React.Component {
  render() {
    return (
      <div className="app" >

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

                <p><span className="text-muted">Online D&D Character Sheet utility</span></p>
              </div>

              <div>

                <Button block variant="outline-secondary" size="lg" disabled>
                  Import Character
                </Button>{' '}
                <Button block variant="outline-secondary" size="lg" disabled>
                  Export Character
                </Button>{' '}

                <p className="text-muted">
                  <small>coming soon!</small>
                </p>

              </div>
            </div>
          </div>
        </header>

        <main className="bg-white">
          <div className="container">
            <h2 className="underDevelopment">
              This tool is under development!
            </h2>
            {this.props.children}
          </div>
        </main>

        <div style={{ height: "20vh" }}></div>
      </div>
    )
  }
}

class Heading extends React.Component {
  render() {
    return (
      <>
        <div class="hr">
          <hr data-content={this.props.text} class="hr-text" />
        </div>
        <div className="card-columns">
          {this.props.children}
        </div>
      </>
    )
  }
}

class CoreStatGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return (
      <Card>
        <Card.Body>
          {this.state.data.stats.abilities.map(e => (
            <CoreStat
              key={e.key}
              name={e.name}
              score={e.score}
              modifier={e.modifier}
            />
          ))}
        </Card.Body>
      </Card>
    )
  }
}

class CoreStat extends React.Component {
  render() {
    return (
      <>
        <Form.Group>
          <Form.Label htmlFor="inlineFormInput">
            {this.props.name}
          </Form.Label>
          <InputGroup>
            <FormControl type="number" value={this.props.score} />
            <InputGroup.Append>
              <InputGroup.Text>
                {this.props.modifier}
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </>
    )
  }
}

class HealthPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return (
      <Card>
        <Card.Body>

          <InputBox label="Health Points" append={"/ " + this.props.data.combatStats.maxhp} />

          <Form.Group>
            <Form.Label htmlFor="inlineFormInput">
              Temporary HP
            </Form.Label>
            <InputGroup>
              <FormControl type="number" />
            </InputGroup>
          </Form.Group>

        </Card.Body>
      </Card>
    )
  }
}

class SpeedPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return (
      <Card>
        <Card.Body>

          <InputBox label="Speed" append="Feet" />

        </Card.Body>
      </Card>
    )
  }
}

class InputBox extends React.Component {
  render() {
    return (
      <Form.Group>
        <Form.Label htmlFor="inlineFormInput">
          {this.props.label}
        </Form.Label>
        <InputGroup>
          <FormControl type="number" />
          <InputGroup.Append>
            <InputGroup.Text>
              {this.props.append}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return (

      <Wrapper>
        <Heading text="Stats" className="stats">

          <CoreStatGroup data={this.state.data} />

          <HealthPanel data={this.state.data} />

          <SpeedPanel data={this.state.data} />

        </Heading>
      </Wrapper>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
