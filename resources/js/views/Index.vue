<template>
  <div class="menu">
    <Logo />
    <MenuOption v-for="(option,index) in options"
      :key="index"
      v-bind="option"
    />
  </div>
</template>

<script>
import axios from 'axios'

import MenuOption from '../components/MenuOption.vue'
import Logo from '../components/Logo.vue'

export default {
  name: 'Index',
  components: {
    MenuOption,
    Logo
  },
  data() {
    return {
      options: [
        { color: {}, label: "Generate", route: "/generate" },
        { color: {}, label: "Explore", route: "/explore" }
      ]
    }
  },
  methods: {
    random: function () {
      return (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    }
  },
  beforeMount() {
    const color = this.random()
    const apiCall = `https://www.thecolorapi.com/scheme?hex=${color}&mode=complement&count=2`
    axios.get(apiCall)
      .then(res => {
        this.options.map((option, i) => {
          option.color = res.data.colors[i];
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
  .menu {
    height: 100vh;
    width: 100vw;
    display: flex;
  }
</style>
