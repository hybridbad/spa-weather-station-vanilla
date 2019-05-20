/* eslint-disable no-undef */
// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils';
import Weather from '../../src/weather';

describe('Weather', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Weather);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(
      '<div><span class="weather">20</span> <button>Turn up the temp</button></div>'
    );
  });

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('button should increment the count', () => {
    expect(wrapper.vm.temperature).toBe(20);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.temperature).toBe(21);
  });
});
