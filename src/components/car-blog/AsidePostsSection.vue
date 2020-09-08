<template>
    <section class="aside-posts">
        <div 
            class="aside-img" 
            v-for="(card, id) in cardList" 
            :key="id" 
        >
            <img 
                :class="card.class" 
                :src="card.img" 
                :alt="card.alt" 
            />

            <p class="aside-text--border-blue" v-text="card.textBorderBlue"></p>
            
            <div class="photo-description">
                <p class="aside-text--bold" v-text="card.textBold"></p>
                <p class="aside-text--italic" v-text="card.textItallic"></p>
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
                        class: `aside-img-1`,
                        alt: `error interior car`,
                        img: require(`../../assets/img/aside-img-1.svg`),
                        textBorderBlue: `Vehicle`,
                        textItallic: `Rickie Baroch - June 6, 2019`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    },
                    {
                        class: `aside-img-2`,
                        alt: `error black SUV`,
                        img:  require(`../../assets/img/aside-img-2.svg`),
                        textBorderBlue: `Vehicle`,
                        textItallic: `Rickie Baroch - June 6, 2019`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    },
                    {
                        class: `aside-img-3`,
                        alt: `error white trunk`,
                        img:  require(`../../assets/img/aside-img-3.svg`),
                        textBorderBlue: `Vehicle`,
                        textItallic: `Rickie Baroch - June 6, 2019`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    },
                    {
                        class: `aside-img-4`,
                        alt: `error red SUV`,
                        img:  require(`../../assets/img/aside-img-4.svg`),
                        textBorderBlue: `Vehicle`,
                        textItallic: `Rickie Baroch - June 6, 2019`,
                        textBold: `One of Saturn's Largest rings may be newer than anyone`,
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .aside-posts {
    margin-bottom: 59px;
    height: 1352px;

    @media (max-width: 1280px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 604px;
        height: 684px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        width: 270px;
        height: 1352px;
    }

    .photo-description {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        cursor: pointer;
    }

    .photo-description:hover
    .aside-text--bold {
        text-decoration: underline;
    }
    
    .aside-img {
        position: relative;
        width: 270px;
        height: 299px;
        margin-bottom: 37px;

        .aside-img-1,
        .aside-img-2,
        .aside-img-3,
        .aside-img-4 {
            position: relative;
        }

        .aside-text--border-blue {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            font-size: 12px;
            left: 20px;
            top: 20px;
            width: 62px;
            height: 22px;
            color: white;
            background-color: #4A90E2;
            border-radius: 3px;
        }

        .aside-text--bold {
            position: absolute;
            margin: 0;
            font-size: 20px;
            line-height: 28px;
            left: 0;
            top: 215px;
            color: #171717;
            font-weight: bold;
        }

        .aside-text--italic {
            position: absolute;
            margin: 0;
            left: 0;
            top: 281px;
            font-style: italic;
            font-size: 14px;
            color: #666666;
        }

        .aside-text--bold:hover {
            text-decoration: underline;
        }
    }
}
</style>