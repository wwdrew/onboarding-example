import React from 'react';

import { AppStack } from '../../../navigation/app.stack';
import { render } from '../../../../jest/test-utils';

describe('Welcome Screen', () => {
  it('should display welcome text', () => {
    const { getByText } = render(<AppStack />);

    expect(getByText(/drew's awesome app/i)).toHaveTextContent(
      "Drew's Awesome App",
    );
  });
});
