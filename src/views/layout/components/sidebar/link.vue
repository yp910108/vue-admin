<template>
  <!-- eslint-disable vue/require-component-is-->
  <component
    v-bind="linkProps"
  >
    <slot/>
  </component>
</template>

<script>
  import {isExternal} from '@/utils'

  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    computed: {
      linkProps() {
        let {to} = this
        if (isExternal(to)) {
          return {
            is: 'a',
            href: to,
            target: '_blank',
            rel: 'noopener'
          }
        }
        return {
          is: 'router-link',
          to
        }
      }
    }
  }
</script>
