import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {formatDistance} from 'date-fns';
import {
  formatDate,
  formatDateAbsolute,
  validateCTS,
} from '../utils/common-functions';

import Table from './table';
import Level from './level';
import MapExplorer from './mapexplorer';
import Minigraph from './minigraph';
import GlobalData from './global';

function Home(props) {
  const [states, setStates] = useState([]);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({});
  /* const [patients, setPatients] = useState([]);*/
  const [fetched, setFetched] = useState(false);
  const [graphOption, setGraphOption] = useState(1);
  const [lastUpdated, setLastUpdated] = useState('');
  const [timeseries, setTimeseries] = useState([]);
  const [timeseriesMode, setTimeseriesMode] = useState(true);
  const [timeseriesLogMode, setTimeseriesLogMode] = useState(false);
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
      setTimeseries(validateCTS(response.data.cases_time_series));
      setLastUpdated(response.data.statewise[0].lastupdatedtime);
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
        <GlobalData />
        <div className="neutable">
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

          {states.length > 1 && <Level data={states} />}
          <Minigraph timeseries={timeseries} animate={true} />

          <Table
            states={states}
            summary={false}
            stateDistrictWiseData={stateDistrictWiseData}
            onHighlightState={onHighlightState}
            onHighlightDistrict={onHighlightDistrict}
          />
        </div>
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
        <div className="neuchecker fadeInUp" style={{animationDelay: '0.5s'}}>
          <h1 style={{marginLeft: '20px'}}>COVID-19 Symptom Checker</h1>
          <iframe
            id="hf-iframe"
            src="https://covid19.infermedica.com/en?header=false&guidelines_data=%7B%0A%20%20%22emergency_numbers%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22102%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22Ambulance%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22112%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22National%20Emergency%20Number%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22covid_numbers%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22%2B91-11-23978046%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22%2B1075%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22Toll%20Free%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22websites%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22website%22%3A%20%22https%3A%2F%2Fwww.mohfw.gov.in%2F%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22Ministry%20of%20Health%20and%20Family%20Welfare%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22website%22%3A%20%22https%3A%2F%2Fwww.mohfw.gov.in%2Fpdf%2Fcoronvavirushelplinenumber.pdf%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22State%20Wise%20Helpline%20Number%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22free_text%22%3A%20%22Not%20sure%20what%20to%20do%3F%20Call%3A%20-%20%2B91-11-23978046%22%0A%7D"
            style={{border: 0, height: '100vh', width: '100%'}}
            title="COVID-19 Symptom Checker"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
