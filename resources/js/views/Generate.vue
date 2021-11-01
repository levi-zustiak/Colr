<template>
  <div id="generate" class="container" @keyup.space="getColors" @keydown.esc="closePopUp" tabindex="0">
    <BackButton />
    <Color v-for="(color, index) in colors"
      :key="index"
      :color="color"
      @clicked="showPopUp"
    />
    <div class="options">
      <div @click="getColors" class="generate-colors-button no-select">
        <h3>Generate</h3>
      </div>
      <Select
        @change="changeMode($event)"
        :options="modes"
        :selected="mode"
      />
      <Select
        @change="changeNumber($event)"
        :options="number"
        :selected="count"
      />
    </div>
    <PopUp
      :active="active"
      :msg="'Copied to clipboard'"
      @close="closePopUp"
    />
  </div>
</template>

<script>
import axios from 'axios'

import Color from '../components/Color.vue'
import BackButton from '../components/BackButton.vue'
import Select from '../components/Select.vue'
import PopUp from '../components/PopUp.vue'

export default {
  name: 'Generate',
  components: {
    Color,
    BackButton,
    Select,
    PopUp
  },
  data() {
    return {
      active: false,
      colors: [],
      modes: ['analogic', 'complement', 'analogic-complement', 'monochrome', 'monochrome-dark', 'monochrome-light', 'triad', 'quad'],
      number: [...Array(10).keys()].map(x=>++x).reverse(),
      count: 5,
      mode: 'analogic',
      time: null
    }
  },
  methods: {
    random() {
      return (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    },
    getColors() {
      const color = this.random()
      const apiCall = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${this.mode}&count=${this.count}`
      axios.get(apiCall)
        .then(res => {
          this.colors = res.data.colors
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    changeMode({ target }) {
      this.mode = target.value
    },
    changeNumber({ target }) {
      this.count = target.value
    },
    showPopUp() {
      this.active = true
      clearTimeout(this.time)
      this.time = setTimeout(() => {
        if(this.active) this.closePopUp()
      }, 2500)
    },
    closePopUp() {
      this.active = false
      clearTimeout(this.time)
    }
  },
  beforeMount() {
    this.getColors()
  },
  Mounted() {
    this.$cookies.set('name', 'levi')
  }
}
</script>

<style scoped>
#generate {
  display: flex;
}

.options {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10vh;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.generate-colors-button {
  height: 50px;
  width: 125px;
  border: 3px solid black;
  background-color: white;
  color: black;
  border-radius: 8px;
  transition: .5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
}

.generate-colors-button:hover {
  background-color: white;
  color: black
}
</style>
