import React from 'react';
import { render } from '@testing-library/preact';

import Counter from '../Counter';

describe('Counter Component Test Unit', () => {
  it('should render correctly', () => {
    const props = { dummyKey: 'SOME_DUMMY_KEY' };
    const { container } = render(<Counter {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
