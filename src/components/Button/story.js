import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import Button from './'

storiesOf('shared/Button', module)
  .add('default', () => (
    <Button onPress={action('button pressed')}><Text>Button</Text></Button>
  ))
  .add('full button', () => (
    <Button full onPress={action('button pressed')}><Text>Button</Text></Button>
  ))