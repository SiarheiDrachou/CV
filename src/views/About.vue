<template>
  <div class="about">
    <Information />

    <Skills />

    <Works />

    <Studies />

    <More />

    <MyWebsites />
  </div>
</template>

<script>
import Information from '../components/about/Information'
import Skills from '../components/about/Skills'
import Works from '../components/about/Works'
import Studies from '../components/about/Studies'
import More from '../components/about/More'
import MyWebsites from '../components/about/MyWebsites'

  export default {
    components: {
      Information,
      Skills,
      Works,
      Studies,
      More,
      MyWebsites
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
