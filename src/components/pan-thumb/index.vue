<template>
  <div :style="{zIndex, width, height}" class="pan-item">
    <img :src="image" class="pan-img">
  </div>
</template>

<script>
  export default {
    name: 'PanThumb',
    props: {
      image: {
        type: String,
        require: true
      },
      zIndex: {
        type: Number,
        default: 1
      },
      width: {
        type: String,
        default: '150px'
      },
      height: {
        type: String,
        default: '150px'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pan-item {
    border-radius: 50%;
    border: 5px solid #fff;
    background: #fff;
    .pan-img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      transform-origin: 95% 40%;
    }
    &:hover .pan-img {
      transform: rotate(-110deg);
    }
  }
</style>
