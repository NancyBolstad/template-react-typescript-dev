import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

const WelcomeStory = <Welcome showApp={linkTo('Button')} />;

storiesOf('Component/Button', module).add('Video with text', () => WelcomeStory);
