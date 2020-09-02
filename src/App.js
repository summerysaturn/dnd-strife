import React from 'react';
import './App.css';

import data from './blankChar.json';

class StatPanelGroup extends React.Component {
  render() {
    let temp = [];

    for (const stat in data.stats) {
      temp.push({
        name: stat,
        val: data.stats[stat],
        mod: Math.floor((data.stats[stat] - 10) / 2)
      })
    }

    console.log(temp);

    return (
      <div className="row row-cols-1 row-cols-md-6">
        {temp.map(e => (
          <StatPanel
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
        <div className="card">
          <div className="card-body text-center" id="stat-str">
            <h5>{this.props.name}</h5>
            <h2>{this.props.val}</h2>
            <h6>{this.props.mod}</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default function App() {
  return (
    <div className="app">

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
          <div className="d-flex justify-content-center">
            <div className="mb-5">
              <button className="btn btn-lg btn-primary" disabled>Create New Character</button>
              <p className="text-muted"><small>also coming soon!</small></p>
            </div>
          </div>

          <StatPanelGroup />

        </div>
      </main>

      <footer className="bg-dark pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <p className="text-muted"></p>
            </div>
            <div className="col-sm-4">
              <p className="text-muted text-center">cerys was here</p>
            </div>
            <div className="col-sm-4">
              <p className="text-muted"></p>
            </div>
          </div>
        </div>

      </footer>
    </div >
  )
}
