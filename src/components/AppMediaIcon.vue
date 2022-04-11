<template>
  <div :class="['h-10 w-10 rounded-full', color]">
      <font-awesome-icon :icon="icon" />
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