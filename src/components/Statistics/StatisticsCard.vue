<template>
  <div class="text-white space-y-3">
      <div class="text-5xl font-bold pb-1">{{ value }}</div>
      <div class="h-0.5 w-12 bg-yellow-500"></div>
      <div>{{ caption }}</div>
  </div>
</template>

<script>
export default {
    name: 'StatisticsCard',
    props: {
        value: { type: String, default: '' },
        caption: { type: String, default: '' }
    }
}
</script>

<style>

</style>