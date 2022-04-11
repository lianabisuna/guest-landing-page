<template>
  <div>
    <label v-if="label" class="block text-sm pb-1">{{ label }}</label>
    <div class="relative">
      <input
        :type="toggle ? 'text' : 'password'"
        :placeholder="placeholder"
        class="w-full min-h-[2.5rem] rounded border border-gray-300 px-2.5"
      >
      <button class="absolute right-3 bottom-2">
        <font-awesome-icon
          @click="toggle = !toggle"
          :icon="toggle ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
        ></font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppPassword',
    data: () => ({
      toggle: false
    }),
    props: {
      label: { type: String, default: '' },
      placeholder: { type: String, default: '' },
    }
}
</script>

<style>

</style>