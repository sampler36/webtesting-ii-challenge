import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without crashing', () => {
    render(<App/ >) //this would fail if component doesnt render
  })
})
