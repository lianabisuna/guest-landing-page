<template>
  <div class="px-3 lg:px-10 py-16 space-y-10">
        <!-- Section Title -->
        <div class="text-center">
            <div class="text-3xl font-narrow font-bold pb-1">Memberships</div>
            <div class="text-xl">Join Accredited Professional Organizations in your field</div>
        </div>

        <!-- Membership cards -->
        <div class="grid lg:grid-rows-4 lg:grid-cols-2 gap-5">
            <div class="lg:row-span-4 h-[20rem] lg:h-[28rem]">
                <MembershipCard
                    :title="membershipItems[0].title"
                    :price="membershipItems[0].price"
                    :image="membershipItems[0].src"
                />
            </div>
            <div class="lg:row-span-2 h-[8rem] lg:h-full">
                <MembershipCard
                    :title="membershipItems[1].title"
                    :price="membershipItems[1].price"
                    :image="membershipItems[1].src"
                />
            </div>
            <div class="lg:row-span-2 h-[8rem] lg:h-full">
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
                { title: 'ARCPP Membership Renewal for Registered Nurse', price: 'Php 750.00', src: 'membership-1' },
                { title: 'ARCPP Membership Renewal for Registered Nurse', price: 'Php 750.00', src: 'membership-2' },
                { title: 'ARCPP Membership Renewal for Registered Nurse', price: 'Php 750.00', src: 'membership-3' },
            ]
        })
    }
</script>

<style>

</style>