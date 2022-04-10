<template>
  <div class="py-8 lg:grid lg:grid-cols-12 bg-banner min-h-[25rem] lg:min-h-screen items-center bg-no-repeat bg-cover lg:px-32 relative">
	<!-- Heading/Subtitle/Button -->
	<div class="col-span-7 text-white space-y-4 px-8 lg:px-0">
		<div class="font-narrow text-3xl lg:text-5xl font-semibold">Your All-in-one CPD Solution</div>
		<div class="pb-3 lg:text-lg lg:w-4/6">laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
		<AppButton large value="View All Courses" />
	</div>

	<!-- Join Card -->
	<div class="lg:col-span-5 lg:h-full flex w-full lg:justify-self-center">
		<JoinCard />
	</div>
  </div>
</template>

<script>
	import JoinCard from './JoinCard'

	export default {
		name: 'PageBanner',

		components: {
			JoinCard
		}
	}
</script>

<style>

</style>