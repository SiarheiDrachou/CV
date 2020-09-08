<template>
    <div class="footer__section-1">
        <div class="footer__logo">
            <span class="footer__logo-text"> Premium </span>
            <div class="footer__logo-text--border-blue"> CAR </div>
        </div>

        <p class="footer__text"> 
            Short description about the the company lorem Ipsum is simply 
            dummy text of the printing and typesetting industry.
        </p>

        <h3 class="footer__section-1--header"> Keep in touch </h3>
        
        <div class="footer__social-network">
            <button class="footer__img-social-network">
                <img 
                    class="footer_img"
                    src="../../assets/img/facebook.svg"
                    alt="error facebook logo" 
                />
            </button>

            <button class="footer__img-social-network">
                <img 
                    class="footer_img"
                    src="../../assets/img/twitter.svg" 
                    alt="error twitter logo"
                />
            </button>

            <button class="footer__img-social-network">
                <img  
                    class="footer_img"
                    src="../../assets/img/pinterest.svg" 
                    alt="error pinterest logo" 
                />
            </button>

            <button class="footer__img-social-network">
                <img  
                    class="footer_img"
                    src="../../assets/img/google.svg" 
                    alt="error googleplus logo"
                />
            </button>

            <button class="footer__img-social-network">
                <img 
                    class="footer_img"
                    src="../../assets/img/instagram.svg" 
                    alt="error instagram logo"
                />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer__section-1 {
        grid-area: footer__section-1;
        margin-top: 62px;

        @media (max-width: 768px) {
            margin-top: 50px;
        }
        
        .footer__logo {
            display: flex;

            .footer__logo-text {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .footer__logo-text--border-blue {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 39px;
                height: 23px;
                background-color: #4A90E2;
                border-radius: 3px;
                margin-left: 7px;
            }
        }
        .footer__text {
            line-height: 22px;
            width: 270px;
            height: 66px;
            margin-top: 30px;
            margin-bottom: 48px;
            color: #CECECE;
        }

        .footer__section-1--header {
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 23px;
        }

        .footer__social-network {
            display: flex;
            height: 34px;
            width: 230px;

            .footer__img-social-network {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 15px;
                height: 34px;
                width: 34px;
                background-color: #343434;
                border: none;
                flex-wrap: nowrap;
                cursor: pointer;

                .footer__img-social-network--plus {
                    margin-left: 2px;
                }
            }

            .footer__img-social-network:hover {
                background-color: #777777;
            }

            .footer__img-social-network:active {
                background-color: #FFFFFF;
            }

            .footer__img-social-network:active
            .footer_img {
                filter: invert(1);
            }
        }
    } 
</style>