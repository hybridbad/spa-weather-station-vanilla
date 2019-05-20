// eslint-disable-next-line no-undef
Vue.component('menu-component', {
  template: `
  <div class="aside aside-1" id="menu">
    <h2 v-text="componentName" v-bind:class="{'menu-color': true}"></h2>
    <p>{{ list }}</p>
    <button type="button" v-on:click="retrieveWeatherData">
      Retrieve data
    </button>
  </div>
  `,

  data() {
    return{
      componentName: 'Menu',
      list: ['Option 1', 'Option 2']
    }
  },

  methods: {
        retrieveWeatherData: function() {
          alert('Weather data retrieved');
        }
  }
})
