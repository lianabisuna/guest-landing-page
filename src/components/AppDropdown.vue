<template>
  <button
    class="border border-gray-400 bg-transparent text-gray-400 rounded px-4 min-h-[3rem] min-w-[16rem] flex justify-center items-center"
  >
    <span class="justify-start">{{ value }}</span>
    <font-awesome-icon class="ml-auto" icon="fa-solid fa-caret-down" />
  </button>
</template>

<script>
export default {
    props: {
      value: { type: String, default: '' }
    }
}
</script>

<style>

</style>