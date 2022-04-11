<template>
  <div class="px-40 py-16 space-y-10">
      <div class="grid grid-cols-12">
          <!-- Get in touch -->
          <div class="col-span-5 space-y-6">
            <div class="text-3xl font-narrow font-bold pb-2">Get In Touch</div>
            <AppContact
              v-for="(contact, index) in contactItems"
              :key="index"
              :label="contact.label"
              :value="contact.value"
              :divider="index !== contactItems.length-1"
            />
          </div>

          <!-- Contact form -->
          <div class="col-span-7">
            <div class="text-3xl font-narrow font-bold">Contact Form</div>
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