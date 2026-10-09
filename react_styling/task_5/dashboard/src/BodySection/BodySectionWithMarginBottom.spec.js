import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  test('contains a div with the class bodySectionWithMargin', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test">
        <p>test children</p>
      </BodySectionWithMarginBottom>,
    );
    expect(container.querySelector('div.bodySectionWithMargin')).toBeInTheDocument();
  });

  test('renders the BodySection component', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test">
        <p>test children</p>
      </BodySectionWithMarginBottom>,
    );
    const wrapper = container.querySelector('div.bodySectionWithMargin');
    expect(wrapper.querySelector('div.bodySection')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /test/i })).toBeInTheDocument();
    expect(screen.getByText('test children')).toBeInTheDocument();
  });
});
