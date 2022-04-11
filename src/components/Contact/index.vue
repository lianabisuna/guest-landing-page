<template>
  <div class="w-full">
    <div class="px-3 lg:px-40 py-16">
      <div class="max-w-7xl mx-auto space-y-10">
        <div class="lg:grid lg:grid-cols-12">
          <!-- Get in touch -->
          <div class="lg:col-span-5 space-y-6 px-11 lg:pr-28 pb-20 lg:pb-0">
            <div class="text-3xl font-narrow font-bold pb-2 text-center lg:text-start">Get In Touch</div>
            <AppContact
              v-for="(contact, index) in contactItems"
              :key="index"
              :label="contact.label"
              :value="contact.value"
              :divider="index !== contactItems.length-1"
            />
          </div>

          <!-- Contact form -->
          <div class="lg:col-span-7">
            <div class="text-3xl font-narrow font-bold pb-8 text-center lg:text-start">Contact Form</div>
            <div class="lg:grid lg:grid-cols-2 gap-4 space-y-5 lg:space-y-0">
              <div><AppTextInput placeholder="Full Name" /></div>
              <div><AppTextInput placeholder="Contact Number" /></div>

              <div class="lg:col-start-1 lg:col-end-3"><AppTextarea placeholder="Your Message" /></div>

              <div><AppTextInput placeholder="Email Address" /></div>
              <div><AppButton class="w-full" value="Send Message" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data: () => ({
    contactItems: [
      { label: 'Phones', value: '+63 02 500 6230' },
      { label: 'E-mails', value: 'support@icpdgateway.ph' },
      { label: 'Address', value: 'Lorem Ipsum Street, Manila PH' },
    ]
  })
}
</script>

<style>

</style>