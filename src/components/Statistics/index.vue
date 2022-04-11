<template>
  <div class="px-14 lg:px-40 py-12 lg:py-8 bg-statistics bg-no-repeat lg:space-x-1 grid grid-cols-2 lg:grid-cols-5 bg-cover gap-10 lg:gap-0">
    <StatisticsCard
        v-for="(statistics, index) in statisticsItems"
        :key="index"
        :value="statistics.value"
        :caption="statistics.caption"
        :alt="statistics.alt"
    />
  </div>
</template>

<script>
    import StatisticsCard from './StatisticsCard'

    export default {
        name: 'StatisticsSection',
        components: {
            StatisticsCard
        },
        data: () => ({
            statisticsItems: [
                { value: '05', caption: 'National Organizations', alt: 'National Orgs' },
                { value: '27', caption: 'Board Professions', alt: 'Board Professions' },
                { value: '1.5K+', caption: 'Signed-up Professionals', alt: 'Sign-ups' },
                { value: '20', caption: 'Sectoral Organizatons', alt: 'Sectoral Orgs' },
                { value: 'P70.4', caption: 'Average Price per Unit', alt: 'Average Price per Unit' },
            ]
        })
    }
</script>

<style>

</style>