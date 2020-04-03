import React from 'react';

import axios from 'axios';

export default class GlobalData extends React.Component {
  state = {
    global: [],
  };

  componentDidMount() {
    axios.get(`https://corona.lmao.ninja/all`).then((res) => {
      const global = res.data;
      this.setState({global});
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="header-mid">
            <div className="titles">
              <h1>Global COVID-19 Tracker</h1>
              <h6 style={{fontWeight: 600}}>
                Total Affected Countries:{' '}
                <span style={{color: 'red'}}>
                  {this.state.global.affectedCountries}
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="global-stats">
          <div className="stats">
            <h5>Confirmed</h5>
            <div className="stats-bottom">
              <h2>{this.state.global.cases}</h2>
            </div>
          </div>

          <div className="stats is-blue">
            <h5>Active</h5>
            <div className="stats-bottom">
              <h2>{this.state.global.active}</h2>
            </div>
          </div>

          <div className="stats is-green">
            <h5>Recovered</h5>
            <div className="stats-bottom">
              <h2>{this.state.global.recovered}</h2>
            </div>
          </div>

          <div className="stats is-gray">
            <h5>Deceased</h5>
            <div className="stats-bottom">
              <h2>{this.state.global.deaths}</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
