<template>
  <div>
      <div class="font-narrow text-xl text-yellow-600 font-semibold pb-2">{{ label }}</div>
      <div>{{ value }}</div>
      <div v-if="divider" class="h-px bg-gray-300 mt-7"></div>
  </div>
</template>

<script>
export default {
    name: 'AppContact',
    props: {
        label: { type: String, default: '' },
        value: { type: String, default: '' },
        divider: { type: Boolean, default: false },
    }
}
</script>

<style>

</style>