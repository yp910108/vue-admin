<template>
  <div :style="{zIndex, width, height}" class="pan-item">
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot/>
      </div>
    </div>
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
    position: relative;
    display: inline-block;
    border-radius: 50%;
    .pan-info {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
      width: inherit;
      height: inherit;
      box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
      .pan-info-roles-container {
        padding: 20px;
        text-align: center;
      }
    }
    .pan-img {
      position: absolute;
      left: 0;
      top: 0;
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
