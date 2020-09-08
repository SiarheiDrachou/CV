<template>
    <header class="header">
        <img class="header-logo__img" src="../../assets/img/logo.svg">
        <p class="header__text">
            Lorem ipsum dolor sit amet
        </p>
    </header>
</template>

<style lang="scss" scoped>
    .header{
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        height: 60px;
        background-color: #030123;
        z-index: 2;

        .header-logo__img {
            width: 40px;
            margin-left: 16px;
            animation-name: rotate;
            animation-timing-function: linear;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            filter: invert(100%);
        }

        .header__text {
            padding-left: 16px;
            font-family: "Roboto";
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>