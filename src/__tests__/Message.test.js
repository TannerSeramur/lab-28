import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });
import Message from '../components/Message.js';

describe('running tests on assignment 1', () => {
  it('proof of life', () => {
    let component = shallow(< Message />);
    expect(component.find('h1').exists()).toBeTruthy();
  });
});