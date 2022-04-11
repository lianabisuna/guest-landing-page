<template>
    <!-- Section Title -->
    <div class="px-3 lg:px-10 py-16 space-y-10 bg-blue-800">
        <!-- Section Title -->
        <div class="text-center text-white">
            <div class="text-3xl font-narrow font-bold pb-1">Events</div>
            <div class="text-xl">Join Upcoming CPD Accredited Training, Events and Seminars</div>
        </div>

        <!-- Event cards -->    
        <div class="lg:grid lg:grid-cols-2 gap-5 space-y-5 lg:space-y-0">
            <EventCard
                v-for="(event, index) in eventItems"
                :key="index"
                :title="event.title"
                :date="event.date"
                :preview="event.preview"
                :image="event.src"
                :class="{ 'hidden': index == eventItems.length-1 }"
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
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: 'events-2' },
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: 'events-1' },
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: 'events-3' },
                { title: 'Lorem Ipsum Set Dolor', date: 'Jan 27, 2022', preview: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...', src: 'event-4' },
            ]
        })
    }
</script>

<style>

</style>