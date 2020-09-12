<template>
    <section class="main__projects">
        <div class="main__projects-image">
            <p class="main__projects--header">
                <a name="Projects"> Projects </a>
            </p>

            <div class="main__projects-img img-1">
                <div class="main__photo-description">
                    <p class="main__photo-description--header"> PROJECT 1 </p>
                    <p class="main__photo-description--text"> Brief description </p>
                </div>
                <img 
                    class="main__projects-img"
                    src="../../assets/img/project-img-1.png" 
                    alt="error white mobile"
                />
            </div>
            <div class="main__projects-img img-2">
                <div class="main__photo-description">
                    <p class="main__photo-description--header"> PROJECT 2 </p>
                    <p class="main__photo-description--text"> Brief description </p>
                </div>
                <img 
                    class="main__projects-img"
                    src="../../assets/img/project-img-2.png" 
                    alt="error magazine"
                />
            </div>
            <div class="main__projects-img img-3">
                <div class="main__photo-description">
                    <p class="main__photo-description--header"> PROJECT 3 </p>
                    <p class="main__photo-description--text"> Brief description </p>
                </div>
                <img 
                    class="main__projects-img"
                    src="../../assets/img/project-img-3.png" 
                    alt="error page of sites"
                />
            </div>
            <div class="main__projects-img img-4">
                <div class="main__photo-description">
                    <p class="main__photo-description--header"> PROJECT 4 </p>
                    <p class="main__photo-description--text"> Brief description </p>
                </div>
                <img 
                    class="main__projects-img"
                    src="../../assets/img/project-img-4.png" 
                    alt="error laptop"
                />
            </div>
            <div class="main__projects-img img-5">
                <div class="main__photo-description">
                    <p class="main__photo-description--header"> PROJECT 5 </p>
                    <p class="main__photo-description--text"> Brief description </p>
                </div>
                <img 
                    class="main__projects-img"
                    src="../../assets/img/project-img-5.png" 
                    alt="error black mobile"
                />
            </div>
            <div class="main__projects-img img-6">
                <div class="main__photo-description">
                    <p class="main__photo-description--header"> PROJECT 6 </p>
                    <p class="main__photo-description--text"> Brief description </p>
                </div>
                <img 
                    class="main__projects-img"
                    src="../../assets/img/project-img-6.png" 
                    alt="error laptop"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .main__projects {
        display: flex;
        background-color: #F2F3F7;
        width: 100%;
        justify-content: center;
        padding: 115px 15px;

        @media (max-width: 980px) {
            font-size: 48px;
            line-height: 60px;
        }

        @media (max-width: 500px) {
            font-size: 24px;
            line-height: 30px;

        }

        .main__projects-image {
            display: grid;
            grid-template-columns: repeat(3, 0.9fr);
            grid-template-rows: 63px repeat(2, 440px);
            grid-template-areas: "main__projects--header main__projects--header main__projects--header"
                                "img-1 img-2 img-3"
                                "img-4 img-5 img-6";
            grid-gap: 40px;

            @media (max-width: 980px) {
                grid-template-columns: repeat(3, 0.9fr);
                grid-template-rows: 60px repeat(2, 361px);
            }

            @media (max-width: 768px) {
                grid-template-columns: repeat(2, 0.9fr);
                grid-template-rows: 60px repeat(3, 350px);
                grid-template-areas: "main__projects--header main__projects--header"
                                    "img-1 img-2"
                                    "img-3 img-4"
                                    "img-5 img-6";
            }

            @media (max-width: 500px) {
                grid-template-columns: 0.9fr;
                grid-template-rows: 30px repeat(6, 350px);
                grid-template-areas: "main__projects--header"
                                    "img-1"
                                    "img-2"
                                    "img-3"
                                    "img-4"
                                    "img-5"
                                    "img-6";
            }

            .main__projects--header {
                grid-area: main__projects--header;
                font-weight: bold;
                font-size: 50px;
                line-height: 63px;
                color: #2C2F3C;
            
                @media (max-width: 980px) {
                    font-size: 48px;
                    line-height: 60px;
                }
            
                @media (max-width: 500px) {
                    font-size: 24px;
                    line-height: 30px;
            
                }
            }
            
            .img-1 {
                grid-area: img-1;
            }
            
            .img-2 {
                grid-area: img-2;
            }
            
            .img-3 {
                grid-area: img-3;
            }
            
            .img-4 {
                grid-area: img-4;
            }
            
            .img-5 {
                grid-area: img-5;
            }
            
            .img-6 {
                grid-area: img-6;
            }
        }

        .main__photo-description {
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
        
        .main__projects-img:hover
        .main__photo-description {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            transition-duration: 1s;
            top: 0;
        }
        
        .main__photo-description--header {
            position: absolute;
            bottom: 68px;
            left: 24px;
            font-weight: bold;
            font-size: 24px;
            line-height: 30px;
            color: #FFFFFF;
        }
        
        .main__photo-description--text {
            position: absolute;
            bottom: 44px;
            left: 24px;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
        }
        
        .main__projects-img {
            position: relative;
            width: 100%;
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
    }
</style>