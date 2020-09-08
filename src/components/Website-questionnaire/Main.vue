<template>
    <main class="main">
            <div 
                class="option"
                :class="{load: item.type == 'load'}"
                v-for="(item, index) in questionList" :key="index"
                v-show="index == views && item.type !== 'load'" 
            >
                <p 
                    class="option__text" 
                    v-if="views == 0"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, 
                    possimus! Doloremque omnis nemo eveniet cumque in tenetur rem!
                </p>
                
                <p 
                    class="option__text--bold"
                    :class="{bottom: item.type == 'date'}" 
                    v-text="item.question"
                >
                </p>

                <div class="container">
                    <label v-if="item.type == 'date'" @change="checkBirth">
                        <select class="option__select day" type="text" v-model="pickedDay">
                            <option disabled value>Дата</option>
                            <option v-for="(day, id) in days" :key="id" :value="day">{{day}} </option>
                        </select>
                    </label>

                    <label v-if="item.type == 'date'" @change="checkBirth">
                        <select class="option__select month" type="text" v-model="pickedMonth">
                            <option disabled value>Месяц</option>
                            <option v-for="(month, id) in months" :key="id" :value="month">{{month}}</option>
                        </select>
                    </label>

                    <label v-if="item.type == 'date'" @change="checkBirth">
                        <select class="option__select year" type="text" v-model="pickedYear">
                            <option disabled value>Год</option>
                            <option class="text__center" v-for="(year, id) in years" :key="id" :value="year">{{year}}</option>
                        </select>
                    </label>
                </div>

                <button
                    :class="{left: !isView, center: isView, active: answer.id == id}" 
                    @click="click()" 
                    v-for="answer in item.answers" 
                    :key="answer.id" 
                    v-text="answer.answer"
                    v-show="item.type == 'radio'" 
                >
                </button>
            </div>

            <div 
                class="load"
                v-if="questionList.length - 1  == views"
            >
                <p class="load__time">{{time}}%</p>

                <div class="load__text" v-show="time > 0">
                    <div class="text-ff">
                        Lorem ipsum
                        <span class="dot">......................................</span> 
                    </div>
                    <span class="text-b5">Finalizat!</span>
                </div>

                <div class="load__text" v-show="time > 20">
                    <div class="text-ff">
                        Lorem ipsum
                        <span class="dot">......................................</span> 
                    </div>
                    <span class="text-b5">Finalizat!</span>
                </div>

                <div class="load__text" v-show="time > 40">
                    <div class="text-ff">
                        Lorem ipsum
                        <span class="dot">......................................</span> 
                    </div>
                    <span class="text-b5">Finalizat!</span>
                </div>

                <div class="load__text" v-show="time > 60">
                    <div class="text-ff">
                        Lorem ipsum
                        <span class="dot">...............................................</span> 
                    </div>
                    <span class="text-b5">Finalizat!</span>
                </div>

                <div class="load__text" v-show="time > 80">
                    <div class="text-ff">
                        Lorem ipsum
                        <span class="dot">........................................................................................</span> 
                    </div>
                    <span class="text-b5">Finalizat!</span>
                </div>

                <p class="load__text--bold" v-show="time == 100">Lorem ipsum</p>
            </div>

            <div 
                class="finish" 
                v-if="questionList.length == views"
            >
                <p class="finish__text">Lorem ipsum</p>

                <p class="finish__text--red">Lorem ipsum!</p>

                <p class="finish__text--bold">Lorem ipsum</p>

                <p class="finish__text--border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Hic molestias et perspiciatis dolores ducimus consequuntur, 
                    ex veniam cupiditate ea quia! At, dignissimos. Rerum repellat 
                    eveniet quos rem minus laboriosam? Nostrum.
                </p>

                <a 
                    class="finish__link" 
                    href="tel:xxxxxxxxxxx"
                >
                    Позвонить и прослушать
                </a>
            </div>
    </main>
</template>

<script>
export default {
    data: () => ({
        views: 0,
        isView: true,
        isClick: true,
        isChecked: false,
        isTop: false,
        id: null,
        days: null,
        months: null,
        years: null,
        pickedMonth: "",
        pickedDay: "",
        pickedYear: "",
        time: 0,
        questionList :  [
            {
                question: 'Lorem :',
                answers: [
                    {
                        id: 1,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 2,
                        answer: 'Lorem ipsum',
                        active: false
                    }
                ],
                type: 'radio'
            },
            {
                question: 'Lorem ipsum ',
                answers: [
                    {
                        id: 3,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 4,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 5,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 6,
                        answer: 'Lorem ipsum',
                        active: false
                    }
                ],
                type: 'radio'
            },
            {
                question: 'Lorem ipsum dolor',
                answers: [
                    {
                        id: 7,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 8,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 9,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 10,
                        answer: 'Lorem ipsum',
                        active: false
                    }
                ],
                type: 'radio'
            },
            {
                question: 'Lorem ',
                answers: [
                    {
                        id: 11,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 12,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 13,
                        answer: 'Lorem ipsum',
                        active: false
                    }
                ],
                type: 'radio'
            },
            {
                question: 'Lorem ipsum ',
                answers: [
                    {
                        id: 14,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 15,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 16,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 17,
                        answer: 'Lorem ipsum',
                        active: false
                    }
                ],
                type: 'radio'
            },
            {
                question: 'Lorem ipsum dolor',
                answers: [
                    {
                        id: 18,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 19,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 20,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 21,
                        answer: 'Lorem ipsum',
                        active: false
                    }
                ],
                type: 'radio'
            },
            {
                question: 'Lorem ',
                answers: [
                    {
                        id: 22,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 23,
                        answer: 'Lorem ipsum',
                        active: false
                    },{
                        id: 24,
                        answer: 'Lorem ipsum',
                        active: false
                    }
                ],
                type: 'radio'
            },
            {
                question: 'Lorem ipsum :',
                type: 'date'
            },
            {
                type: 'load'
            }
        ]
    }),
    props: {
        footer: Number
    },
    methods: {
        click() {
            ++this.views;
        },
        timer() {
            let loader = setInterval(() => {
                if(this.time < 100) {
                    ++this.time; 
                }
                else {
                    setTimeout(() => {
                        this.views = this.questionList.length;
                        this.$emit('finish', this.views);
                    }, 1000);
                    clearInterval(loader);
                }
            }, 100);
        },
        checkBirth() {
            this.invalid = false;
            if (this.pickedMonth && this.pickedDay && this.pickedYear) {
                ++this.views;
                this.timer();
            }
        },
        genBirthDay(min, max) {
            let array = [];
            for (let i = min; i <= max; i++) {
                array.push(i);
            }
            return array;
        }
    },
    mounted() {
        this.days = [...this.genBirthDay(1, 31)];
        this.months = this.genBirthDay(1, 12);
        this.years = this.genBirthDay(
        1960,
        new Date().getFullYear() - 18
        ).reverse();
    }
}
</script>

<style lang="scss" scoped>
    .main {
        position: relative;
        width: 100%;
        z-index: 5;

        .option {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;

            .container {
                width: 100%;

                label {
                    position: relative;
                    margin: 0 auto;
                    margin-top: 16px;
                    width: 70%;
                    display: flex;
                    justify-content: center;
                }

                label::before {
                    content: " ";
                    position: absolute;
                    top: 45%;
                    right: 22px;
                    width: 12px;
                    height: 8px;
                    background-image: url('../../assets/img/arrow-bottom.svg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    z-index: 2;
                }
            }

            .option__text {
                width: 95%;
                text-align: center;
                margin-top: 12px;
                font-weight: 500;
                font-size: 18px;
                line-height: 16px;
                color: #FFFFFF;
            }

            .option__select {
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                padding-left: 14px;
                color: #2D132C;
                background-color: #FFFEFE;
                border: 1px solid #2D132C;
                box-sizing: border-box;
                border-radius: 36px;
                width: 100%;
                height: 8vmax;
                appearance: none;
                cursor: pointer;

                @media (max-width: 320px) {
                    height: 44px;
                }

                @media (min-width: 414px) {
                    height: 56px;
                }
            }

            .option__text--bold {
                margin-top: 24px;
                margin-bottom: 5px;
                text-align: center;
                padding: 0 16px;
                font-weight: bold;
                font-size: 19px;
                line-height: 20px;
                letter-spacing: -0.01em;
                color: #FFFFFF;
                width: 100%;
            }

            .center {
                margin-top: 16px;
                width: 70%;
                height: 8vmax;
                background-color: #FFFEFE;
                border: 1px solid #2D132C;
                border-radius: 36px;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #2D132C;
                cursor: pointer;

                @media (max-width: 320px) {
                    height: 44px;
                }

                @media (min-width: 414px) {
                    height: 56px;
                }
            }

            .bottom {
                margin-bottom: 16px;
            }

            .left {
                width: 70%;
                height: 8vmax;
                margin-top: 16px;
                padding-left: 14px;
                background-color: #FFFEFE;
                border: 1px solid #2D132C;
                border-radius: 36px;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                text-align: left;
                cursor: pointer;

                @media (max-width: 320px) {
                    height: 44px;
                }

                @media (min-width: 414px) {
                    height: 56px;
                }
            }

            .active {
                position: relative;
                background-color: #ee8d8d;
            }

            .option__button {
                margin-top: 22px;
                width: 80%;
                height: 8vmax;
                background-color: #EE4540;
                border: 1px solid #EE4540;
                border-radius: 10px;
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #FFFFFF;
                cursor: pointer;

                @media (max-width: 320px) {
                    height: 44px;
                }

                @media (min-width: 414px) {
                    height: 56px;
                }
            }

            .option__alarm {
                width: 80%;
                height: 8vmax;
                margin-top: 22px;
                background-color: #EEEEEE;
                border: 1px solid #EE4540;
                border-radius: 10px;
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #EE4540;
                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width: 320px) {
                    height: 44px;
                }

                @media (min-width: 414px) {
                    height: 56px;
                }
            }
        }

        .load {
            padding: 62px 16px 0 16px;

            .load__text {
                display: flex;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                width: 100%;

                .dot {
                    color: white;
                }

                .text-ff {
                    width: 84%;
                    color:  #ffa6a6;
                    font-family: "Roboto";
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .text-b5 {
                    color: #b5ffb3;
                    font-family: "Roboto";
                }
            }

            .load__text--bold {
                width: 100%;
                text-align: center;
                margin-top: 97px;
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #EE4540;
            }

            .load__time {
                width: 100%;
                text-align: center;
                font-size: 32px;
                color: white;
            }
        }

        .finish {

            .finish__text {
                margin-top: 12px;
                padding-left: 16px;
                width: 100%;
                text-align: center;
                font-weight: 500;
                font-size: 19px;
                line-height: 20px;
                color: #F1F0F0;
            }

            .finish__text--red {
                text-align: center;
                margin-top: 24px;
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
                color: #EE4540;
                text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
                animation-name: puls;
                animation-duration: 1s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }

            .finish__text--bold {
                margin: 0 auto;
                margin-top: 5px;
                width: 208px;
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
                color: white;
            }

            .finish__text--border {
                margin: 0 auto;
                margin-top: 40px;
                width: 90%;
                padding: 14px;
                text-align: center;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #FFFFFF;
                background-color: rgba(0, 2, 43, 0.8);
                border: 1px solid #FBE311;
                backdrop-filter: blur(4px);
            }

            .finish__link {
                position: relative;
                margin: 0 auto;
                margin-top: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90%;
                height: 8vmax;
                background-color: #EE4540;
                border: 1px solid #FFFFFF;
                border-radius: 10px;
                font-family: Roboto;
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #FFFFFF;
                text-decoration: none;
                text-align: right;
                animation-name: pulse;
                animation-duration: 1.5s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;

                @media (max-width: 320px) {
                    height: 44px;
                }

                @media (min-width: 414px) {
                    height: 56px;
                }
            }

            .finish__link::before {
                content: " ";
                position: relative;
                right: 4%;
                background-image: url('../../assets/img/phone.svg');
                background-repeat: no-repeat;
                background-size: cover;
                width: 24px;
                height: 24px;
                animation-name: call;
                animation-duration: 1.5s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }
        }

        @keyframes puls {
            0% {
                font-size: 24px;
            }

            50% {
                font-size: 32px;
            }

            100% {
                font-size: 24px;
            }
        }

        @keyframes call {
            0% {
                transform: scaleX(1);
            }

            10%, 20% {
                transform: scale3d(.9, .9, .9) rotate(-3deg)
            }
            30%, 50%, 70%, 90% {
                transform: scale3d(1.1, 1.1, 1.1) rotate(3deg)
            }
            40%, 60%, 80% {
                transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg)
            }

            100% {
                transform: scaleX(1);
            }
        }

        @keyframes pulse {
            0% {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }
            50% {
                -webkit-transform: scale3d(1.05, 1.05, 1.05);
                transform: scale3d(1.05, 1.05, 1.05)
            }
            to {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }
        }
    }
</style>