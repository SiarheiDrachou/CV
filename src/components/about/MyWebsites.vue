<template>
    <div class="container">
        <h1 class="container__header">My websites</h1>

        <div class="container-img">
            <router-link 
                :to="mass.link"
                v-for="(mass, id) in massCard" 
                :key="id" 
                @click="clickLink(mass)"
                class="projects-img"
            >
                <div class="photo-description">
                    <p class="photo-description--header" v-text="mass.header"></p>
                    <p class="photo-description--text" v-text="mass.text"></p>
                </div>
                <img 
                    class="projects__img"
                    :src="mass.img" 
                />
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                massCard: [
                    {
                        link: '/Car-blog',
                        header: 'The first studies project Car-blog',
                        text: 'Studies project from Syntax school. Wrotes in november 2019. Used Html and scss.',
                        img: require(`../../assets/img/img--big.png`)
                    },
                    {
                        link: '/Company-landing',
                        header: 'The second studies project Company-landing',
                        text: 'Studies project from Syntax school. Wrotes in december 2019. Used Html and scss.',
                        img: require(`../../assets/img/project-img-2.png`)
                    },
                    {
                        link: '/Money-converter',
                        header: 'The third studies project Money-converter',
                        text: 'Studies project from Syntax school. Wrotes in december 2019. Used Html, Materialize and js.',
                        img: require(`../../assets/img/project-img-1.png`)
                    },
                    {
                        link: '/Picture-gallery',
                        header: 'The forth studies project Picture-gallery',
                        text: 'Studies project from Syntax school. Wrotes in january 2020. Used Html, Bootstrap and js.',
                        img: require(`../../assets/img/project-img-3.png`)
                    },
                    {
                        link: '/Website-questionnaire',
                        header: 'The first project on Vue js Website-questionnaire',
                        text: 'Wrotes in may 2020. Used Vue js framework, html5 and scss.',
                        img: require(`../../assets/img/compliance.jpg`)
                    },
                    {
                        link: '/Website-registration',
                        header: 'The second project on Vue js Website-registration',
                        text: 'Wrotes in july 2020. Used Vue js framework, html5 and scss.',
                        img: require(`../../assets/img/log_in.png`)
                    },
                    {
                        link: '/Contact-list',
                        header: 'Test project for a vacancy Frontend Developer on Vue js Contact-list',
                        text: 'Wrotes in september 2020. Used Vue js framework, html5 and scss.',
                        img: require(`../../assets/img/contact-list.png`)
                    },
                ]
            }
        },
        methods: {
            clickLink(mass) {
                console.log(mass);
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
        padding: 0 15px;
    }

    .container-img {
        display: flex;
        flex-wrap: wrap;
    }

    .container__header {
        width: 100%;
        margin-bottom: 50px;
        text-align: center;
    }

    .projects-img {
        position: relative;
        width: 30%;
        min-width: 150px;
        overflow: hidden;
        border-radius: 8px 8px 0px 0px;
        margin: 15px auto;
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
        top: 20px;
        left: 15px;
        font-weight: bold;
        font-size: 3vw;
        line-height: 45px;
        color: #FFFFFF;
    }
    
    .photo-description--text {
        position: absolute;
        bottom: 20px;
        left: 15px;
        font-size: 2vw;
        line-height: 35px;
        color: #FFFFFF;
    }
        
    .projects__img {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 8px 8px 0px 0px;
    }
</style>