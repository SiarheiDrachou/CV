<template>
    <header class="header">
        <div class="header__company-name"> COMPANY NAME </div>
        
        <nav class="header__nav">
            <img 
                class="close-img"
                src="../../assets/img/close.png" 
                alt="error close img"
                @click="dropMenu"
                v-if="isClick"
            />
            
            <ul class="header__list-menu" :class="{'header__list-menu--active': isClick, 'header__list-menu': !isClick}">
                <li class="header__menu-item">
                    <a class="header__link" href="#WhatWeDo"> What we do </a>
                </li>
                <li class="header__menu-item">
                    <a class="header__link" href="#OurApproach"> Our approach </a>
                </li>
                <li class="header__menu-item">
                    <a class="header__link" href="#Technologies"> Technologies </a>
                </li>
                <li class="header__menu-item">
                    <a class="header__link" href="#Projects"> Projects </a>
                </li>
                <li class="header__menu-item">
                    <a class="header__link" href="#Contacts"> Contacts </a>
                </li>
            </ul>
        </nav>

        <div class="header__drop-down-menu" @click="dropMenu" v-if="!isClick && !isView">
            <div class="header__drop-down-menu--item"></div>
            <div class="header__drop-down-menu--item"></div>
            <div class="header__drop-down-menu--item"></div>
        </div>

        <section class="header__bg-image">
            <p class="bg-image--text-header"> Company landing page </p>

            <p class="bg-image--text"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum nostrum quod officiis delectus quidem accusamus. 
            </p>
        </section>
    </header>
</template>

<script>
    export default {
        data: function() {
            return {
                isClick: false,
                isView: false,
                innerWidth: null
            }
        },
        methods: {
            dropMenu() {
                this.isClick = !this.isClick;
            },
            windowWidth() {
                this.innerWidth = window.innerWidth;

                if(this.innerWidth > 980) {
                    this.isView = true;
                }
                else {
                    this.isView = false;
                }
            }
        },
        mounted() {
            this.windowWidth();

            window.onresize = () => {
                this.windowWidth();
            };
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: 60px 834px;
        grid-template-areas: "header__company-name header__list-menu"
                            "header__bg-image header__bg-image";
        align-items: center;
        padding: 0;
        margin: 0;
        color: white;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14),
                    0px 3px 1px rgba(0, 0, 0, 0.12),
                    0px 1px 5px rgba(0, 0, 0, 0.2);
        background-color: #4D636F;
        overflow: hidden;
        
        @media (max-width: 980px) {
            grid-template-rows: 60px 659px;
            grid-template-areas: "header__company-name header_drop-down-menu"
                                "header__bg-image header__bg-image";
        }

        @media (max-width: 768px) {
            grid-template-rows: 60px 657px;
            grid-template-areas: "header__company-name header_drop-down-menu"
                                "header__bg-image header__bg-image";
        }

        .header__nav {
            background-color: #4D636F !important;
        }
        
        .header__company-name {
            grid-area: header__company-name;
            display: flex;
            align-items: center;
            margin-left: 48px;
            font-size: 24px;
            line-height: 30px;
        }
        
        .header__list-menu {
            grid-area: header__list-menu;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 48px;
            padding: 0;
            list-style-type: none;
        
            @media (max-width: 980px) {
                grid-area: none;
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                top: 0;
                right: -300px;
                margin: 0;
                margin-top: 60px;
                list-style-type: none;
                height: 50%;
                width: 300px;
                z-index: 3;
                background-color: rgb(77, 99, 111);
                transition-duration: 1s;
            }

            .header__link {
                color: white;
                text-decoration: none;
            }

            .header__link:hover {
                border-bottom: 2px solid #A1C5D9;
            }

            .header__link:focus {
                color: #A1C5D9;
                border-bottom: none;
            }

            .header__link:active {
                color: #FFFFFF;
                border-bottom: 2px solid #FFFFFF;
            }
        }

        .header__list-menu--active {
            grid-area: none;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            top: 0;
            right: 0;
            margin: 0;
            margin-top: 60px;
            list-style-type: none;
            height: 50%;
            width: 300px;
            z-index: 3;
            background-color: rgb(77, 99, 111);
            transition-duration: 1s;
        }
        
        .header__drop-down-menu {
            position: absolute;
            top: 21px;
            right: 20px;
            width: 28px;
            height: 19px;
            margin: 0;
            cursor: pointer;
        }
        
        .header__drop-down-menu--item {
            height: 2px;
            width: 26px;
            background-color: white;
            margin-bottom: 6px;
        }
        
        .header__bg-image {
            position: relative;
            grid-area: header__bg-image;
            background-image: url('../../assets/img/bg-image.png');
            background-size: cover;
            height: 834px;
            width: 100%;
            display: flex;
            justify-content: center;
        
            @media (max-width: 980px) {
                height: 659px;
            }
        
            @media (max-width: 768px) {
                height: 657px;
            }
        
        }
        
        .bg-image--text-header {
            position: absolute;
            top: 310px;
            font-weight: bold;
            font-size: 50px;
            line-height: 63px;
        
            @media (max-width: 980px) {
                top: 223px;
            }
        
            @media (max-width: 768px) {
                top: 229px;
                font-size: 32px;
                line-height: 40px;
            }
        
            @media (max-width: 500px) {
                top: 223px;
                font-size: 24px;
                line-height: 30px;
            }
        }
        
        .bg-image--text {
            position: absolute;
            top: 403px;
            font-size: 24px;
            line-height: 30px;
            width: 771px;
            text-align: center;
        
            @media (max-width: 980px) {
                top: 316px;
                line-height: 30px;
            }
        
            @media (max-width: 768px) {
                top: 293px;
                font-size: 20px;
                line-height: 37px;
                width: 529px;
            }
        
            @media (max-width: 500px) {
                top: 289px;
                font-size: 16px;
                line-height: 28px;
                width: 345px;
            }
        }

        .close-img {
            position: absolute;
            top: 75px;
            right: 25px;
            z-index: 4;
            filter: invert(1);
            width: 20px;
            cursor: pointer;
            transition-duration: 2s;
        }
    }
</style>