// eslint-disable-next-line no-undef
Vue.component('weather-component', {
  template:`
  <div class="main" id="weatherData">
        <h2 v-text="componentName" v-bind:class="{'online':isOnline}"></h2>

        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Temperature</th>
              <th scope="col">Pressure</th>
              <th scope="col">Humidity</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody v-for="result in results">
            <tr>
              <td>{{ parseFloat(result.temperature).toFixed(2) }} C</td>
              <td>
                {{ parseFloat(result.pressure).toFixed(2) }}
              </td>
              <td>
                {{ parseFloat(result.humidity).toFixed(2) }}
              </td>
              <td>
                {{ new Date(result.date*1000).toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  data () {
    return {
      results: [],
      isOnline: true,
      componentName: '',
      query: '',
      emailMessage: '',
      searchIndexes: [],
      selectedSearchIndexes: ['temperature', 'pressure']
    }
  },
  methods: {
    executeSearch: function(event) {
      alert(
        'Query: ' + this.query + '"Button:"' + event.target.innerText + '"'
      );
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get('https://79ff7a55.ngrok.io/api/data/10')
      .then(response => (this.results = response.data.data.reverse()));
  }
})