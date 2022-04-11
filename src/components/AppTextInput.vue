<template>
  <div>
    <label v-if="label" class="block text-sm pb-1">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full min-h-[2.5rem] rounded border border-gray-300 px-2.5"
    >
  </div>
</template>

<script>
export default {
    name: 'AppTextInput',
    props: {
      label: { type: String, default: '' },
      placeholder: { type: String, default: '' },
    }
}
</script>

<style>

</style>