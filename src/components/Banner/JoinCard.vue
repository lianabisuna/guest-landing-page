<template>
  <div class="bg-blue-50 p-10 rounded">
    <div class="space-y-4">
      <!-- Card Title -->
      <div class="text-2xl font-narrow font-bold text-center pb-2">Join us for free</div>

      <!-- Inputs -->
      <div class="space-y-5">
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
        <AppTextInput
          label="Password"
          placeholder="Enter 8 to 10 characters"
        />
      </div>

      <!-- Additional Buttons -->
      <div class="text-sm text-gray-500">By signing up, you agree to our <span class="text-yellow-600">Terms of Use</span> and <span class="text-yellow-600">Privacy Policy</span>.</div>
      <div class="space-x-3 flex">
        <AppButton class="w-full" outlined value="Join as Professional" />
        <AppButton class="w-full" value="Join as CPD Provider" />
      </div>
      <div class="text-center text-sm text-gray-500">or create an account using</div>
      <div class="space-x-3 flex">
        <AppButton class="w-full" value="Facebook" />
        <AppButton class="w-full" value="Google" />
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