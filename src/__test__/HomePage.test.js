import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import HomePage from '../components/HomePage';
import store from '../redux/configureStore';

describe('HomePage tests', () => {
  test('should render', () => {
    const homePage = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(homePage).toMatchSnapshot();
  });
});
