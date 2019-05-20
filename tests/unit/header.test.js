import { mount } from '@vue/test-utils';
import header from '../../components/header';

describe('Header component', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(header);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(
      '<div id=\"header\" class=\"header\"><h2 class=\"accent-color header\">WeatherData</h2> <h3>Is on</h3></div>'
    );
  });


});
