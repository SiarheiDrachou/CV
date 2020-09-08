<template>
    <form class="main-form" @submit.prevent novalidate ref="form">
        <p class="form__text" v-if="inputPhone">Lorem ipsum, dolor sit amet:</p>

        <p class="form__text" v-else>
            Lorem ipsum, dolor sit amet
            <br />
            consectetur adipisicing,
            <br />
            <span class="form__text--green">elit. Odio eaque a, mollitia corporis impedit</span>
            <br />
            hic aliquid, quisquam similique
        </p>

        <input
            type="tel"
            class="input-phone"
            v-mask="{mask: phoneMask, greedy: false}"
            @input="maskCheck"
            v-model="phone"
            placeholder="07 (__) ___ ___"
            v-if="inputPhone"
        />

        <button
            class="button"
            @click="toggleClass"
            :class="{ active: isActive, greens: done}"
            :disabled="!submit"
            v-if="button"
        >
            <span class="submit">Continue</span>
        </button>

        <a class="finish" href="tel:xxxxxxxxx" v-if="!inputPhone">
            <img src="../../assets/img/call.svg" />
            <span>Call and listen</span>
        </a>
    </form>
</template>

<script>
export default {
    data: function () {
        return {
            phoneMask: "07 (99) 999 999",
            inputPhone: true,
            button: true,
            submit: true,
            loading: true,
            check: false,
            isActive: false,
            phone: null,
            done: false,
            formHeight: null
        }
    },
    methods: {
        maskCheck: function(field) {
            if (field.target.inputmask.isComplete()) {
                this.done = true;
            } else {
                this.done = false;
            }
        },
        toggleClass() {
            window.scrollTo(0, 0);
            if (this.done) {
                this.isActive = !this.isActive;
                this.inputPhone = !this.inputPhone;
                this.submit = !this.submit;
                this.button = !this.button;
                this.$emit('display', this.loading, this.inputPhone);
                setTimeout(()=> {
                    this.$emit('display', !this.loading, this.inputPhone);
                }, 5000);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 50px;

        .form__text {
            font-size: 4vmin;
            font-family: "Calibri";
            color: rgb( 44, 56, 67 );
            line-height: 1.3;
            text-align: center;
            width: 100%;
            margin-bottom: 10px;

            @media(min-width: 640px) {
                font-size: 29px;
            }

            @media(max-width: 320px) {
                font-size: 13px;
            }

            &--green {
                color: rgb(94, 180, 8);
            }
        }

        .input-phone {
            -webkit-appearance: none;
            background-color: rgb( 255, 255, 255 );
            box-shadow: 1px 3px 7px 0px gray inset;
            border: none;
            width: 90%;
            height: 10vmin;
            padding-left: 25px;
            font-size: 5vmin;
            font-family: "Calibri";
            color: rgb( 165, 165, 165 );
            text-transform: uppercase;
            text-align: left;
            cursor: pointer;

            @media(min-width: 640px) {
                height: 64px;
                font-size: 37px;
                padding-left: 55px;
            }

            @media(max-width: 320px) {
                height: 44px;
                font-size: 18px;
                padding-left: 15px;
            }
        }

        .button {
            background-image: -moz-linear-gradient( -90deg, rgb( 44, 56, 67 ) 0%, rgb( 44, 56, 67 ));
            background-image: -webkit-linear-gradient( -90deg, rgb( 44, 56, 67 ) 0%, rgb( 44, 56, 67 ));
            box-shadow: 0px 6px 0px 0px rgb( 20, 20, 20 );
            border: none;
            width: 90%;
            height: 12vmin;
            margin-top: 10px;
            cursor: pointer;

            @media(min-width: 640px) {
                height: 88px;
            }

            @media(max-width: 320px) {
                height: 44px;
            }

            .submit {
                font-size: 6vmin;
                font-family: "Calibri";
                color: rgb( 255, 255, 255 );
                font-weight: bold;
                text-transform: uppercase;
                text-align: center;

                @media(min-width: 640px) {
                    font-size: 41px;
                }

                @media(max-width: 320px) {
                    font-size: 20px;
                }
            }
        }

        .greens {
            background-image: -moz-linear-gradient( -90deg, rgb( 124, 197, 51 ) 0%, rgb( 6, 151, 3 ) 72.461%);
            background-image: -webkit-linear-gradient( -90deg, rgb( 124, 197, 51 ) 0%, rgb( 6, 151, 3 ) 72.461%);
            box-shadow: 0px 6px 0px 0px rgb( 4, 45, 3 );
            border: none;
        }

        .finish {
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: -moz-linear-gradient( -90deg, rgb( 124, 197, 51 ) 0%, rgb( 6, 151, 3 ) 72.461%);
            background-image: -webkit-linear-gradient( -90deg, rgb( 124, 197, 51 ) 0%, rgb( 6, 151, 3 ) 72.461%);
            box-shadow: 0px 6px 0px 0px #042d03;
            width: 90%;
            height: 12vmin;
            text-decoration: none;

            @media(min-width: 640px) {
                height: 84px;
            }

            @media(max-width: 320px) {
                height: 44px;
            }

            img {
                width: 30px;
                height: 30px;
            }

            span {
                position: relative;
                margin-left: 15px;
                font-size: 6vmin;
                font-family: "Calibri";
                color: rgb( 255, 255, 255 );
                font-weight: bold;
                text-transform: uppercase;
                text-align: center;
                text-decoration: none;

                @media(min-width: 640px) {
                    font-size: 35px;
                }

                @media(max-width: 320px) {
                    font-size: 20px;
                }
            }
        }
    }
</style>