<template>
  <div class="button-container">
    <div class="back-button" @click="goBack">
      <h4 class="no-select">Back</h4>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.button-container {
  position: absolute;
  top: 50px;
  left: 50px;
  padding: 25px 100px 100px 25px;
}

.back-button {
  border: 3px solid black;
  background-color: white;
  border-radius: 8px;
  padding: 10px 20px;
  transition: .5s;
  color: black;
  cursor: pointer;
}

.back-button h4 {
  font-weight: 800;
  font-size: 18px;
}

.back-button:hover {
  transform: translateX(-15%);
}
</style>
