import React from 'react';
import rd3 from 'rd3';

const BarChart = rd3.BarChart

export default class TurboBar extends React.Component {
  render() {
    const { chartData } = this.props;

    return (
      <BarChart
        data={chartData}
        width={500}
        height={300}
        title="Bar Chart"
        xAxisLabel="Value"
        yAxisLabel="Label"
      />
    );
  }
}

TurboBar.propTypes = {
  chartData: React.PropTypes.array.isRequired
}
