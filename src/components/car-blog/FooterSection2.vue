<template>
    <div class="footer__section-2">
        <h3 class="footer__section-2--header"> Recent Posts </h3>

        <div class="footer__section-2-img">
            <div class="footer__section-2--img-1">
                <img 
                    src="../../assets/img/footer-img-1.svg" 
                    alt="error yellow car" 
                />
                
                <div class="footer__photo-description">
                    <h4 class="footer__text--bold">
                        One of Saturn's largest rings may be the newest 
                    </h4>

                    <p class="footer__text--italic">
                        Rickie Barock - June 6, 2019 
                    </p>
                </div>
            </div>

            <div class="footer__section-2--img-2">
                <img 
                    src="../../assets/img/footer-img-2.svg" 
                    alt="error white car" 
                />

                <div class="footer__photo-description">
                    <h4 class="footer__text--bold">
                        One of Saturn's largest rings may be the newest 
                    </h4>

                    <p class="footer__text--italic">
                        Rickie Barock - June 6, 2019 
                    </p>
                </div>
            </div>

            <div class="footer__section-2--img-3">
                <img 
                    src="../../assets/img/footer-img-3.svg" 
                    alt="error red car" 
                />

                <div class="footer__photo-description">
                    <h4 class="footer__text--bold">
                        One of Saturn's largest rings may be the newest 
                    </h4>

                    <p class="footer__text--italic">
                        Rickie Barock - June 6, 2019 
                    </p>
                </div>
            </div>
        </div>  
    </div>
</template>

<style lang="scss" scoped>
    .footer__section-2 {
        grid-area: footer__section-2;

        .footer__section-2--header {
            margin-top: 62px;
            margin-bottom: 28px;
            font-size: 20px;

            @media (max-width: 768px) {
                margin-top: 0;
            }
        }

        .footer__section-2-img {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 360px;

            .footer__section-2--img-1,
            .footer__section-2--img-2,
            .footer__section-2--img-3 {
                position: relative;
                border-radius: 3px;
                height: 95px;
    
                .footer__photo-description {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }

                .footer__photo-description:hover
                .footer__text--bold {
                    text-decoration: underline;
                }

                .footer__text--bold {
                    position: absolute;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 26px;
                    left: 115px;
                    top: 6px;
                    width: 178px;
                    height: 49px;
                    margin: 0;
                }
    
                .footer__text--italic {
                    position: absolute;
                    font-style: italic;
                    color: #CECECE;
                    left: 115px;
                    top: 68px;
                    margin: 0;
                }
            }
        }
    }
</style>