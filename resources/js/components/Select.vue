<template>
  <select :value="selected">
    <option v-for="(option,index) in options" :key="index">
      {{option}}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: Array,
    selected: [Number, String]
  },
}

</script>

<style scoped>
select {
  border: 3px solid black;
  background-color: white;
  border-radius: 8px;
  padding: 10px 15px;
  color: black;
  font-family: Dosis;
  font-weight: 800;
  font-size: 18px;
  transition: .5s;
}

select:hover {
  color: black;
  background-color: white;
}
</style>
