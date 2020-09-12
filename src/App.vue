<template>
  <div id="app" >
    <div class="homeLink" :class="{aboutLink: aboutLink, carBlogLink: carBlogLink, companyLandingLink: companyLandingLink}">
      <router-link 
        :to="mass.link"
        v-for="(mass, id) in massLink" 
        :key="id"
      >
        {{mass.text}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        aboutLink: false,
        carBlogLink: false,
        companyLandingLink: false,
        moneyConverterLink: false,
        pictureGalleryLink: false,
        websiteQuestionnaireLink: false,
        websiteRegistrationLink: false,
        massLink: [
          {
            link: '/Home',
            text: 'Home'
          },
          {
            link: '/About',
            text: 'About'
          },
          {
            link: '/Car-blog',
            text: 'Car-blog'
          },
          {
            link: '/Company-landing',
            text: 'Company-landing'
          },
          {
            link: '/Money-converter',
            text: 'Money-converter'
          },
          {
            link: '/Picture-gallery',
            text: 'Picture-gallery'
          },
          {
            link: '/Website-questionnaire',
            text: 'Website-questionnaire'
          },
          {
            link: '/Website-registration',
            text: 'Website-registration'
          },
        ]
      }
    },
    method: {
      removedClassFromLink() {
        this.aboutLink = false;
        this.carBlogLink = false;
        this.companyLandingLink = false;
      }
    },
    watch: {
      $route(to) {
        if(to.name === 'About' || to.name === 'Website-registration' || to.name === 'Money-converter' || to.name === 'Picture-gallery') {
          this.aboutLink = true;
          this.carBlogLink = false;
          this.companyLandingLink = false;
        }
        else if(to.name === 'Car-blog' || to.name === 'Website-questionnaire') {
          this.aboutLink = false;
          this.carBlogLink = true;
          this.companyLandingLink = false;
        }
        else if(to.name === 'Company-landing') {
          this.aboutLink = false;
          this.carBlogLink = false;
          this.companyLandingLink = true;
          
        }
      }
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'lato';
    src: url("./assets/fonts/Lato-Light.ttf") format('truetype');
  }

  @font-face {
      font-family: 'PtSans';
      src: url("./assets/fonts/PTSans-Regular.ttf") format('truetype');
  }

  * {
      box-sizing: border-box;
      scroll-behavior: smooth;
  }

  html, body, p, h1, h2, h3 {
      margin: 0;
      padding: 0;
  }

  a, button, select, input {
    cursor: pointer;
  }

  .homeLink,
  .aboutLink, 
  .carBlogLink, 
  .companyLandingLink {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  
  .carBlog {
    background-color: black;

    a {
      color: white;
    }
  } 
  
  .companyLanding {
    background-color: #4D636F;
  }

  #app {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  body, html {
    height: 100%;
    width: 100%;
  }
</style>
