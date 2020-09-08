<template>
    <div class="information">
        <img 
            class="information__img"
            src="../../assets/img/photo.jpg" 
            alt="My photo" 
        />

        <div>
            <div>
            <b>Драчёв Сергей</b>
            <br>
            <b>Желаемая должность: </b> Frontend developer
            <br />
            <b>Дата рождения: </b> <span v-text="`06.11.1994(${birthday})`"></span>
            <br />
            <b>Проживание: </b> г. Минск
            <br />
            </div>

            <div>
            <b>Контактная информация</b>
            <br>
            <b>Телефон: </b> <a href="tel:+375259156177">+375259156177</a>
            <br />
            <b>Репозиторий: </b> <a href="https://github.com/SiarheiDrachou">Github</a>
            <br />
            <b>Профиль: </b> <a href="https://www.linkedin.com/in/siarheidrachou/">Linkedin</a>
            <br />
            <b>Электронная почта: </b> <a href="mailto:9kudza@tut.by">9kudza@tut.by</a>
            </div>
        </div>
    </div>
    
</template>
    
<script>
    export default {
        data: function() {
            return {
                birthday: null
            }
        },
        methods: {
            getDate() {
                let date = new Date();
                let month = new Date().getMonth();
                let day = new Date().getDate();

                if(month >= 11 && day >= 6 ) {
                    return this.birthday = date.getFullYear() - 1994;
                }
                else {
                    return this.birthday = date.getFullYear() - 1995;
                }
            }
        },
        mounted() {
            this.getDate();
        }
    }
</script>

<style lang="scss" scoped>
    .information {
        position: relative;
        display: flex;
        padding: 25px 50px;
        justify-content: center;
        align-items: none;
        overflow: hidden;

        @media (max-width: 750px) {
            flex-direction: column;
            align-items: center;
        }

        &__img {
            width: 150px;
            margin-right: 50px;

            @media (max-width: 750px) {
                margin-bottom: 50px;
            }
        }

        & div {
            text-align: left;
            overflow: hidden;
            width: 100%;

            @media (max-width: 750px) {
                width: auto;
            }

            & div:first-child {
                animation-name: left;
                animation-timing-function: linear;
                animation-duration: 2s;

                @media (max-width: 750px) {
                    margin: 0 auto;
                }
            }

            & div:last-child {
                margin-top: 25px;
                animation-name: right;
                animation-timing-function: linear;
                animation-duration: 2s;
                
                @media (max-width: 750px) {
                    margin: 0 auto;
                }
            }
        }
    }

    @keyframes left {
        from {
            position: relative;
            transform: translateX(-50%);
        }

        to {
            position: relative;
            transform: translateX(0);
        }
    }

    @keyframes right {
        from {
            position: relative;
            transform: translateX(100%);
        }

        to {
            position: relative;
            transform: translateX(0);
        }
    }
</style>