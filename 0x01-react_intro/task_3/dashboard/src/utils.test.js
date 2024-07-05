import { render, screen } from '@testing-library/react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils tests', () => {
  // Test for getFullYear and getFooterCopy can be added here...

  test('getLatestNotification returns the correct string', () => {
    render(<div dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />);
    
    // Use screen.getByText to get the element containing the text
    const element = screen.getByText('Urgent requirement - complete by EOD');

    // Assert that the element is in the document
    expect(element).toBeInTheDocument();
  });
});
