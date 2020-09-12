<template>
    <section class="main__our-approach">
        <p class="main__our-approach--header"> 
            <a name="OurApproach"> Our approach </a>
        </p>

        <div class="main__our-approach--item-1">
            <p class="main__our-approach--text-bold"> Change welcomed by organisation </p>
            <p class="main__our-approach--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis,
                fringilla et quam. Duis eleifend turpis velit, ut luctus 
                risus viverra varius. Nulla id dolor vel dui dictum mattis.
                Mauris id placerat arcu.
            </p>
        </div>

        <div class="main__our-approach--item-2">
            <img src="../../assets/img/approach-img-1.svg" alt="error the calendar" />
        </div>

        <div class="main__our-approach--item-3">
            <img src="../../assets/img/approach-img-2.svg" alt=" error the yeys" />
        </div>

        <div class="main__our-approach--item-4">
            <p class="main__our-approach--text-bold"> Maintaining the brand focus </p>
            <p class="main__our-approach--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis,
                fringilla et quam. Duis eleifend turpis velit, ut luctus 
                risus viverra varius. Nulla id dolor vel dui dictum mattis.
                Mauris id placerat arcu.
            </p>
        </div>

        <div class="main__our-approach--item-5">
            <p class="main__our-approach--text-bold"> Expertise and talent </p>
            <p class="main__our-approach--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis,
                fringilla et quam. Duis eleifend turpis velit, ut luctus 
                risus viverra varius. Nulla id dolor vel dui dictum mattis.
                Mauris id placerat arcu. Nulla tellus leo, vulputate in 
                magna tincidunt.
            </p>
        </div>

        <div class="main__our-approach--item-6">
            <img src="../../assets/img/approach-img-3.svg" alt="error skills" />
        </div>

        <div class="main__our-approach--item-7">
            <img src="../../assets/img/approach-img-4.svg" alt="error blockchain" />
        </div>

        <div class="main__our-approach--item-8">
            <p class="main__our-approach--text-bold"> Pragmatic and proven methods </p>
            <p class="main__our-approach--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis,
                fringilla et quam. Duis eleifend turpis velit, ut luctus 
                risus viverra varius. Nulla id dolor vel dui dictum mattis.
                Mauris id placerat arcu.Nulla tellus leo, vulputate in 
                magna tincidunt.
            </p>
        </div>

        <div class="main__our-approach--item-9">
            <p class="main__our-approach--text-bold"> Corporate communications </p>
            <p class="main__our-approach--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis,
                fringilla et quam. Duis eleifend turpis velit, ut luctus 
                risus viverra varius. Nulla id dolor vel dui dictum mattis.
            </p>
        </div>

        <div class="main__our-approach--item-10">
            <img src="../../assets/img/approach-img-5.svg" alt="error conversation" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .main__our-approach {
        display: grid;
        grid-template-columns: repeat(2, 460px);
        grid-template-areas: "main__our-approach--header ."
                            "main__our-approach--item-1 main__our-approach--item-2"
                            "main__our-approach--item-3 main__our-approach--item-4"
                            "main__our-approach--item-5 main__our-approach--item-6"
                            "main__our-approach--item-7 main__our-approach--item-8"
                            "main__our-approach--item-9 main__our-approach--item-10";
        grid-gap: 40px;
        justify-content: center;
        background-color: white;
        padding: 126px 15px;
        color: #3B424A;

        @media (max-width: 980px) {
            grid-template-columns: repeat(3, 0.9fr);
            grid-template-areas: "main__our-approach--header main__our-approach--header main__our-approach--header"
                                "main__our-approach--item-1 main__our-approach--item-1 main__our-approach--item-2"
                                "main__our-approach--item-3 main__our-approach--item-4 main__our-approach--item-4"
                                "main__our-approach--item-5 main__our-approach--item-5 main__our-approach--item-6"
                                "main__our-approach--item-7 main__our-approach--item-8 main__our-approach--item-8"
                                "main__our-approach--item-9 main__our-approach--item-9 main__our-approach--item-10";
            padding: 111px 15px;
        }

        @media (max-width: 768px) {
            grid-template-columns: minmax(499px, 589px);
            grid-template-areas: "main__our-approach--header"
                                "main__our-approach--item-2" 
                                "main__our-approach--item-1"
                                "main__our-approach--item-3"
                                "main__our-approach--item-4"
                                "main__our-approach--item-6"
                                "main__our-approach--item-5"
                                "main__our-approach--item-7"
                                "main__our-approach--item-8"
                                "main__our-approach--item-10" 
                                "main__our-approach--item-9";
            padding: 66px 15px;
        }

        @media (max-width: 500px) {
            grid-template-columns: 1fr;
            grid-template-rows: 30px repeat(10, 180px);
            grid-template-areas: "main__our-approach--header"
                                "main__our-approach--item-2" 
                                "main__our-approach--item-1"
                                "main__our-approach--item-3"
                                "main__our-approach--item-4"
                                "main__our-approach--item-6"
                                "main__our-approach--item-5"
                                "main__our-approach--item-7"
                                "main__our-approach--item-8"
                                "main__our-approach--item-10" 
                                "main__our-approach--item-9";
            padding: 48px 15px;
        }

        .main__our-approach--header {
            grid-area: main__our-approach--header;
            font-weight: bold;
            font-size: 50px;
            line-height: 63px;
        
            @media (max-width: 980px) {
                font-size: 48px;
                line-height: 60px;
            }
        
            @media (max-width: 768px) {
                font-size: 36px;
                line-height: 45px;
        
            }
        
            @media (max-width: 500px) {
                font-size: 24px;
                line-height: 30px;
            }
        }
        
        .main__our-approach--item-1 {
            grid-area: main__our-approach--item-1;
        }
        
        .main__our-approach--item-2 {
            grid-area: main__our-approach--item-2;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .main__our-approach--item-3 {
            grid-area: main__our-approach--item-3;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .main__our-approach--item-4 {
            grid-area: main__our-approach--item-4;
        }
        
        .main__our-approach--item-5 {
            grid-area: main__our-approach--item-5;
        }
        
        .main__our-approach--item-6 {
            grid-area: main__our-approach--item-6;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .main__our-approach--item-7 {
            grid-area: main__our-approach--item-7;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .main__our-approach--item-8 {
            grid-area: main__our-approach--item-8;
        }
        
        .main__our-approach--item-9 {
            grid-area: main__our-approach--item-9;
        }
        
        .main__our-approach--item-10 {
            grid-area: main__our-approach--item-10;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .main__our-approach--text {
            font-weight: 300;
            font-size: 24px;
            line-height: 32px;
        
            @media (max-width: 980px) {
                font-size: 20px;
                line-height: 32px;
            }
        
            @media (max-width: 500px) {
                font-size: 14px;
                line-height: 26px;
            }
        }
        
        .main__our-approach--text-bold {
            font-weight: bold;
            font-size: 24px;
            line-height: 30px;
            margin-bottom: 18px;
        
            @media (max-width: 980px) {
                margin-bottom: 17px;
            }
        
            @media (max-width: 768px) {
                font-size: 20px;
                line-height: 25px;
                margin-bottom: 16px;
            }
        
            @media (max-width: 500px) {
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 15px;
            }
        }
    }
</style>