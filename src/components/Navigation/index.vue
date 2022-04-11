<template>
  <header class="sticky top-0 z-50 grid grid-cols-2 lg:grid-cols-3 px-3 lg:px-10 py-4 border-2 border-b-yellow-500">
    <!-- WEB -->
    <!-- Logo/Button -->
    <div class="lg:flex space-x-4 hidden lg:visible">
      <AppLogo />
      <AppButton outlined value="Find Courses" />
    </div>

    <!-- Menu Items -->
    <div class="lg:flex items-center justify-center hidden lg:visible">
      <ul class="flex space-x-4">
        <li
          v-for="(menu, index) in menuItems"
          :key="index"
        >
          <button :class="{ 'text-blue-500 font-bold': currentMenu == menu }">{{ menu }}</button>
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
    <div class="flex items-center visible lg:hidden">
      <font-awesome-icon class="text-3xl text-blue-500" icon="fa-solid fa-bars" />
    </div>

    <!-- Login -->
    <div class="ml-auto visible lg:hidden">
      <AppButton outlined value="Login" />
    </div>
  </header>
</template>

<script>
  export default {
    name: 'PageNavigation',

    data: () => ({
      menuItems: ['Home', 'Courses', 'Events', 'Membership', 'Contact Us'],
      currentMenu: 'Home'
    })
  }
</script>

<style>

</style>