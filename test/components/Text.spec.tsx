import React from 'react';
import { render } from '@testing-library/react';

import Text from '../../src/components/Text';

describe('Component: Text', () => {
  test('should display the inputted text', () => {
    const { getByText } = render(<Text value="Hello" />);
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
