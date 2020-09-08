<template>
    <div class="loader">
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
    </div>
</template>

<style lang="scss" scoped>
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        min-width: 320px;
        max-width: 640px;
        height: 100%;
        margin: auto;
        background-color: rgb(255, 255, 255);
        z-index: 5;

        .circle {
            position: absolute;
            width: 90px;
            height: 90px;
            opacity: 0;
            transform: rotate(225deg);
            animation-iteration-count: infinite;
            animation-name: orbit;
            animation-duration: 5.5s;
            
            &:after {
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: black;
            }
            
            &:nth-child(2) {  animation-delay: 240ms; }
            &:nth-child(3) {  animation-delay: 480ms; }
            &:nth-child(4) {  animation-delay: 720ms; }
            &:nth-child(5) {  animation-delay: 960ms; }
        }
    }

    @keyframes orbit { 
        0%   { transform:rotate(225deg); opacity: 1;
                animation-timing-function: ease-out; } 
            
        7%   { transform:rotate(345deg);
                animation-timing-function: linear; }
            
        30%   { transform:rotate(455deg);
                animation-timing-function: ease-in-out; }
            
        39%   { transform:rotate(690deg);
                animation-timing-function: linear; }
            
        70%   { transform:rotate(815deg); opacity: 1;
                animation-timing-function: ease-out; }
            
        75%   { transform:rotate(945deg); 
                animation-timing-function: ease-out; }
            
        76% { transform:rotate(945deg); opacity: 0; }
        100% { transform:rotate(945deg); opacity: 0; } 
    }
</style>