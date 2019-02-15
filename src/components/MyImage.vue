<template>
  <div :style="{height}" class="img-wrapper">
    <g-image :src="src" alt=""/>
  </div>
</template>

<script>
export default {
  name: 'MyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '100px'
    }
  }
}
</script>

<style scoped lang="scss">
.img-wrapper {
  position: relative;
  overflow-x: hidden;
  img {
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
