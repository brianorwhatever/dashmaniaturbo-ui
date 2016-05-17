import React from 'react';
import ChartJS from 'react-chartjs';
import rd3 from 'rd3';

const LineChart = rd3.LineChart

export default class TurboLine extends React.Component {
  render() {
    const { chartData, chartOptions } = this.props;

    return (
      <LineChart
        legend={true}
        data={chartData}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Line Chart"
        yAxisLabel="Altitude"
        xAxisLabel="Elapsed Time (sec)"
        domain={{x: [,6], y: [-10,]}}
        gridHorizontal={true}
      />
    );
  }
}

TurboLine.propTypes = {
  chartData: React.PropTypes.array.isRequired,
  chartOptions: React.PropTypes.object.isRequired
}
