import React from 'react';
import './App.css';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body text-center">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class StatPanelGroup extends React.Component {
  render() {

    let temp = [];

    for (const key in this.props.charData.stats.abilities) {
      let element = this.props.charData.stats.abilities[key];
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
      <div className="row row-cols-1 row-cols-md-6">
        {temp.map(e => (
          <StatPanel
            key={e.key}
            name={e.name}
            val={e.val}
            mod={e.mod}
          />
        ))}
      </div>
    )
  }
}

class StatPanel extends React.Component {
  render() {
    return (
      <div className="col mb-2">
        <Card>
          <h5>{this.props.name}</h5>
          <h2>{this.props.val}</h2>
          <h6>{this.props.mod}</h6>
        </Card>
      </div>
    )
  }
}


class Heading extends React.Component {
  render() {
    return (
      <div class="hr">
        <hr data-content={this.props.text} class="hr-text" />
      </div>
    )
  }
}


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { charData: this.props.charData };
    this.increment = this.increment.bind(this);
  }

  increment(data) {
    for (const key in data.stats.abilities) {
      const element = data.stats.abilities[key];
      element.score++;
    }
    return data
  }

  render() {
    return (
      <div className="app" >

        <header className="bg-light mb-5">
          <div className="container pt-5 pb-5">
            <div className="row">

              <div className="col-sm flex-grow-1">

                <h1 className="display-3">Strife</h1>
                <p><span className="text-muted">Online D&D Character Sheet utility</span></p>
              </div>

              <div className="col-sm-auto">
                <button className="btn btn-lg btn-dark m-1 btn-block" disabled>Import Character</button>
                <button className="btn btn-lg btn-dark m-1 btn-block" disabled>Export Character</button>
                <p className="text-muted"><small>coming soon!</small></p>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-white">
          <div className="container" id="content">

            <Heading text="Stats" />

            <div className="d-flex justify-content-center mb-4">
              <button className="btn btn-lg btn-primary"
                onClick={() => this.setState({ charData: this.increment(this.state.charData) })}
              >Increment Stats</button>
            </div>

            <StatPanelGroup charData={this.state.charData} />

          </div>
        </main>

        <div style={{ height: "20vh" }}>
        </div>
      </div >
    )
  }
}
