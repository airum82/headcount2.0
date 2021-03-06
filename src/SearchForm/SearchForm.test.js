import React from 'react';
import { SearchForm } from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {

  const mockShowSearchResults = jest.fn();

  it('matches the snapshot of the SearchForm', () => {
    const wrapper = shallow( 
      <SearchForm 
        showSearchResults={ mockShowSearchResults }
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call showSearchResults on change', () => {
    const mockShowSearch = jest.fn();
    const mockEvent = { target : { value : 'input' }};
    const wrapper = shallow(
      <SearchForm 
        showSearchResults={ mockShowSearch }
      />);

    wrapper.find('input').simulate('change', mockEvent);

    expect(mockShowSearch).toHaveBeenCalled(); 
  });
});