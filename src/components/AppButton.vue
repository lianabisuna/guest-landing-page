<template>
  <button
    :class="[
      'rounded px-4',
      large ? 'min-w-[12rem] min-h-[3.5rem] text-lg' : 'min-w-[5.5rem] min-h-[2.5rem] text-sm',
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
      white: { type: Boolean, default: false },
      outlined: { type: Boolean, default: false },
      large: { type: Boolean, default: false },
    }
  }
</script>

<style>

</style>