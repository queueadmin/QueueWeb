import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Plot from 'react-plotly.js';

class Test extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            y: [0,0,0,0,0,0,0,20,28,31,34,44,58,57,44,41,53,66,65,0,0,0,0],
            type: 'bar'
          }
        ]}
        layout={ {width: "10vw", height: "80vh", title: 'Shediac Regional Medical Centre'} }
      />
    );
  }
}

export default Test;
