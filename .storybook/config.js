import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/button');
  require('../src/components/stories/DashmaniaLineChart');
  // require as many stories as you need.
}

configure(loadStories, module);
