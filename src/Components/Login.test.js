/**
 * Created by AndreaMerten on 3/14/18.
 */

import React, {Component} from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'

import {Login} from './Login'
import Input from './Input'

configure({ adapter: new Adapter() });
const props = {
  storeLogin : jest.fn(() => ({}))
}

describe('<Login/>', () => {
  const wrapper = shallow(<Login {...props}/>)

  it('renders a form element', () => {
    expect(wrapper.find(<form/>))
  })

  it('renders a snapshot', () => {
    const tree = renderer.create(<Login/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

