<template>
  <div class="relative bg-red-300 rounded h-full w-full shadow-md min-h-60">
      <img :src="require(`@/assets/images/membership/${image}.jpg`)" alt="memberships" class="rounded object-cover absolute top-0 left-0 h-full w-full">
      <div class="text-white bottom-3 absolute px-3">
        <div class="text-lg font-bold">{{ title }}</div>
        <div class="font-bold">{{ price }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MembershipCard',
    props: {
        title: { type: String, default: '' },
        price: { type: String, default: '' },
        image: { type: String, default: '' },
    }
}
</script>

<style>

</style>