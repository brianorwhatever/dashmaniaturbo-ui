import React from 'react';
import rd3 from 'rd3';

const PieChart = rd3.PieChart

export default class TurboPie extends React.Component {
  render() {
    const { chartData } = this.props;

    return (
      <PieChart
        data={chartData}
        width={450}
        height={400}
        radius={110}
        innerRadius={20}
        sectorBorderColor="white"
        title="Pie Chart"
      />
    );
  }
}

TurboPie.propTypes = {
  chartData: React.PropTypes.array.isRequired
}
