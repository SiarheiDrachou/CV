<template>
    <header class="header">
        <img src="../../assets/img/smartphone.svg" class="header__logo">
        <p class="header__text">
            Lorem ipsum dolor sit amet consectetur
            <br />
            adipisicing elit. Tempore ab nesciunt
        </p>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        position: absolute;
        z-index: 2;
        display: flex;
        align-items: center;
        width: 100%;
        background-color: white;
        padding: 20px 0;

        .header__logo {
            margin-left: 25px;
            height: 70px;
            width: 70px;

            @media(max-width: 640px) {
                height: 50px;
                width: 50px;
            }

            @media(max-width: 380px) {
                height: 35px;
                width: 35px;
            }
        }

        .header__text {
            margin-left: 10px;
            font-size: 3.7vmin;
            font-family: "Calibri";
            color: rgb( 65, 65, 65 );
            line-height: 1;
            width: 100%;

            @media(min-width: 640px) {
                font-size: 23px;
            }

            @media(max-width: 320px) {
                font-size: 14px;
            }
        }
    }
</style>
