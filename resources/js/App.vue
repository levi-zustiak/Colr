<template>
  <router-view v-slot="{ Component }" class="router-view">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;500;600;700;800');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Dosis;
}

#app {
  font-family: Dosis, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  color: #2c3e50;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

a {
  color: #2c3e50;
  font-weight: 800;
  text-decoration: none;
}

.container {
  height: 100%;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}

.no-select {
  user-select: none;
}

.router-view {
  height: 100vh;
  width: 100vw;
}

</style>
