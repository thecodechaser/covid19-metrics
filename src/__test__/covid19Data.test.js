import covid19Data from '../redux/covid19Data/covid19Data';

const mockStore = {
  countriesReducer: [
    {
      ID: '778408da-aad3-4786-8ac4-1c08962a5838',
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Slug: 'afghanistan',
      NewConfirmed: 629,
      TotalConfirmed: 163555,
      NewDeaths: 3,
      TotalDeaths: 7417,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: '2022-02-02T10:01:04.344Z',
      Premium: {},
    },
    {
      ID: '04fd4906-cee6-4c73-a789-24d24b157314',
      Country: 'Albania',
      CountryCode: 'AL',
      Slug: 'albania',
      NewConfirmed: 0,
      TotalConfirmed: 258543,
      NewDeaths: 0,
      TotalDeaths: 3346,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: '2022-02-02T10:01:04.344Z',
      Premium: {},
    },
  ],
};

describe('Test', () => {
  test('Initial State', () => {
    expect(covid19Data([], {})).toEqual([]);
  });
});

describe('Mock covidData Reducer', () => {
  test('Test covidData Reducer With Mock Data', () => {
    const FETCH_DATA = 'covidMetrics/covid19Data/FETCH_DATA';
    const store = mockStore;
    const action = {
      type: FETCH_DATA,
      payload: {
        countriesReducer: [
          {
            ID: '778408da-aad3-4786-8ac4-1c08962a5838',
            Country: 'Afghanistan',
            CountryCode: 'AF',
            Slug: 'afghanistan',
            NewConfirmed: 629,
            TotalConfirmed: 163555,
            NewDeaths: 3,
            TotalDeaths: 7417,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: '2022-02-02T10:01:04.344Z',
            Premium: {},
          },
          {
            ID: '04fd4906-cee6-4c73-a789-24d24b157314',
            Country: 'Albania',
            CountryCode: 'AL',
            Slug: 'albania',
            NewConfirmed: 0,
            TotalConfirmed: 258543,
            NewDeaths: 0,
            TotalDeaths: 3346,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: '2022-02-02T10:01:04.344Z',
            Premium: {},
          },
        ],
      },
    };
    expect(covid19Data(store, action)).toEqual(action.payload);
  });
});
