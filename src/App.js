import React from 'react';

import {
  Button, Card, FormControl, InputGroup, Form
} from 'react-bootstrap';

import './App.css';

class Wrapper extends React.Component {
  render() {
    return (
      <div className="app" >
        <header className="bg-light mb-5">
          <div className="container pt-5 pb-5">
            <div className="headerFlex">

              <div className="col-sm flex-grow-1">

                <img
                  src={process.env.PUBLIC_URL + "/title-graphic.png"}
                  className="title-graphic"
                  alt="5e-Strife"
                />

                <p><span className="text-muted">Online D&D Character Sheet utility</span></p>
              </div>

              <div className="col-sm-auto">

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

        <div style={{ height: "20vh" }}>
        </div>
      </div >
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

class StatPanelGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {

    let temp = [];

    for (const key in this.state.data.stats.abilities) {
      let element = this.state.data.stats.abilities[key];
      let tempMod = "";

      if (element.base >= 0) {
        tempMod = "+" + Math.floor((element.score - 10) / 2);
      } else {
        tempMod = Math.floor((element.score - 10) / 2);
      }

      temp.push({
        key: "card-" + element.abbreviation,
        name: element.abbreviation,
        val: element.score,
        mod: tempMod
      })
    }

    return (
      <Card>
        <Card.Body>
          {this.state.data.stats.abilities.map(e => (
            <StatPanel
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

class StatPanel extends React.Component {
  render() {
    return (
      <>
        <Form.Group>
          <Form.Label htmlFor="inlineFormInput">
            {this.props.name}
          </Form.Label>
          <InputGroup size="lg">
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

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return (

      <Wrapper>
        <Heading text="Stats" className="stats">
          <StatPanelGroup data={this.state.data} />
        </Heading>
      </Wrapper>
    )
  }
}
