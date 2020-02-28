import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Atoms|Components', module)
    .add('Button', () => (
    <Button
        buttonType='primary'
        onClick={action('click')}>
        Click me!
    </Button>
))