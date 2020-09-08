<template>
    <div class="container">
        <h1 class="container__header">My websites</h1>

        <router-link 
            :to="mass.link"
            v-for="(mass, id) in massCard" 
            :key="id" 
            class="projects-img"
        >
            <div class="photo-description">
                <p class="photo-description--header" v-text="mass.header"> PROJECT 1 </p>
                <p class="photo-description--text" v-text="mass.text"> Brief description </p>
            </div>
            <img 
                class="projects__img"
                :src="mass.img" 
            />
        </router-link>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                massCard: [
                    {
                        link: '/Car-blog',
                        header: 'The first studies project',
                        text: 'Studies project from Syntax school. Wrotes in november 2019. Used Html and scss.',
                        img: require(`../../assets/img/img--large-3.png`)
                    },
                    {
                        link: '/Company-landing',
                        header: 'The second studies project',
                        text: 'Studies project from Syntax school. Wrotes in december 2019. Used Html and scss.',
                        img: require(`../../assets/img/project-img-2.png`)
                    },
                    {
                        link: '/Money-converter',
                        header: 'The third studies project',
                        text: 'Studies project from Syntax school. Wrotes in december 2019. Used Html, Materialize and js.',
                        img: require(`../../assets/img/project-img-1.png`)
                    },
                    {
                        link: '/Picture-gallery',
                        header: 'The forth studies project',
                        text: 'Studies project from Syntax school. Wrotes in january 2020. Used Html, Bootstrap and js.',
                        img: require(`../../assets/img/project-img-3.png`)
                    },
                    {
                        link: '/Website-questionnaire',
                        header: 'The first project on Vue js',
                        text: 'Wrotes in may 2020. Used Vue js framework, html5 and scss.',
                        img: require(`../../assets/img/compliance.jpg`)
                    },
                    {
                        link: '/Website-registration',
                        header: 'The second project on Vue js',
                        text: 'Wrotes in july 2020. Used Vue js framework, html5 and scss.',
                        img: require(`../../assets/img/registration.jpg`)
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }

    .container__header {
        width: 100%;
        margin-bottom: 50px;
        text-align: center;
    }

    .projects-img {
        position: relative;
        width: 30%;
        height: 440px;
        overflow: hidden;
        border-radius: 8px 8px 0px 0px;
    
        @media (max-width: 980px) {
            height: 361px;
        }
    
        @media (max-width: 500px) {
            height: 350px;
        }
    }

    .photo-description {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 100%;
        width: 100%;
        height: 100%;
        font-size: 48px;
        background-color: rgba(227, 27, 75, 0.6);
        border-radius: 8px 8px 0px 0px;
        color: white;
        opacity: 0;
        z-index: 2;
    }
    
    .projects-img:hover
    .photo-description {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition-duration: 1s;
        top: 0;
    }
        
    .photo-description--header {
        position: absolute;
        bottom: 108px;
        left: 24px;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #FFFFFF;
    }
    
    .photo-description--text {
        position: absolute;
        bottom: 44px;
        left: 24px;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
        
    .projects__img {
        position: relative;
        width: 100%;
        overflow: hidden;
        border-radius: 8px 8px 0px 0px;
    
        @media (max-width: 980px) {
            height: 361px;
        }
    
        @media (max-width: 500px) {
            height: 350px;
        }
    }
</style>