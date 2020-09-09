<template>
    <div class="app" ref="app" :style="{  height: appHeight + 'px' }">
      <Loader v-if="loading" />
      <Header ref="header" :class="{opacity: loading}" />
      <main class="main" :style="{ 'padding-top': headerHeight + 'px', height: mainHeight + 'px' }" ref="main" :class="{opacity: loading}" >
        <Congratulation :inputPhone="inputPhone" ref="congr"/>
        <Attention :inputPhone="inputPhone" ref="attention"/>
        <Shield :style="{ height: shieldHeight + 'px' }" :inputPhone="inputPhone" :widthSize="widthSize" ref="shield"/>
        <Form @display="display" ref="form"/>
      </main>
      <Footer v-show="!inputPhone && !loading" :style="{top: this.top + 'px', position: this.position}" />
    </div>
</template>

<script>
import Header from '../components/Website-registration/Header.vue';
import Loader from '../components/Website-registration/Loader.vue';
import Footer from '../components/Website-registration/Footer.vue';
import Congratulation from '../components/Website-registration/Congratulation.vue';
import Attention from '../components/Website-registration/Attention.vue';
import Shield from '../components/Website-registration/Shield.vue';
import Form from '../components/Website-registration/Form.vue';

export default {
  name: 'app',
  components: {
    Header, Loader, Footer, Congratulation, Attention, Shield, Form
  },
  data: function () {
    return {
      loading: false,
      button: true,
      headerHeight: null,
      mainHeight: null,
      shieldHeight: null,
      inputPhone: true,
      innerHeight: null,
      congrHeight: null,
      attentionHeight: null,
      formHeight: null,
      widthSize: null,
      top: null,
      position: null,
      appHeight: null
    }
  },
  methods: {
    display(value, opacity){
      this.loading = value;
      this.inputPhone = opacity;
    },
    options() {
      this.innerHeight = window.innerHeight;
      this.congrHeight = this.$refs.congr.$el.scrollHeight;
      this.attentionHeight = this.$refs.attention.$el.scrollHeight;
      this.formHeight = this.$refs.form.$el.scrollHeight;
      this.headerHeight = this.$refs.header.$el.scrollHeight;
      let navEl = document.querySelector('#nav').scrollHeight;
      this.appHeight = window.innerHeight - navEl;
      
      if( this.innerHeight > this.congrHeight + this.attentionHeight + this.formHeight + this.shieldHeight + this.headerHeight + navEl + 40) {
          this.mainHeight = this.innerHeight - navEl;
      }
      else {
          this.mainHeight = this.congrHeight + this.attentionHeight + this.formHeight + this.shieldHeight + this.headerHeight;
      }
      this.shieldHeight = this.innerHeight - this.congrHeight - this.attentionHeight - this.formHeight - this.headerHeight - 75;
      if (this.shieldHeight < 160) {
          this.shieldHeight = 160;
      }
      this.widthSize = this.shieldHeight - 20;
      if(this.mainHeight + navEl <= this.innerHeight ) {
        this.top = this.innerHeight - 85;
      }
      else {
        this.top = this.mainHeight - navEl + 35;
      }
    }
  },
  mounted() {
    this.options();

    window.onresize = () => {
      this.options();
    };
  },
  beforeUpdate() {
    this.options();

    window.onresize = () => {
      this.options();
    };
  },
  watch: {
    headerHeight: function(val) {
      this.headerHeight = val;
    },
    innerHeight: function(val1) {
      this.innerHeight = val1;
    },
    mainHeight: function(val2) {
      this.mainHeight = val2;
    },
    congrHeight: function(val3) {
      this.congrHeight = val3;
    },
    attentionHeight: function(val4) {
      this.attentionHeight = val4;
    },
    shieldHeight: function(val5) {
      this.shieldHeight = val5;
    },
    formHeight: function(val6) {
      this.formHeight = val6;
    },
    top: function(val7) {
      this.top = val7;
    },
    appHeight: function(val8) {
      this.appHeight = val8;
    },
  }
}
</script>

<style lang="scss" scoped>
  * {
      box-sizing: border-box;
      outline: none;
  }

  p,h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  button, input {
    padding: 0;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: gray;

    @media (max-width: 640px) {
      background-color: white;
    }
  }

  .app {
    position: relative;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .main {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: white;
  }

  .opacity {
    opacity: 0;
  }
</style>
