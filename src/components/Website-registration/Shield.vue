<template>
    <div class="main-shield">
        <img src="../../assets/img/shield.svg" class="shield__img" v-show="inputPhone" :style="{ width: widthSize + 'px' }"/>
        <img src="../../assets/img/icon-OK.svg" class="ok__img" v-show="!inputPhone" :style="{ width: widthSize + 'px' }"/>
    </div>
</template>

<script>
export default {
    props: {
        widthSize: Number,
        inputPhone: Boolean
    },
    mounted() {
        this.widthSize;
        window.onresize = () => {
            this.widthSize;
        };
    },
    watch: {
        widthSize: function(val) {
            this.widthSize = val;
        },
        inputPhone: function(val2) {
            this.inputPhone = val2;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-shield {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 160px;

        .shield__img, .ok__img {
            animation-name: scale;
            animation-iteration-count: infinite;
            animation-duration: 1s;
        }
    }

    @keyframes scale {
        0%   { transform: scale(0.7); }
        50%  { transform: scale(0.8); }
        100% { transform: scale(0.7); }
    }
</style>