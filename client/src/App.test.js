import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('playercard is rendering data', () => {
  const {getByTestId} = render(<PlayerCard />);

  getByTestId(playerName/i);
  getByTestId(countryName/i);
  getByTestId(searchNumber/i);
 
})
