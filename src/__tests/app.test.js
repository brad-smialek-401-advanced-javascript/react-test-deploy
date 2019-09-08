import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Counter from '../components/counter/counter.js';
import App from '../components/app.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('< Counter /> ' , () => {

  it('is alive at start', () => {
    let components = shallow(<Counter />);
    expect(components.find('div').exists()).toBeTruthy();
  });

  it('changes state on a click', () => {
    let components = mount(<Counter />);
    let buttonDown = components.find('#clickdown');
    let buttonUp = components.find('#clickup');

    buttonDown.simulate('click')
    expect(components.state('polarity')).toBe('negative');
    buttonUp.simulate('click');
    expect(components.state('polarity')).toBe('neutral');
    buttonUp.simulate('click');
    expect(components.state('polarity')).toBe('positive');
  });

  it('renders correctly', () => {
    const thing = renderer.create(<Counter/>).toJSON();
    expect(thing).toMatchSnapshot();
  })
});