<template>
    <div class="main-congr" ref="congr">
        <p class="congr__text" v-if="inputPhone">
            Lorem ipsum dolor sit amet consectetur,
            <span class="congr__text--bold">adipisicing elit.</span>
        </p>
        <p class="congratulation__text"  v-else>
            <span class="congratulation__text--smaller">Lorem</span>
            ipsum dolor!
        </p>
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
    .main-congr {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(44, 56 , 67);
        width: 100%;
        padding: 20px 0;
        border-bottom: 5px solid rgb(31, 42 , 48);

        @media (max-width: 380px) {
            padding: 10px 0;
        }

        .congr__text {    
            font-size: 3.7vmin;
            font-family: "Calibri";
            color: rgb( 209, 209, 209 );
            text-align: center;
            width: 100%;

            @media(min-width: 640px) {
                font-size: 23px;
            }

            @media(max-width: 320px) {
                font-size: 15px;
            }

            &--bold {
                text-transform: uppercase;
                font-weight: 600;
                color: white;
                display: block;
            }
        }

        .congratulation__text {    
            font-size: 4vmin;
            font-family: "Calibri";
            color: rgb( 255, 255, 255 );
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            width: 100%;

            @media(min-width: 640px) {
                font-size: 31px;
            }

            @media(max-width: 320px) {
                font-size: 20px;
            }

            &--smaller {
                display: block;
                font-size: 3vmin;

                @media(min-width: 640px) {
                    font-size: 27px;
                }

                @media(max-width: 320px) {
                    font-size: 14px;
                }
            }
        }
    }
</style>