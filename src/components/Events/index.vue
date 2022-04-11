<template>
    <!-- Section Title -->
    <div class="px-3 lg:px-10 py-16 space-y-10 bg-blue-800">
        <!-- Section Title -->
        <div class="text-center text-white">
            <div class="text-3xl font-narrow font-bold pb-1">Events</div>
            <div class="text-xl">Join Upcoming CPD Accredited Training, Events and Seminars</div>
        </div>

        <!-- Event cards -->
        <div class="grid grid-cols-2 gap-5">
            <EventCard
                v-for="(event, index) in eventItems"
                :key="index"
                :title="event.title"
                :date="event.date"
                :preview="event.preview"
                :image="event.src"
            />
        </div>

        <!-- View All Button -->
    <div class="text-center">
      <AppButton outlined white value="View all events" />
    </div>
    </div>
</template>

<script>
    import EventCard from './EventCard'

    export default {
        name: 'EventSection',
        components: {
            EventCard
        },
        data: () => ({
            eventItems: [
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: '@/assets/images/events/events-2.jpg' },
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: '@/assets/images/events/events-1.jpg' },
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: '@/assets/images/events/events-3.jpg' },
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: '@/assets/images/events/event-4.jpg' },
            ]
        })
    }
</script>

<style>

</style>