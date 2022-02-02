import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Countries from '../components/homePageComponents/Countries';

describe('Countries tests', () => {
  test('should render', () => {
    const data = {
      country: 'India',
      TotalConfirmed: 1000,
    };
    const countries = render(
      <BrowserRouter>
        <Countries data={data} />
      </BrowserRouter>,
    );

    expect(countries).toMatchSnapshot();
  });
});
