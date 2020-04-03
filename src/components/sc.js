import React from 'react';

function SC() {
  return (
    <div className="SC">
      <iframe
        id="hf-iframe"
        src="https://covid19.infermedica.com/en?header=false"
        style={{border: 0}}
        title="COVID-19 Symptom Checker"
      ></iframe>
    </div>
  );
}

export default SC;
