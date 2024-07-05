// src/utils.test.js

import { render } from '@testing-library/react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import '@testing-library/jest-dom/extend-expect';

describe('utils tests', () => {
  // Your other test cases for getFullYear and getFooterCopy here...

  test('getLatestNotification returns the correct string', () => {
    const { getByText } = render(<div dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />);
    expect(getByText((content, node) => {
      const hasText = (node) => node.textContent === 'Urgent requirement - complete by EOD';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        child => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    })).toBeInTheDocument();
  });
});
