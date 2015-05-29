'use strict';

import React from 'react';
import d3 from 'd3';

class Barchart extends React.Component {

  displayName: 'Barchart'

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderBarChart();
  }

  renderBarChart() {
    let { width, height, fillColor, data } = this.props;

    let values = data.slice();

    let yScale = d3.scale.linear()
      .range([height, 0]);

    yScale.domain([0, Math.max.apply(null, values)]);

    let svg = React.findDOMNode(this);

    let chart = d3.select(svg)
      .attr('width', this.props.width)
      .attr('height', this.props.height + 1);

    let barWidth = width / values.length;

    let bar = chart.selectAll('g')
        .data(values)
      .enter().append('g')
        .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`);

    bar.append('rect')
      .attr('y', (d) => yScale(d))
      .attr('height', (d) => height - yScale(d))
      .attr('width', (d) => barWidth - 1)
      .attr('fill', fillColor);

  }

  render() {
    return (
      <svg />
    )
  }

}

Barchart.defaultProps = {
  width: 800,
  height: 200,
  xAxis: false,
  fillColor: '#d70206',
  data: [7,1,5,5,4,3,5,2,3,5,6]
}


export default Barchart;
