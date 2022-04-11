<template>
  <div class="bg-blue-50 justify-self-center px-5 left-3 right-3 py-7 lg:px-10 rounded absolute -bottom-20 lg:relative lg:bottom-0 shadow-md">
    <div class="space-y-4">
      <!-- Card Title -->
      <div class="text-2xl font-narrow font-bold text-center pb-2">Join us for free</div>

      <!-- Inputs -->
      <div class="space-y-5 hidden lg:block">
        <AppTextInput
          label="First Name"
          placeholder="Enter first name"
        />
        <AppTextInput
          label="Last Name"
          placeholder="Enter last name"
        />
        <AppTextInput
          label="Email Address"
          placeholder="Enter email"
        />
        <AppPassword
          label="Password"
          placeholder="Enter 8 to 10 characters"
        />
      </div>

      <!-- Additional Buttons -->
      <div class="text-sm text-gray-500 hidden lg:block">By signing up, you agree to our <span class="text-yellow-600">Terms of Use</span> and <span class="text-yellow-600">Privacy Policy</span>.</div>
      <div class="space-x-3 flex">
        <AppButton class="w-full" outlined value="Join as Professional" />
        <AppButton class="w-full" value="Join as CPD Provider" />
      </div>
      <div class="text-center text-sm text-gray-500 hidden lg:block">or create an account using</div>
      <div class="space-x-3 lg:flex hidden">
        <button class="w-full rounded px-4 min-w-[5.5rem] min-h-[2.5rem] text-sm bg-indigo-700 text-white">
          <font-awesome-icon icon="fa-brands fa-facebook-square"></font-awesome-icon>
          <span class="pl-2">Facebook</span>
        </button>
        <button class="w-full rounded px-4 min-w-[5.5rem] min-h-[2.5rem] text-sm bg-blue-500 text-white">
          <font-awesome-icon icon="fa-brands fa-google"></font-awesome-icon>
          <span class="pl-2">Google</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>