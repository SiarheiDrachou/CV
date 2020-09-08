<template>
    <section class="upper-section">
        <div 
            :class="card.class" 
            v-for="(card, id) in cardList" 
            :key="id" 
        >  
            <img :src="card.img" :alt="card.alt">

            <div class="photo-description">
                <p :class="card.textBorderBlueClass" v-text="card.textBorderBlue"></p>
                
                <p :class="card.textClass" v-text="card.text"></p>
                
                <h2 :class="card.textBoldClass" v-text="card.textBold"></h2> 
            </div>
        </div>         
    </section>
</template>

<script>
    export default {
        data: function() {
            return {
                cardList: [
                    {
                        class: `main__img--big img-1`,
                        alt: `gray car error`,
                        img: require(`../../assets/img/img--big.png`),
                        textBorderBlue: `Vehicle`,
                        textBorderBlueClass: `big-text--border-blue`,
                        text: `Rickie Baroch - June 6, 2019`,
                        textClass: `big-text`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                        textBoldClass: `big-text--bold`
                    },
                    {
                        class: `main__img--small img-2`,
                        alt: `yellow car error`,
                        img:  require(`../../assets/img/img--small-1.png`),
                        textBorderBlue: `Vehicle`,
                        textBorderBlueClass: `small-text--border-blue`,
                        text: `Rickie Baroch - June 6, 2019`,
                        textClass: `small-text`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                        textBoldClass: `small-text--bold`
                    },
                    {
                        class: `main__img--small img-3`,
                        alt: `white car error`,
                        img:  require(`../../assets/img/img--small-2.png`),
                        textBorderBlue: `Vehicle`,
                        textBorderBlueClass: `small-text--border-blue`,
                        text: `Rickie Baroch - June 6, 2019`,
                        textClass: `small-text`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                        textBoldClass: `small-text--bold`
                    },
                    {
                        class: `main__img--small img-4`,
                        alt: `blue car error`,
                        img:  require(`../../assets/img/img--small-3.png`),
                        textBorderBlue: `Vehicle`,
                        textBorderBlueClass: `small-text--border-blue`,
                        text: `Rickie Baroch - June 6, 2019`,
                        textClass: `small-text`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                        textBoldClass: `small-text--bold`
                    },
                    {
                        class: `main__img--small img-5`,
                        alt: `black car error`,
                        img:  require(`../../assets/img/img--small-4.png`),
                        textBorderBlue: `Vehicle`,
                        textBorderBlueClass: `small-text--border-blue`,
                        text: `Rickie Baroch - June 6, 2019`,
                        textClass: `small-text`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                        textBoldClass: `small-text--bold`
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .upper-section {
        display: grid;
        grid-template-columns: repeat(3, 370px);
        grid-template-rows: repeat(2, 265px);
        grid-template-areas: "img-1 img-2 img-3"
                             "img-1 img-4 img-5";
        grid-gap: 30px 30px;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 75px;

        @media (max-width: 1280px) {
            grid-template-columns: repeat(2, 370px);
            grid-template-rows: repeat(3, 265px);
            grid-template-areas: "img-1 img-2"
                                 "img-1 img-4"
                                 "img-3 img-5";
        }

        @media (max-width: 768px) {
            grid-template-columns: 370px;
            grid-template-rows: repeat(6, 265px);
            grid-template-areas: "img-1"
                                 "img-1"
                                 "img-2"
                                 "img-3"
                                 "img-4"
                                 "img-5";
        }

        .photo-description {
            position: absolute;
            top: 0;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-end;
            height: 100%;
            width: 100%;
            cursor: pointer;
            
            .small-text--border-blue {
                position: absolute;
                top: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                line-height: 16px;
                color: #FFFFFF;
                height: 22px;
                width: 62px;
                background-color: #4A90E2;
                border-radius: 3px;
                margin-left: 22px;

            }

            .small-text {
                font-size: 14px;
                line-height: 18px;
                color: #FFFFFF;
                margin-left: 20px;
                margin-bottom: 6px;
            }
            
            .small-text--bold {
                font-weight: bold;
                font-size: 26px;
                line-height: 36px;
                color: #FFFFFF;
                margin-left: 20px;
                margin-bottom: 20px;
            }

            .big-text--border-blue {
                position: absolute;
                top: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                line-height: 16px;
                color: #FFFFFF;
                height: 22px;
                width: 62px;
                background-color: #4A90E2;
                border-radius: 3px;
                margin-left: 22px;
            }

            .big-text {
                font-size: 14px;
                line-height: 18px;
                color: #FFFFFF;
                margin-left: 20px;
                margin-bottom: 6px;
            }

            .big-text--bold {
                font-size: 26px;
                line-height: 36px;
                color: #FFFFFF;
                margin-left: 20px;
                margin-bottom: 20px;
            }
        }
        
        .photo-description:hover {
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 5px;
            transition-duration: 0.3s;
            
        }

        .photo-description:hover
        .small-text--bold {
            text-decoration: underline;
        }

        .photo-description:hover
        .big-text--bold {
            text-decoration: underline;
        }

        .img-1 {
            position: relative;
            grid-area: img-1;
        }

        .img-2 {
            position: relative;
            grid-area: img-2;
        }

        .img-3 {
            position: relative;
            grid-area: img-3; 
        }

        .img-4 {
            position: relative;
            grid-area: img-4;
        }

        .img-5 {
            position: relative;
            grid-area: img-5;
        }
    }
</style>