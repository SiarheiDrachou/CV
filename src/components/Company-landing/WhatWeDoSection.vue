<template>
    <section class="main__what-we-do">
        <p class="article__what-we-do--header"> 
            <a name="WhatWeDo"> What we do </a>  
        </p>
        <p class="article__what-we-do--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Id distinctio reiciendis explicabo rerum, iusto unde placeat,
            corrupti ex animi aspernatur ad at, quidem minima maxime 
            quaerat nisi facilis accusamus rem! <strong >Lorem 
            ipsum dolor sit amet consectetur adipisicing elit.</strong> 
            Assumenda id eveniet ullam sit accusamus ab at quidem quo 
            nesciunt architecto voluptatum amet, iure alias provident 
            nihil deserunt eligendi vero placeat?
        </p>
    </section>
</template>

<style lang="scss" scoped>
    .main__what-we-do {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        background-color: #F2F3F7;
        height: 375px;
        width: 100%;
        padding: 70px 15px;

        @media (max-width: 980px) {
            height: 358px;
            padding: 50px 15px;
        }

        @media (max-width: 768px) {
            height: 360px;
            padding: 40px 15px;
        }

        @media (max-width: 500px) {
            height: 360px;
            padding: 50px 15px;
        }

        .article__what-we-do--header {
            font-weight: bold;
            font-size: 50px;
            line-height: 63px;
            color: #3B424A;
            margin: 0;
            width: 961px;
            cursor: pointer;
        
            @media (max-width: 980px) {
                font-size: 36px;
                line-height: 45px;
                width: 100%;
            }
        
        
            @media (max-width: 500px) {
                width: 301px;
                font-size: 24px;
                line-height: 30px;
            }
        }
        
        .article__what-we-do--text {
            font-size: 24px;
            width: 961px;
            height: 143px;
            margin: 0;
            color: #3B424A;
        
            @media (max-width: 980px) {
                width: 100%;
                height: 180px;
                font-size: 20px;
                line-height: 36px;
            }
        
            @media (max-width: 768px) {
                height: 216px;
                font-size: 20px;
                line-height: 36px;
            }
        
            @media (max-width: 500px) {
                width: 301px;
                height: 208px;
                font-size: 14px;
                line-height: 26px;
            }
        }
    }
</style>