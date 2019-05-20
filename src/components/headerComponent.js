// eslint-disable-next-line no-undef
Vue.component('header-component', {
  template: `
  <div class="header" id="header">
    <h2 v-text="componentName" v-bind:class="[accentColor, header]"></h2>
    <h3 v-text="message"></h3>
  </div>
  `,

  data () {
    return {
        componentName: 'WeatherData',
        message: 'Is on',
        accentColor: 'accent-color',
        header: 'header'
    }
  }
})
