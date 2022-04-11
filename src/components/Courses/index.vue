<template>
  <div class="px-3 lg:px-10 py-16 space-y-10">
    <!-- Section Title -->
    <div class="grid grid-cols-3">
      <div></div>
      <div><div class="text-3xl font-narrow text-center font-bold">Popular Courses</div></div>
      <div class="ml-auto"><AppButton outlined value="All courses" /></div>
    </div>

    <!-- Filter Tabs -->
    <div>
      <ul class="flex justify-center">
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
    </div>

    <!-- Course Cards -->
    <div class="space-x-5 flex overflow-y-auto">
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
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: '@/assets/images/courses/popular-courses-2.jpg' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: '@/assets/images/courses/popular-courses.jpg' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: '@/assets/images/courses/popular-courses-1.jpg' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: '@/assets/images/courses/popular-courses-2.jpg' },
          { title: 'Lastest Updates in Small Animal Cardiology Practice', price: 'Php 750.00', stars: 2458, src: '@/assets/images/courses/popular-courses.jpg' },
      ],
      currentTab: 'Agriculture',
      tabItems: ['Agriculture', 'Architecture', 'Criminology', 'Medicine', 'Midwifery', 'Nursing', 'Veterinary Medicine'],
    })
  }
</script>

<style>

</style>