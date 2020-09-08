<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Car-blog">Car blog</router-link> |
      <router-link to="/Company-landing">Company landing</router-link> |
      <router-link to="/Picture-gallery">Picture gallery</router-link> |
      <router-link to="/Money-converter">Money converter</router-link> |
      <router-link to="/Website-registration">Website registration</router-link> |
      <router-link to="/Website-questionnaire">Website questionnaire</router-link> |
    </div>
    <router-view/>
  </div>
</template>

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

  p, h1, h2, h3, h4, h5, h6, a, div {
    font-family: 'PtSans';
  }

  a, button, select, input {
    cursor: pointer;
  }

  #nav {
    max-width: 1280px;
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
