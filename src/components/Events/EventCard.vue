<template>
  <div class="rounded p-5 lg:flex space-x-3 shadow-lg bg-white">
      <!-- Left Image -->
      <div class="pb-5 lg:pb-0">
          <img :src="require(`@/assets/images/events/${image}.jpg`)" alt="events" class="object-cover h-full w-[30rem]">
      </div>

      <!-- Right Column -->
      <div class="space-y-1.5">
          <div class="text-lg font-bold">{{ title }}</div>
          <div class="text-sm text-gray-500">{{ date }}</div>
          <div class="leading-tight">{{ preview }}</div>
          <!-- See more -->
          <div class="pt-2 text-yellow-500">See more</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'EventCard',
    props: {
        image: { type: String, default: '' },
        title: { type: String, default: '' },
        date: { type: String, default: '' },
        preview: { type: String, default: '' },
    }
}
</script>

<style>

</style>