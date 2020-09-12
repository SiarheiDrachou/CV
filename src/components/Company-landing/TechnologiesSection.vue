<template>
    <section class="main__technologies">
        <div class="main__technologies--list">
            <p class="main__technologies--header technologies--item-1"> 
                <a name="Technologies"> Technologies </a>
            </p>

            <p class="main__technologies-text--bold technologies--item-2"> Software development </p>
            <p class="main__technologies-text technologies--item-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis, fringilla
                et quam.
            </p>

            <p class="main__technologies-text--bold technologies--item-4"> Automation </p>
            <p class="main__technologies-text technologies--item-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis, fringilla
                et quam. Duis eleifend turpis velit, ut luctus risus viverra
                varius. 
            </p>

            <p class="main__technologies-text--bold technologies--item-6"> Cloud </p>
            <p class="main__technologies-text technologies--item-7">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Suspendisse ipsum lectus.
            </p>

            <p class="main__technologies-text--bold technologies--item-8"> DevOps </p>
            <p class="main__technologies-text technologies--item-9">
                <strong>First:</strong> Lorem ipsum dolor sit amet consectetur
                adipiscing elit. Suspendisse ipsum lectus, tincidunt sed 
                viverra quis.
                <br />
                <strong>Second:</strong> Lorem ipsum dolor sit amet consectetur
                adipiscing elit. Suspendisse ipsum lectus, tincidunt sed 
                viverra quis, fringilla et quam.
            </p>

            <p class="main__technologies-text--bold technologies--item-10"> Agile consulting </p>
            <p class="main__technologies-text technologies--item-11">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Suspendisse ipsum lectus, tincidunt sed viverra quis, fringilla
                et quam. Duis eleifend turpis velit, ut luctus risus viverra
                varius. Nulla iddolor vel dui dictum mattis.
            </p>

            <p class="main__technologies-text--bold technologies--item-12"> Digital transformation </p>
            <p class="main__technologies-text technologies--item-13">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>

            <div class="main__technologies--line technologies--item-14"></div>
            <div class="main__technologies--line technologies--item-15"></div>
            <div class="main__technologies--line technologies--item-16"></div>
            <div class="main__technologies--line technologies--item-17"></div>
            <div class="main__technologies--line technologies--item-18"></div>
            <div class="main__technologies--line technologies--item-19"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .main__technologies {
        display: flex;
        justify-content: center;
        padding: 0 15px;

        .main__technologies--list {
            display: grid;
            grid-template-columns: repeat(3, 0.9fr);
            grid-template-rows: 63px 30px 3px 225px 30px 3px 290px;
            grid-template-areas: "technologies--item-1 technologies--item-1 technologies--item-1"
                                "technologies--item-2 technologies--item-4 technologies--item-6"
                                "technologies--item-14 technologies--item-14 technologies--item-14"
                                "technologies--item-3 technologies--item-5 technologies--item-7"
                                "technologies--item-8 technologies--item-10 technologies--item-12"
                                "technologies--item-15 technologies--item-15 technologies--item-15"
                                "technologies--item-9 technologies--item-11 technologies--item-13";
            grid-gap: 20px;
            background-color: white;
            margin-top: 106px;
            margin-bottom: 106px;
            color: #3B424A;
            width: 1160px;
            justify-content: center;
        
            @media (max-width: 980px) {
                grid-template-columns: repeat(2, 0.9fr);
                grid-template-rows: 60px 25px 3px 175px 25px 3px 250px 25px 3px 215px;
                grid-template-areas: "technologies--item-1 technologies--item-1"
                                    "technologies--item-2 technologies--item-4"
                                    "technologies--item-14 technologies--item-14"
                                    "technologies--item-3 technologies--item-5"
                                    "technologies--item-6 technologies--item-8"
                                    "technologies--item-15 technologies--item-15"
                                    "technologies--item-7 technologies--item-9"
                                    "technologies--item-10 technologies--item-12"
                                    "technologies--item-16 technologies--item-16"
                                    "technologies--item-11 technologies--item-13";
            }
        
            @media (max-width: 768px) {
                grid-template-columns: repeat(2, 0.9fr);
                grid-template-rows: 60px 25px 3px 250px 25px 3px 310px 25px 3px 275px;
            }
        
            @media (max-width: 500px) {
                grid-template-columns: 0.9fr;
                grid-template-rows: 35px 25px 3px 100px 25px 3px 125px 25px 3px 75px 25px 3px 170px 25px 3px 150px 25px 3px 75px;
                grid-template-areas: "technologies--item-1"
                                    "technologies--item-2"
                                    "technologies--item-14"
                                    "technologies--item-3"
                                    "technologies--item-4"
                                    "technologies--item-15"
                                    "technologies--item-5"
                                    "technologies--item-6"
                                    "technologies--item-16"
                                    "technologies--item-7"
                                    "technologies--item-8"
                                    "technologies--item-17"
                                    "technologies--item-9"
                                    "technologies--item-10"
                                    "technologies--item-18"
                                    "technologies--item-11"
                                    "technologies--item-12"
                                    "technologies--item-19"
                                    "technologies--item-13";
            }
        }

        .main__technologies--header {
            font-weight: bold;
            font-size: 50px;
            line-height: 63px;
            color: #2C2F3C;
        
            @media (max-width: 980px) {
                font-size: 48px;
                line-height: 60px;
            }
        
            @media (max-width: 500px) {
                font-size: 28px;
                line-height: 35px;
            }
        }
        
        .main__technologies-text--bold {
            font-weight: bold;
            font-size: 24px;
            line-height: 30px;
        
            @media (max-width: 980px) {
                font-size: 20px;
                line-height: 25px;
            }
        
            @media (max-width: 500px) {
                font-size: 18px;
                line-height: 23px;
            }
        }
        
        .main__technologies-text {
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
        
        .main__technologies--line {
            background-color: #E75A7C;
            border-radius: 3px;
        }

        .technologies--item-1 {
            grid-area: technologies--item-1;
        }
        
        .technologies--item-2 {
            grid-area: technologies--item-2;
        }
        
        .technologies--item-3 {
            grid-area: technologies--item-3;
        }
        
        .technologies--item-4 {
            grid-area: technologies--item-4;
        }
        
        .technologies--item-5 {
            grid-area: technologies--item-5;
        }
        
        .technologies--item-6 {
            grid-area: technologies--item-6;
        }
        
        .technologies--item-7 {
            grid-area: technologies--item-7;
        }
        
        .technologies--item-8 {
            grid-area: technologies--item-8;
        }
        
        .technologies--item-9 {
            grid-area: technologies--item-9;
        }
        
        .technologies--item-10 {
            grid-area: technologies--item-10;
        }
        
        .technologies--item-11 {
            grid-area: technologies--item-11;
        }
        
        .technologies--item-12 {
            grid-area: technologies--item-12;
        }
        
        .technologies--item-13 {
            grid-area: technologies--item-13;
        }
        
        .technologies--item-14 {
            grid-area: technologies--item-14;
        }
        
        .technologies--item-15 {
            grid-area: technologies--item-15;
        }

        .technologies--item-16 {
            grid-area: technologies--item-16;
            display: none;

            @media (max-width: 980px) {
                display: flex;
            }
        }

        .technologies--item-17 {
            grid-area: technologies--item-17;
            display: none;

            @media (max-width: 500px) {
                display: flex;
            }
        }

        .technologies--item-18 {
            grid-area: technologies--item-18;
            display: none;

            @media (max-width: 500px) {
                display: flex;
            }
        }

        .technologies--item-19 {
            grid-area: technologies--item-19;
            display: none;

            @media (max-width: 500px) {
                display: flex;
            }
        }
    }
</style>