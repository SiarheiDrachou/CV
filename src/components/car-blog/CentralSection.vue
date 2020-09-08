<template>
    <section class="main__central-section">
        <div 
            :class="card.class" 
            v-for="(card, id) in cardList" 
            :key="id" 
        >
            <div class="main__photo-description">
                <div class="main__section--text-container">
                    <p class="main__large-text--border-blue" v-text="card.textBorderBlue"></p>
                    
                    <h2 class="main__large-text--bold" v-text="card.textBold"></h2>
                    
                    <p class="main__large-text--italic" v-text="card.textItallic"></p>

                    <p class="main__large-text" v-text="card.text"></p>
                </div>
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
                        class: `main__img--large img-6`,
                        textBorderBlue: `Vehicle`,
                        text: `
                            Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantim, totam rem 
                            sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem.
                        `,
                        textItallic: `Rickie Baroch - June 6, 2019 `,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    },
                    {
                        class: `main__img--large img-7`,
                        textBorderBlue: `Vehicle`,
                        text: `
                            Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantim, totam rem 
                            sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem.
                        `,
                        textItallic: `Rickie Baroch - June 6, 2019 `,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    },
                    {
                        class: `main__img--large img-8`,
                        textBorderBlue: `Vehicle`,
                        text: `
                            Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantim, totam rem 
                            sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem.
                        `,
                        textItallic: `Rickie Baroch - June 6, 2019 `,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    },
                    {
                        class: `main__img--large img-9`,
                        textBorderBlue: `Vehicle`,
                        text: `
                            Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantim, totam rem 
                            sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem.
                        `,
                        textItallic: `Rickie Baroch - June 6, 2019 `,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    },
                    {
                        class: `main__img--large img-10`,
                        textBorderBlue: `Vehicle`,
                        text: `
                            Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantim, totam rem 
                            sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem.
                        `,
                        textItallic: `Rickie Baroch - June 6, 2019 `,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main__central-section {
        display: grid;
        grid-template-columns: repeat(2, 370px);
        grid-template-rows: repeat(10, 250px);
        grid-template-areas: "img-6 img-6"
                            "img-6 img-6"
                            "img-7 img-7"
                            "img-7 img-7"
                            "img-8 img-8"
                            "img-8 img-8"
                            "img-9 img-9"
                            "img-9 img-9"
                            "img-10 img-10"
                            "img-10 img-10";
        grid-gap: 60px 30px;
        justify-content: center;

        @media (max-width: 1280px) {
            grid-template-columns: repeat(2, 370px);
            grid-template-rows: repeat(10, 250px);
            grid-template-areas: "img-6 img-6"
                                "img-6 img-6"
                                "img-7 img-7"
                                "img-7 img-7"
                                "img-8 img-8"
                                "img-8 img-8"
                                "img-9 img-9"
                                "img-9 img-9"
                                "img-10 img-10"
                                "img-10 img-10";
        }

        @media (max-width: 768px) {
            grid-template-columns: 370px;
            grid-template-rows: repeat(10, 292px);
            grid-template-areas: "img-6"
                                "img-6"
                                "img-7"
                                "img-7"
                                "img-8"
                                "img-8"
                                "img-9"
                                "img-9"
                                "img-10"
                                "img-10";
            grid-gap: 48px 30px;
        }

        .main__photo-description {
            position: relative;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-end;
            height: 100%;
            width: 100%;
            cursor: pointer;
        }
        
        .main__photo-description:hover
        .main__section--text-container {
            border-radius: 5px;
            transition-duration: 0.3s;
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.5);
        }

        .main__photo-description:hover
        .main__large-text--bold {
            text-decoration: underline;
        }

        .main__section--text-container {
            position: absolute;
            top: 310px;
            left: 20px;
            width: 726px;
            height: 250px;
            background-color: #FFFFFF;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;

            @media (max-width: 768px) {
                left: 10px;
                width: 350px;
                height: 324px;
            }
        }

        .main__large-text--border-blue {
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
            margin-top: 30px;
            margin-left: 30px;

            @media (max-width: 768px) {
                margin-left: 15px;
            }
        }

        .main__large-text--bold {
            font-size: 25px;
            line-height: 28px;
            color: #171717;
            margin-left: 30px;
            margin-top: 20px;

            @media (max-width: 768px) {
                font-size: 18px;
            }
        }

        .main__large-text--italic {
            font-style: italic;
            font-size: 14px;
            line-height: 18px;
            color: #666666;
            margin-left: 30px;
            margin-top: 15px;
        }

        .main__large-text {
            font-size: 14px;
            line-height: 24px;
            color: #666666;
            margin-left: 30px;
            margin-top: 15px;
            width: 610px;

            @media (max-width: 768px) {
                width: 295px;
            }
        }

        .img-6 {
            position: relative;
            grid-area: img-6;
            background-image: url("../../assets/img/img--large-1.png");
            background-repeat: no-repeat;
        }

        .img-7 {
            position: relative;
            grid-area: img-7;
            background-image: url("../../assets/img/img--large-2.png");
            background-repeat: no-repeat;
        }

        .img-8 {
            position: relative;
            grid-area: img-8;
            background-image: url("../../assets/img/img--large-3.png");
            background-repeat: no-repeat;
        }

        .img-9 {
            position: relative;
            grid-area: img-9;
            background-image: url("../../assets/img/img--large-4.png");
            background-repeat: no-repeat;
        }

        .img-10 {
            position: relative;
            grid-area: img-10;
            background-image: url("../../assets/img/img--large-5.png");
            background-repeat: no-repeat;
        }
    }
</style>