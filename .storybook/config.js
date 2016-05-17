import { configure } from '@kadira/storybook';

function loadStories() {
  require('../components/stories/button');
  require('../components/stories/LineChart');
  // require as many stories as you need.
}

configure(loadStories, module);
