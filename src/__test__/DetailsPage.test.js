import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DetailsPage from '../components/DetailsPage';

describe('DetailsPage tests', () => {
  test('should render', () => {
    const detailsPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailsPage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(detailsPage).toMatchSnapshot();
  });
});