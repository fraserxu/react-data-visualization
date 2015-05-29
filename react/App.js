'use strict';

import React from 'react';
import ChartistGraph from 'react-chartist';

import Barchart from './Barchart';

class App extends React.Component {

  displayName: 'App'

  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  render() {
    let data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5'],
      series: [
        [1, 2, 4, 8, 6]
      ]
    };

    let options = {
      high: 10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    let type = 'Bar'

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
        <Barchart data={data.series[0]} />
      </div>
    )
  }

}

React.render(<App />, document.body);
