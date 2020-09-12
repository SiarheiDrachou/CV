<template>
    <div class="body-container" :style="{height: containerHeight + 'px'}">
        <div class="body-img" ref="img" :style="{height: containerHeight + 'px', width: width + 'px'}"></div>
        <div class="app" ref="app" :style="{height: containerHeight + 'px'}">
            <Header />
            <Main @finish="finish" />
        </div>
    </div>
</template>

<script>
    import Header from '../components/Website-questionnaire/Header'
    import Main from '../components/Website-questionnaire/Main'

    export default {
        name: 'App',
        components: {
            Header, Main
        },
        data: () => ({
            views: null,
            height: null,
            containerHeight: null,
            width: null
        }),
        methods: {
            finish(value){
                this.views = value;
            },
            resize() {
                let navEl = document.querySelector('#app').firstChild.scrollHeight;
                this.containerHeight = window.innerHeight - navEl;
                this.height = window.innerHeight - navEl;
                this.width = this.$refs.app.scrollWidth + 100;
            }
        },
        mounted() {
            this.finish();
            this.resize();

            window.onresize = () => {
                this.resize();

            };
        },
        beforeUpdate() {
            this.resize();

            window.onresize = () => {
                this.resize();
            };
        }
    }
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    @font-face {
        font-family: "Roboto";
        src: url('../assets/fonts/Roboto-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Roboto";
        src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Roboto";
        src: url('../assets/fonts/Roboto-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    input,
    select,
    button {
        outline: none;
        font-family: "Roboto";
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-family: "Roboto";
    }

    button {
        padding: 0;
    }

    div,
    span {
        font-family: "Roboto";
    }

    #nav {
        background-color: black;

        a {
            color: white;
        }
    }

    html, 
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        background-color: black;
    }

    .body-black__left {
        position: absolute;
        z-index: 3;
        width: 50%;
        height: 100%;
        background-color: black;
    }

    .body-black__right {
        position: absolute;
        z-index: 3;
        width: 50%;
        height: 100%;
        background-color: black;
    }

    .body-container {
        height: 100%;
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
        background-color: black;
    }

    .body-img {
        position: absolute;
        background-image: url('../assets/img/app-bg.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        height: 100%;
        width: 100%;
        min-width: 414px;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;


        @media (max-width: 414px) {
        min-width: 414px;
        }

        @media (max-width: 320px) {
        min-width: 320px;
        }
    }

    .app {
        display: inline-block;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        min-width: 320px;
        max-width: 414px;
        z-index: 4;
    }

    .app::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(110px);
        width: 110px;
        height: 100%;
        background-color: black;
        z-index: 1;
    }

    .app::before {
        content: " ";
        position: absolute;
        top: 0;
        transform: translateX(-110px);
        width: 110px;
        height: 100%;
        background-color: black;
        z-index: 1;
    }
</style>
