import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('Footer tests', () => {
  test('should render', () => {
    const header = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(header).toMatchSnapshot();
  });
});