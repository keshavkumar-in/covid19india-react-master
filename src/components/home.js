import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {formatDistance} from 'date-fns';
import {formatDate, formatDateAbsolute} from '../utils/common-functions';
import Table from './table';
import Level from './level';
import MapExplorer from './mapexplorer';
import Minigraph from './minigraph';

function Home(props) {
  const [states, setStates] = useState([]);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({});
  const [fetched, setFetched] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [timeseries, setTimeseries] = useState([]);
  const [deltas, setDeltas] = useState([]);
  const [regionHighlighted, setRegionHighlighted] = useState(undefined);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
      const [response, stateDistrictWiseResponse] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
      ]);
      setStates(response.data.statewise);
      setTimeseries(response.data.cases_time_series);
      setLastUpdated(response.data.statewise[0].lastupdatedtime);
      setDeltas(response.data.key_values[0]);
      setStateDistrictWiseData(stateDistrictWiseResponse.data);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onHighlightState = (state, index) => {
    if (!state && !index) setRegionHighlighted(null);
    else setRegionHighlighted({state, index});
  };
  const onHighlightDistrict = (district, state, index) => {
    if (!state && !index && !district) setRegionHighlighted(null);
    else setRegionHighlighted({district, state, index});
  };

  return (
    <div className="Home">
      <div className="home-left">
        <div className="header fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="header-mid">
            <div className="titles">
              <h1>Global COVID-19 Tracker</h1>
              <h6 style={{fontWeight: 600}}>A Crowdsourced Initiative</h6>
            </div>
          </div>
        </div>
        <div className="global-stats">
          <div className="stats">
            <h5>Confirmed</h5>
            <div className="stats-bottom">
              <h2>1,8093850</h2>
              <h6>{}</h6>
            </div>
          </div>

          <div className="stats is-blue">
            <h5>Active</h5>
            <div className="stats-bottom">
              <h2>1,8093850</h2>
              <h6>{}</h6>
            </div>
          </div>

          <div className="stats is-green">
            <h5>Recovered</h5>
            <div className="stats-bottom">
              <h2>1,8093850</h2>
              <h6>{}</h6>
            </div>
          </div>

          <div className="stats is-gray">
            <h5>Deceased</h5>
            <div className="stats-bottom">
              <h2>1,8093850</h2>
              <h6>{}</h6>
            </div>
          </div>
        </div>

        <div className="header fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="header-mid">
            <div className="titles">
              <h1>India COVID-19 Tracker</h1>
              <h6 style={{fontWeight: 600}}>A Crowdsourced Initiative</h6>
            </div>
            <div className="last-update">
              <h6>Last Updated</h6>
              <h6 style={{color: '#28a745', fontWeight: 600}}>
                {isNaN(Date.parse(formatDate(lastUpdated)))
                  ? ''
                  : formatDistance(
                      new Date(formatDate(lastUpdated)),
                      new Date()
                    ) + ' Ago'}
              </h6>
              <h6 style={{color: '#28a745', fontWeight: 600}}>
                {isNaN(Date.parse(formatDate(lastUpdated)))
                  ? ''
                  : formatDateAbsolute(lastUpdated)}
              </h6>
            </div>
          </div>
        </div>

        <Level data={states} deltas={deltas} />
        <Minigraph timeseries={timeseries} animate={true} />

        <Table
          states={states}
          summary={false}
          stateDistrictWiseData={stateDistrictWiseData}
          onHighlightState={onHighlightState}
          onHighlightDistrict={onHighlightDistrict}
        />
      </div>

      <div className="home-right">
        {fetched && (
          <React.Fragment>
            <MapExplorer
              states={states}
              stateDistrictWiseData={stateDistrictWiseData}
              regionHighlighted={regionHighlighted}
            />
          </React.Fragment>
        )}
        <iframe
          id="hf-iframe"
          src="https://covid19.infermedica.com/en?header=false"
          height="100%"
          style={{marginTop: '30px', border: 0}}
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
