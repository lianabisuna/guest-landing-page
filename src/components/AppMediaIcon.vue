<template>
  <div :class="['h-10 w-10 rounded-full flex justify-center items-center', color]">
      <font-awesome-icon class="text-xl" :icon="icon" />
  </div>
</template>

<script>
export default {
    name: 'AppMediaIcon',
    props: {
        icon: { type: String, default: '' },
        color: { type: String, default: '' }
    }
}
</script>

<style>

</style>