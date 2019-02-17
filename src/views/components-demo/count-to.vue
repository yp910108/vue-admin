<template>
  <div class="components-container">
    <p class="warn-content">
      <a href="https://github.com/PanJiaChen/vue-countTo" target="_blank">countTo-component</a>
    </p>
    <count-to
      ref="example"
      :start-val="_startVal"
      :end-val="_endVal"
      :duration="_duration"
      :decimals="_decimals"
      :separator="_separator"
      :prefix="_prefix"
      :suffix="_suffix"
      :autoplay="false"
      class="example"
    />
    <div style="margin-left: 25%; margin-top: 40px;">
      <label class="label">
        startVal: <input v-model.number="setStartVal" type="number"/>
      </label>
      <label class="label">
        endVal: <input v-model.number="setEndVal" type="number"/>
      </label>
      <label class="label">
        duration: <input v-model.number="setDuration" type="number"/>
      </label>
      <div class="startBtn example-btn" @click="start">开始</div>
      <div class="pause-resume-btn example-btn" @click="pauseResume">暂停/恢复</div>
      <br>
      <label class="label">
        decimals: <input v-model.number="setDecimals" type="number"/>
      </label>
      <label class="label">
        separator: <input v-model="setSeparator"/>
      </label>
      <label class="label">
        prefix: <input v-model="setPrefix"/>
      </label>
      <label class="label">
        suffix: <input v-model="setSuffix"/>
      </label>
    </div>
    <code>&lt;count-to :start-val=&#x27;{{_startVal}}&#x27; :end-val=&#x27;{{_endVal}}&#x27; :duration=&#x27;{{_duration}}&#x27;
      :decimals=&#x27;{{_decimals}}&#x27; :separator=&#x27;{{_separator}}&#x27; :prefix=&#x27;{{_prefix}}&#x27; :suffix=&#x27;{{_suffix}}&#x27;
      :autoplay=false&gt;</code>
  </div>
</template>

<script>
  import CountTo from 'vue-count-to'

  export default {
    name: 'CountToDemo',
    components: {
      CountTo
    },
    data() {
      return {
        setStartVal: 0,
        setEndVal: 2017,
        setDuration: 4000,
        setDecimals: 0,
        setSeparator: ',',
        setPrefix: '¥ ',
        setSuffix: ' rmb'
      }
    },
    methods: {
      start() {
        this.$refs.example.start()
      },
      pauseResume() {
        this.$refs.example.pauseResume()
      }
    },
    computed: {
      _startVal() {
        if (this.setStartVal) {
          return this.setStartVal
        } else {
          return 0
        }
      },
      _endVal() {
        if (this.setEndVal) {
          return this.setEndVal
        } else {
          return 0
        }
      },
      _duration() {
        if (this.setDuration) {
          return this.setDuration
        } else {
          return 100
        }
      },
      _decimals() {
        if (this.setDecimals) {
          if (this.setDecimals < 0 || this.setDecimals > 20) {
            alert('digits argument must be between 0 and 20')
            return 0
          }
          return this.setDecimals
        } else {
          return 0
        }
      },
      _separator() {
        return this.setSeparator
      },
      _suffix() {
        return this.setSuffix
      },
      _prefix() {
        return this.setPrefix
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: block;
    margin: 10px 0;
    text-align: center;
    font-weight: 500;
    font-size: 80px;
    color: #F6416C;
  }

  .label {
    display: inline-block;
    margin: 15px 30px 15px 0;
    font-size: 16px;
    color: #2f4f4f;
  }

  input {
    position: relative;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    padding: 4px 7px;
    width: 70px;
    height: 28px;
    line-height: 1.5;
    font-size: 12px;
    color: rgba(0, 0, 0, .65);
    background-color: #fff;
    transition: all .3s;
    cursor: text;
  }

  .example-btn {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    padding: 4px 15px;
    line-height: 1.5;
    font-weight: 500;
    font-size: 20px;
    background: #fff;
    color: rgba(0, 0, 0, .65);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    cursor: pointer;
    &:hover {
      border-color: #4AB7BD;
      background: #fff;
      color: #4AB7BD;
    }
  }

  .startBtn {
    margin-left: 20px;
    font-size: 20px;
    background: #fff;
    color: #30B08F;
    &:hover {
      border-color: #30B08F;
      background: #30B08F;
      color: #fff;
    }
  }

  .pause-resume-btn {
    font-size: 20px;
    background: #fff;
    color: #E65D6E;
    &:hover {
      border-color: #E65D6E;
      background: #E65D6E;
      color: #fff;
    }
  }

</style>
