import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/stories/button');
  require('../app/components/stories/Turbo');
  // require as many stories as you need.
}

configure(loadStories, module);
