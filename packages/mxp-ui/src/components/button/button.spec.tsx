import { render } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  const template = render(<Button text="123" onClick={console.log} />);
  it('should render successfully', () => {
    const { baseElement } = template;
    expect(baseElement).toBeTruthy();
  });

  it('should render with correct text', () => {
    const { findByText } = template;

    expect(findByText('123')).toBeTruthy();
  });
});
