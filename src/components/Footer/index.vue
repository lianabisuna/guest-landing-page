<template>
  <footer class="bg-blue-900 text-white px-3 lg:px-10 py-14">
    <div class="grid grid-cols-12 gap-5 lg:gap-0">
      <div class="col-span-6 lg:col-span-2">
        <div class="font-bold pb-4 text-lg">Home</div>
        <ul class="space-y-2">
          <li>About Us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div class="col-span-6 lg:col-span-2">
        <div class="font-bold pb-4 text-lg">CPD</div>
        <ul class="space-y-2">
          <li>Online Courses</li>
          <li>Events</li>
          <li>Memberships</li>
        </ul>
      </div>

      <div class="col-span-6 lg:col-span-2">
        <div class="font-bold pb-4 text-lg">Join Us</div>
        <ul class="space-y-2">
          <li>Sign Up as Professiona</li>
          <li>Sign Up as Provider</li>
        </ul>
      </div>

      <div class="col-span-6 lg:col-span-2">
        <div class="font-bold pb-4 text-lg">Terms &#x26; Conditions</div>
        <ul class="space-y-2">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Fulfillment Policy</li>
        </ul>
      </div>

      <div class="col-span-12 lg:col-span-3">
        <ul class="flex space-x-3 pb-3 flex justify-center lg:justify-start">
          <li v-for="(social, index) in socialLinks" :key="index">
            <AppMediaIcon :icon="social.icon" :color="social.color" />
          </li>
        </ul>
        <div class="text-lg flex justify-center lg:justify-start">Follow us on social media for more updates!</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'PageFooter',
    data: () => ({
      socialLinks: [
        { icon: 'fa-brand fa-facebook', color: 'bg-indigo-700' },
        { icon: 'fa-brand fa-google-plus', color: 'bg-red-600' },
        { icon: 'fa-brand fa-twitter', color: 'bg-blue-300' }
      ]
    })
}
</script>

<style>

</style>