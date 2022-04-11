<template>
  <div id="app">
    <PageNavigation />
    <PageBanner />
    <CourseSection />
    <EventSection />
    <MembershipSection />
    <StatisticsSection />
    <ContactSection />
    <PageFooter />
    <PageSubFooter />
  </div>
</template>

<script>
  import PageNavigation from './components/Navigation'
  import PageBanner from './components/Banner'
  import CourseSection from './components/Courses'
  import EventSection from './components/Events'
  import MembershipSection from './components/Membership'
  import StatisticsSection from './components/Statistics'
  import ContactSection from './components/Contact'
  import PageFooter from './components/Footer'
  import PageSubFooter from './components/SubFooter'

  export default {
    name: 'App',
    components: {
      PageNavigation,
      PageBanner,
      CourseSection,
      EventSection,
      MembershipSection,
      StatisticsSection,
      ContactSection,
      PageFooter,
      PageSubFooter
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
