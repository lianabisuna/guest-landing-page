<template>
  <div class="shadow-lg p-2 w-64 space-y-1">
      <img :src="image" alt="popular-courses" class="rounded">
      <div class="text-lg font-semibold">{{ title }}</div>
      <div class="flex">
          <span class="text-gray-500">{{ price }}</span>
          <div class="ml-auto space-x-2 text-yellow-600">
              <font-awesome-icon class="text-sm" icon="fa-solid fa-star" />
              <span>{{ stars }}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CourseCard',
    props: {
        image: { type: String, default: '' },
        title: { type: String, default: '' },
        price: { type: String, default: '' },
        stars: { type: Number, default: 0 }
    }
}
</script>

<style>

</style>