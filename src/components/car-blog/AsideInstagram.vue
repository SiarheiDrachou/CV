<template>
    <section class="aside-instagram">
        <h3 class="instagram-header"> Instagram </h3>
        
        <div 
            :class="card.class"
            v-for="(card, id) in cardList" 
            :key="id"
        > 
            <img 
                :src="card.img" 
                :alt="card.alt"
            /> 
        </div>

        <button class="instagram-button">
            <img 
                class="instagram-icon"
                src="../../assets/img/instagram.svg" 
                alt="error CombinedShape" 
            />
            View instagram
        </button>
    </section>
</template>

<script>
    export default {
        data: function() {
            return {
                cardList: [
                    {
                        class: `instagram-img-1`,
                        alt: `error red truck`,
                        img: require(`../../assets/img/instagram-img-1.svg`)
                    },
                    {
                        class: `instagram-img-2`,
                        alt: `error orange car`,
                        img:  require(`../../assets/img/instagram-img-2.svg`)
                    },
                    {
                        class: `instagram-img-3`,
                        alt: `error white SUV`,
                        img:  require(`../../assets/img/instagram-img-3.svg`)
                    },
                    {
                        class: `instagram-img-4`,
                        alt: `error blue car`,
                        img:  require(`../../assets/img/instagram-img-4.svg`)
                    },
                    {
                        class: `instagram-img-5`,
                        alt: `error orange hood`,
                        img:  require(`../../assets/img/instagram-img-5.svg`)
                    },
                    {
                        class: `instagram-img-6`,
                        alt: `error gray car`,
                        img:  require(`../../assets/img/instagram-img-6.svg`)
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .aside-instagram {
        width: 270px;
        height: 498px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 60px;

        .instagram-header {
            width: 360px;
            line-height: 21px;
            margin: 0;
            margin-bottom: 25px;
        }

        .instagram-button {
            background-color: #232323;
            border-radius: 3px;
            color: white;
            width: 270px;
            height: 50px;
            font-weight: bold;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            cursor: pointer;
        }
        
        .instagram-button:hover {
            background-color: #5C5C5C;
        }

        .instagram-button:focus {
            background: #232323;
            border: 2px dashed rgba(255, 255, 255, 0.5);
        }

        .instagram-button:active {
            background-color: #0E0E0E;
            border: none;
        }

        .instagram-icon {
            margin-right: 10px;
        }
    }
</style>