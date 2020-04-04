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
        <div className="neuglobal">
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
              <h6>Confirmed</h6>
              <div className="stats-bottom">
                <h3>{this.state.global.cases}</h3>
              </div>
            </div>

            <div className="stats is-blue">
              <h6>Active</h6>
              <div className="stats-bottom">
                <h3>{this.state.global.active}</h3>
              </div>
            </div>

            <div className="stats is-green">
              <h6>Recovered</h6>
              <div className="stats-bottom">
                <h3>{this.state.global.recovered}</h3>
              </div>
            </div>

            <div className="stats is-gray">
              <h6>Deceased</h6>
              <div className="stats-bottom">
                <h3>{this.state.global.deaths}</h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
