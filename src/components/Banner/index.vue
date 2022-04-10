<template>
  <div class="py-8 grid grid-cols-12 bg-banner min-h-screen items-center bg-no-repeat bg-cover px-32">
		<!-- Heading/Subtitle/Button -->
		<div class="col-span-7 text-white space-y-4">
			<div class="font-narrow text-5xl font-semibold">Your All-in-one CPD Solution</div>
			<div class="pb-3 text-lg w-4/6">laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
			<AppButton large value="View All Courses" />
		</div>

		<!-- Join Card -->
		<div class="col-span-5 h-full flex w-full justify-center self-center justify-self-center">
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