<template>
  <div :class="computedClasses" class="material-input__component">
    <div :class="{'icon-class': icon}">
      <i v-if="icon" :class="`el-icon-${icon}`" class="el-input__icon material-input__icon"></i>
      <input
        v-model="currentValue"
        :type="type"
        :name="name"
        :placeholder="fillPlaceHolder"
        :readonly="readonly"
        :disabled="disabled"
        :autoComplete="autoComplete"
        :required="required"
        class="material-input"
        @focus="handleMdFocus"
        @blur="handleMdBlur"
        @input="handleModelInput"
      />
      <span class="material-input-bar"/>
      <label class="material-label">
        <slot/>
      </label>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MdInput',
    props: {
      icon: String,
      name: String,
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number],
      placeholder: String,
      readonly: Boolean,
      disabled: Boolean,
      min: String,
      max: String,
      step: String,
      minlength: Number,
      maxlength: Number,
      required: {
        type: Boolean,
        default: true
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      validateEvent: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        focus: false,
        currentValue: this.value,
        fillPlaceHolder: null
      }
    },
    methods: {
      handleMdFocus(event) {
        this.focus = true
        this.$emit('focus', event)
        if (this.placeholder) {
          this.fillPlaceHolder = this.placeholder
        }
      },
      handleMdBlur(event) {
        this.focus = false
        this.$emit('blur', event)
        this.fillPlaceHolder = null
        if (this.$parent.$options.componentName === 'ElFormItem') {
          if (this.validateEvent) {
            this.$parent.$emit('el.form.blur')
          }
        }
      },
      handleModelInput(event) {
        const value = event.target.value
        this.$emit('input', value)
        if (this.$parent.$options.componentName === 'ElFormItem') {
          if (this.validateEvent) {
            this.$parent.$emit('el.form.change')
          }
        }
        this.$emit('change', value)
      }
    },
    computed: {
      computedClasses() {
        return {
          'material--active': this.focus,
          'material--disabled': this.disabled,
          'material--raised': Boolean(this.focus || this.currentValue)
        }
      }
    },
    watch: {
      value(newVal) {
        this.currentValue = newVal
      }
    }
  }
</script>
<style lang="scss" scoped>
  // Fonts
  $font-size-smallest: 12px;
  $font-size-base: 16px;
  $font-size-small: 18px;
  $font-weight-normal: normal;
  $font-weight-bold: bold;
  $apixel: 1px;
  // Utils
  $spacer: 12px;
  $transition: 0.2s ease all;
  $index: 0px;
  $index-has-icon: 30px;
  // Theme:
  $color-white: white;
  $color-grey: #9E9E9E;
  $color-grey-light: #E0E0E0;
  $color-blue: #2196F3;
  $color-red: #F44336;
  $color-black: black;
  // Base clases:
  %base-bar-pseudo {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 0;
    transition: $transition;
  }

  // Mixins:
  @mixin slided-top {
    top: - ($font-size-base + $spacer);
    left: 0;
    font-size: $font-size-base;
    font-weight: $font-weight-bold;
  }

  // Component
  .material-input__component {
    position: relative;
    margin-top: 36px;
    background: $color-white;
    * {
      box-sizing: border-box;
    }
    .material-input {
      display: block;
      outline: none;
      border: none;
      border-bottom: 1px solid $color-grey-light;
      padding: $spacer $spacer $spacer - $apixel * 10 $spacer / 2;
      width: 100%;
      line-height: 1;
      text-indent: $index;
      font-size: $font-size-base;
      background: none;
      color: $color-black;
    }
    .material-label {
      position: absolute;
      left: $index;
      top: 0;
      font-weight: $font-weight-normal;
      font-size: $font-size-small;
      color: $color-grey;
      transition: $transition;
      pointer-events: none;
    }
    .material-input-bar {
      position: relative;
      display: block;
      width: 100%;
      &:before,
      &:after {
        @extend %base-bar-pseudo;
        background: $color-blue;
      }
      &:before {
        left: 50%;
      }
      &:after {
        right: 50%;
      }
    }
    .icon-class {
      .material-input__icon {
        position: absolute;
        left: 0;
        top: $spacer;
        width: $index-has-icon;
        height: $font-size-base;
        line-height: $font-size-base;
        font-weight: $font-weight-normal;
        font-size: $font-size-base;
        color: $color-blue;
        pointer-events: none;
      }
      .material-label {
        left: $index-has-icon;
      }
      .material-input {
        text-indent: $index-has-icon;
      }
    }
    // Disabled state:
    &.material--disabled {
      .material-input {
        border-bottom-style: dashed;
      }
    }
    // Raised state:
    &.material--raised {
      .material-label {
        @include slided-top();
      }
    }
    // Active state:
    &.material--active {
      .material-input-bar {
        &:before,
        &:after {
          width: 50%;
        }
      }
      .material-label {
        color: $color-blue;
      }
    }
  }
</style>
