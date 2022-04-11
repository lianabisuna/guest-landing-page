<template>
  <div class="px-3 lg:px-10 py-16 space-y-10 mt-20 lg:mt-0">
    <!-- Section Title -->
    <div class="text-center">
      <div class="text-3xl font-narrow font-bold pb-1">Popular Courses</div>
    </div>

    <!-- Filter Tabs -->
    <div>
      <ul class="lg:flex justify-center hidden">
        <li v-for="(tab, index) in tabItems" :key="index">
          <button
            :class="[
              'min-h-[2.5rem] rounded px-4',
              currentTab == tab ? 'bg-blue-500 text-white' : ''
            ]"
          >
            {{ tab }}
          </button>
        </li>
      </ul>
      <div class="block lg:hidden flex justify-center">
        <AppDropdown value="All courses" />
      </div>
    </div>

    <!-- Course Cards -->
    <div class="w-screen flex space-x-5">
      <CourseCard
        v-for="(course, index) in courseItems"
        :key="index"
        :title="course.title"
        :image="course.src"
        :price="course.price"
        :stars="course.stars"
      />
    </div>

    <!-- View All Button -->
    <div class="text-center">
      <AppButton outlined value="View all courses" />
    </div>
  </div>
</template>

<script>
  import CourseCard from './CourseCard'

  export default {
    name: 'CourseSection',
    components: {
      CourseCard
    },
    data: () => ({
      courseItems: [
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: 'popular-courses-2' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: 'popular-courses' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: 'popular-courses-1' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: 'popular-courses-2' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: 'popular-courses' },
      ],
      currentTab: 'Agriculture',
      tabItems: ['Agriculture', 'Architecture', 'Criminology', 'Medicine', 'Midwifery', 'Nursing', 'Veterinary Medicine'],
    })
  }
</script>

<style>

</style>