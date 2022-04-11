<template>
  <div class="text-white space-y-3">
        <div class="text-5xl font-bold pb-1">{{ value }}</div>
        <div class="h-0.5 w-12 bg-yellow-500"></div>
        <div>
            <span class="hidden lg:block">{{ caption }}</span>
            <span class="block lg:hidden">{{ alt }}</span>
        </div>
  </div>
</template>

<script>
export default {
    name: 'StatisticsCard',
    props: {
        value: { type: String, default: '' },
        caption: { type: String, default: '' },
        alt: { type: String, default: '' }
    }
}
</script>

<style>

</style>