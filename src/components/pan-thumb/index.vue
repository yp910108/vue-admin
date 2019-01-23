<template>
  <div :style="{zIndex, width, height}" class="pan-item">
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot/>
      </div>
    </div>
    <img :src="image" class="pan-thumb">
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
    width: 200px;
    height: 200px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: default;
    .pan-info {
      .pan-info-roles-container {
        padding: 20px;
        text-align: center;
      }
    }
    .pan-thumb {
      position: absolute;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      background-size: 100%;
      transition: all .3s ease-in-out;
    }
  }
</style>
