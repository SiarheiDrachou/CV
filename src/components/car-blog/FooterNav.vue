<template>
    <nav class="footer__nav">
        <section class="footer__copyright">
            <span> &copy; 2019 All rights reserved </span>
        </section>

        <ul class="footer__list-menu">
            <li class="footer__menu-item">
                <a class="footer__link" href="#"> Home </a>
            </li>
            <li class="footer__menu-item">
                <a class="footer__link" href="#"> Recipes </a>
            </li>
            <li class="footer__menu-item">
                <a class="footer__link" href="#"> Article </a>
            </li>
            <li class="footer__menu-item">
                <a class="footer__link" href="#"> Contact </a>
            </li>
            <li class="footer__menu-item">
                <a class="footer__link" href="#"> Purchase </a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .footer__nav {
        display: grid;
        grid-template-columns: repeat(3, 370px);
        grid-template-rows: 94px;
        grid-template-areas: "footer__copyright . footer__list-menu";                    
        grid-gap: 30px;
        list-style-type: none;
        height: 94px;
        background-color: #000000;
        justify-content: center;
        align-items: center;

        @media (max-width: 1280px) {
            grid-template-columns: 270px 293px;
            grid-template-columns: 270px 309px;
            grid-template-rows: 94px;
            grid-template-areas: "footer__copyright footer__list-menu";
        }

        @media (max-width: 768px) {
            grid-template-columns: 309px;
                grid-template-rows: repeat(2, 18px);
                grid-template-areas: "footer__list-menu"
                                    "footer__copyright";
                padding-top: 24px;
                grid-gap: 24px;
                height: 108px;
        }

        .footer__copyright {
            display: flex;
            justify-content: space-between;
            align-items: center;
            grid-area: footer__copyright;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;

            @media (max-width: 1280px) {
                grid-template-columns: 270px 293px;
                grid-template-columns: 270px 309px;
                grid-template-rows: 94px;
                grid-template-areas: "footer__copyright footer__list-menu";
            }
        
            @media (max-width: 768px) {
                justify-content: center;
            }
        }

        .footer__list-menu {
            grid-area: footer__list-menu;
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
            padding: 0;
            width: 370px;

            @media (max-width: 1280px) {
                width: 309px;
                margin: 0;
            }

            @media (max-width: 768px) {
                justify-content: space-between;
            }

            .footer__link:hover {
                border-bottom: 2px solid #FFFFFF;
            }

            .footer__link:focus  {
                color: #000000;
                background-color:rgba(255, 255, 255, 0.8);
            }

            .footer__menu-item:active .footer__link {
                border-bottom: 2px solid #FFFFFF;
                font-weight: bold;
                color: #FFFFFF;
                background-color:#000000;
            }

            .footer__link {
                color: #FFFFFF;
                text-decoration: none;
                cursor: pointer;
            }
        }
    }
</style>