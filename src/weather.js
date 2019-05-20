export default {
  template: `
    <div>
      <span class="weather">{{ temperature }}</span>
      <button @click="increment">Turn up the temp</button>
    </div>
  `,

  data () {
    return {
      temperature: 20
    }
  },

  methods: {
    increment () {
      this.temperature++
    }
  }
}