<template>
  <div class="grid grid-cols-2 lg:grid-cols-3 px-3 lg:px-10 py-4 border-2 border-b-yellow-500">
    <!-- WEB -->
    <!-- Logo/Button -->
    <div class="lg:flex space-x-4 hidden lg:visible">
      <div>
        <img src="@/assets/images/logo.png" alt="logo" class="h-full">
      </div>
      <AppButton outlined value="Find Courses" />
    </div>

    <!-- Menu Items -->
    <div class="lg:flex items-center justify-center hidden lg:visible">
      <ul class="flex space-x-4">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ 'text-blue-500 font-bold italic': item.active }"
        >
          <button>{{ item.name }}</button>
        </li>
      </ul>
    </div>

    <!-- Login/Join -->
    <div class="lg:flex space-x-2 ml-auto hidden lg:visible">
      <AppButton outlined value="Login" />
      <AppButton value="Join" />
    </div>



    <!-- MOBILE -->
    <!-- Hamburger Menu -->
    <div class="flex items-center">
      <font-awesome-icon class="text-3xl text-blue-500" icon="fa-solid fa-bars" />
    </div>

    <!-- Login -->
    <div class="ml-auto">
      <AppButton outlined value="Login" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageNavigation',

    data: () => ({
      menuItems: [
        { name: 'Home', value: '', active: true },
        { name: 'Courses', value: '', active: false },
        { name: 'Events', value: '', active: false },
        { name: 'Membership', value: '', active: false },
        { name: 'Contact Us', value: '', active: false },
      ]
    })
  }
</script>

<style>

</style>