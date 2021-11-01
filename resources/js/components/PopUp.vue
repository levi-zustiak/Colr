<template>
  <div :class="['pop-up', active ? 'show-pop-up' : '']">
    <h3 class="no-select">{{msg}}</h3>
    <div class="close-pop-up" @click="closePopUp">
      <svg id="x-icon" data-name="x icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1025 1025"><defs></defs><path class="cls-1" d="M702.77,512,997.41,217.36a90.78,90.78,0,0,0,0-128.38L935,26.59a90.78,90.78,0,0,0-128.38,0L512,321.23,217.36,26.59A90.78,90.78,0,0,0,89,26.59L26.59,89a90.78,90.78,0,0,0,0,128.38L321.23,512,26.59,806.64a90.78,90.78,0,0,0,0,128.38L89,997.41a90.78,90.78,0,0,0,128.38,0L512,702.77,806.64,997.41a90.78,90.78,0,0,0,128.38,0L997.41,935a90.78,90.78,0,0,0,0-128.38Z" transform="translate(0.5 0.5)"/></svg>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    msg: String,
    active: Boolean,
  },
  methods: {
    closePopUp() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.pop-up {
  padding: 10px;
  border: 3px solid black;
  border-radius: 8px;
  position: absolute;
  background-color: white;
  color: black;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  transition: .5s cubic-bezier(.82,0,.17,1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  visibility: hidden;
}

.show-pop-up {
  visibility: visible;
  transform: translate(-50%, 75px);
}

.close-pop-up {
  height: 25px;
  width: 25px;
  right: 5px;
  top: 5px;
  border-radius: 4px;
  border: 2.5px solid black;
  transition: .3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-pop-up:hover {
  background-color: black;
}

#x-icon {
  height: 12px;
  transition-delay: .2s;
  transition: .4s;
}

.close-pop-up:hover #x-icon {
  fill: white;
}

</style>
