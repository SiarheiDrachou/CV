<template>
    <div class="main-attention" :class="{green: !inputPhone}" ref="attention">
        <p class="attention__text" v-if="inputPhone"><span class="attention__text--bold">Lorem!</span> </p>
        <p class="attention__text" v-else><span class="attention__text--bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span></p>
    </div>
</template>

<script>
export default {
    props: {
        inputPhone: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .main-attention {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(68, 130, 195);
        width: 100%;
        padding: 10px 0;

        .attention__text {
            font-size: 3vmin;
            font-family: "Calibri";
            color: rgb( 255, 255, 255 );
            line-height: 1.4;
            width: 100%;
            text-transform: uppercase;
            text-align: center;

            @media(min-width: 640px) {
                font-size: 19px;
            }

            @media(max-width: 320px) {
                font-size: 12px;
            }

            &--bold {
                font-weight: bold;
            }
        }
    }

    .green {
        background-image: -moz-linear-gradient( -90deg, rgb( 124, 197, 51 ) 0%, rgb( 6, 151, 3 ) 72.461%);
        background-image: -webkit-linear-gradient( -90deg, rgb( 124, 197, 51 ) 0%, rgb( 6, 151, 3 ) 72.461%);
        border: none;

        .attention__text {
            width: 100%;
        }
    }
</style>