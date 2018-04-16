import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { configure, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import TweetSearch from '../frontend/components/TweetSearch/TweetSearch'
import TweetList from '../frontend/components/TweetList/TweetList'

describe('Frontend -->', () => {
  it('<TweetSearch /> renders <TweetList />', () => {
      const wrapper = shallow(<TweetSearch />)
      expect(wrapper.find('TweetList')).to.have.length(1)
  })

  it('<TweetSearch /> renders input field for search term', () => {
      const wrapper = shallow(<TweetSearch />)
      expect(wrapper.find('input')).to.have.length(1)
  })

  it('input element in <TweetSearch /> changes state', () => {
      const wrapper = shallow(<TweetSearch />)
      wrapper.find('input').simulate('change', { target: { value: 'test'}})
      expect(wrapper.state('value')).to.equal('test')
  })

  it('onSubmit on form in <TweetSearch /> calls search function', () => {
      const wrapper = shallow(<TweetSearch />)
      const component = wrapper.instance()
      sinon.spy(component, 'onSubmitSearch')
      component.onSubmitSearch({ target: { value: 'test'}, preventDefault: () => {}})
      expect(component.onSubmitSearch).to.have.property('calledOnce', true)
  })

  it('<TweetList /> can receive arrays as props and render correct number of items', () => {
      const wrapper = shallow(<TweetList tweets={['item', 'item1', 'item2', 'item4']}/>)
      expect(wrapper.find('li')).to.have.length(4)
  })
})