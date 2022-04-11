<template>
  <div id="app">
    <PageNavigation />
    <PageBanner />
    <CourseSection />
    <EventSection />
  </div>
</template>

<script>
  import PageNavigation from './components/Navigation'
  import PageBanner from './components/Banner'
  import CourseSection from './components/Courses'
  import EventSection from './components/Events'

  export default {
    name: 'App',
    components: {
      PageNavigation,
      PageBanner,
      CourseSection,
      EventSection
    }
  }
</script>

<style>
  #app {
    font-family: Archivo, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4F4F4F;
    font-size: 16px;
  }
</style>
