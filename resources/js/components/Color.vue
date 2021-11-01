<template>
  <div class="color" v-bind:style="{backgroundColor: color.hex.value, color: color.contrast.value}" @click="copyColor(this)">
    <h1>{{ color.hex.value }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Color',
  props: {
    color: Object,
  },
  methods: {
    copyColor({ color }) {
      const hex = color.hex.value
      navigator.clipboard.writeText(hex)
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
.color {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

.color:hover {
  flex-grow: 1.05;
}
</style>
