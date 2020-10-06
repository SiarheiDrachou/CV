<template>
  <div id="app" >
    <div class="homeLink" :class="{ carBlog: carBlog, companyLanding: companyLanding}">
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
        carBlog: false,
        companyLanding: false,
        massLink: [
          {
            link: '/',
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
          {
            link: '/Contact-list',
            text: 'Contact-list'
          }
        ]
      }
    },
    watch: {
      $route(to) {
        if(to.name === 'About' || to.name === 'Website-registration' || to.name === 'Money-converter' || to.name === 'Picture-gallery') {
          this.carBlog = false;
          this.companyLanding = true;
        }
        else if(to.name === 'Car-blog' || to.name === 'Website-questionnaire') {
          this.carBlog = true;
          this.companyLanding = false;
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

  html, body, p, h1, h2, h3, h4, h5, h6, ul {
      margin: 0;
      padding: 0;
  }

  a, button, select, input {
    cursor: pointer;
  }

  .homeLink {
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

    a {
      color: white;
    }
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
