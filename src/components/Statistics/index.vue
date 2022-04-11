<template>
  <div class="px-40 py-7 bg-statistics bg-no-repeat space-x-1 grid grid-cols-5 bg-cover">
    <StatisticsCard
        v-for="(statistics, index) in statisticsItems"
        :key="index"
        :value="statistics.value"
        :caption="statistics.caption"
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
                { value: '05', caption: 'National Organizations' },
                { value: '27', caption: 'Board Professions' },
                { value: '1.5K+', caption: 'Signed-up Professionals' },
                { value: '20', caption: 'Sectoral Organizatons' },
                { value: 'P70.4', caption: 'Average Price per Unit' },
            ]
        })
    }
</script>

<style>

</style>