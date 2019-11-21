import { configure, addDecorator } from '@storybook/react';
import '../src/i18n';
import React from 'react';
import { SuspenseWrapper } from '../src/Components/UI/utils/SuspenseWrapper'

addDecorator(story => <SuspenseWrapper>{story()}</SuspenseWrapper>);

configure(require.context('../src', true, /\.stories\.js$/), module);

