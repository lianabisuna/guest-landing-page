<template>
  <div>
    <label v-if="label" class="block text-sm pb-1">{{ label }}</label>
    <textarea
      rows="6"
      :placeholder="placeholder"
      class="w-full py-2 rounded border border-gray-300 px-2.5"
    ></textarea>
  </div>
</template>

<script>
export default {
    name: 'AppTextarea',
    props: {
      label: { type: String, default: '' },
      placeholder: { type: String, default: '' },
    }
}
</script>

<style>

</style>