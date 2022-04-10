<template>
  <button
    :class="[
      'rounded px-4 min-w-btn',
      outlined
        ? white ? 'border border-white bg-transparent text-white' : 'border border-blue-500 bg-transparent text-blue-500'
        : 'bg-blue-500 text-white'
    ]"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    value: { type: String, default: '' },
    white: { type: String, default: '' },
    outlined: { type: Boolean, default: false },
  }
}
</script>

<style>

</style>