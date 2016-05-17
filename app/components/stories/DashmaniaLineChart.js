import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DashmaniaLineChart from '../DashmaniaLineChart';

storiesOf('DashmaniaLineChart', module)
  .add('yeah', () => (
    <DashmaniaLineChart chartOptions={{}} chartData={[]}/>
  ))
