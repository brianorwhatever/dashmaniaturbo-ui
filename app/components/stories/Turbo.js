import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TurboLine from '../TurboLine';
import TurboBar from '../TurboBar';
import TurboPie from '../TurboPie';

storiesOf('TurboLine', module)
  .add('3 Series', () => (
    <TurboLine
      chartData={[
        {
          name: 'series1',
          values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
          strokeWidth: 3,
          strokeDashArray: "5,5",
        },
        {
          name: 'series2',
          values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
        },
        {
          name: 'series3',
          values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
        }
      ]}/>
  ))

storiesOf('TurboBar', module)
  .add('3 Series', () => (
    <TurboBar
      chartData={[
        {
          "name": "Series A",
          "values": [
            { "x": 1, "y":  91},
            { "x": 2, "y": 290},
            { "x": 3, "y": -25},
          ]
        },
        {
          "name": "Series B",
          "values": [
            { "x": 1, "y":  9},
            { "x": 2, "y": 49},
            { "x": 3, "y": -20},
          ]
        },
        {
          "name": "Series C",
          "values": [
            { "x": 1, "y":  14},
            { "x": 2, "y": 77},
            { "x": 3, "y": -70},
          ]
        }
      ]}/>
  ))

  storiesOf('TurboPie', module)
    .add('3 Series', () => (
      <TurboPie
        chartData={[{label: "Margarita", value: 20.0}, {label: "John", value: 55.0}, {label: "Tim", value: 25.0 }]}/>
    ))
