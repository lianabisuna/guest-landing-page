<template>
  <div class="px-3 lg:px-10 py-16 space-y-10">
        <!-- Section Title -->
        <div class="text-center">
            <div class="text-3xl font-narrow font-bold pb-1">Memberships</div>
            <div class="text-xl">Join Accredited Professional Organizations in your field</div>
        </div>

        <!-- Membership cards -->
        <div class="grid grid-rows-4 grid-cols-2 gap-5">
            <div class="row-span-4 h-[28rem]">
                <MembershipCard
                    :title="membershipItems[0].title"
                    :price="membershipItems[0].price"
                    :image="membershipItems[0].src"
                />
            </div>
            <div class="row-span-2">
                <MembershipCard
                    :title="membershipItems[1].title"
                    :price="membershipItems[1].price"
                    :image="membershipItems[1].src"
                />
            </div>
            <div class="row-span-2">
                <MembershipCard
                    :title="membershipItems[2].title"
                    :price="membershipItems[2].price"
                    :image="membershipItems[2].src"
                />
            </div>
        </div>
  </div>
</template>

<script>
    import MembershipCard from './MembershipCard'

    export default {
        name: 'MembershipSection',
        components: {
            MembershipCard
        },
        data: () => ({
            membershipItems: [
                { title: 'ARCPP Membership Renewal for Registered Nurse', price: 'Php 750.00', src: '@/assets/images/membership/membership-1.jpg' },
                { title: 'ARCPP Membership Renewal for Registered Nurse', price: 'Php 750.00', src: '@/assets/images/events/membership-2.jpg' },
                { title: 'ARCPP Membership Renewal for Registered Nurse', price: 'Php 750.00', src: '@/assets/images/events/membership-3.jpg' },
            ]
        })
    }
</script>

<style>

</style>