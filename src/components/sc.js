import React from 'react';

function SC() {
  return (
    <div className="SC">
      <iframe
        id="hf-iframe"
        src="https://covid19.infermedica.com/en?header=false&guidelines_data=%7B%0A%20%20%22emergency_numbers%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22102%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22112%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22%28optional%29%20Example%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22covid_numbers%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22%2B91-11-23978046%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22number%22%3A%20%22%2B1075%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22Toll%20Free%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22websites%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22website%22%3A%20%22https%3A%2F%2Fwww.mohfw.gov.in%2F%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22Ministry%20of%20Health%20and%20Family%20Welfare%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22website%22%3A%20%22https%3A%2F%2Fwww.mohfw.gov.in%2Fpdf%2Fcoronvavirushelplinenumber.pdf%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22State%20Wise%20Helpline%20Number%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22free_text%22%3A%20%22Not%20sure%20what%20to%20do%3F%20Call%3A%20-%20%2B91-11-23978046%22%0A%7D%0A"
        style={{border: 0}}
        title="COVID-19 Symptom Checker"
      ></iframe>
    </div>
  );
}

export default SC;
