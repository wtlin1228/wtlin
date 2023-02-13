import { render } from '@testing-library/react';

import { ButtonComponent } from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonComponent />);
    expect(baseElement).toBeTruthy();
  });
});
