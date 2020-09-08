<template>
    <div class="footer__section-3">
        <h3 class="footer__section-3--header"> Newsletter </h3>

        <form>
            <input 
                class="footer__input"
                type="text"
                placeholder="Your name"
                required
                minlength="2"
                maxlength="50"
            />

            <input 
                class="footer__input"
                type="email" 
                placeholder="Your email"
                required
            />

            <button class="footer__button"> 
                Subscribe to newsletter 
            </button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .footer__section-3 {
        grid-area: footer__section-3;
        margin-left: 4px;
        
        .footer__section-3--header {
            color: white;
            font-size: 20px;
            margin-bottom: 38px;
            margin-top: 62px;

            @media (max-width: 1280px) {
                margin-top: 0;
            }

            @media (max-width: 768px) {
                margin-top: 48px;
            }
        }

        .footer__input {
            height: 50px;
            width: 270px;
            background-color: #373737;
            border-radius: 3px;
            color: #AEB3BB;
            padding-left: 15px;
            margin-bottom: 10px;
            border: none;
            cursor: pointer;

            @media (max-width: 1280px) {
                width: 585px;
            }

            @media (max-width: 768px) {
                width: 293px;
        }
        }

        .footer__input:hover {
            background-color: #6C6C6C;
        }

        .footer__input:focus {
            background-color: #5A5A5A;
            color: #FFFFFF;
        }

        .footer__button {
            height: 50px;
            width: 270px;
            background-color: #232323;
            border-radius: 3px;
            font-weight: bold;
            color: white;
            border: none;
            cursor: pointer;

            @media (max-width: 1280px) {
                width: 585px;
            }

            @media (max-width: 768px) {
                width: 293px;
        }
        }

        .footer__button:hover {
            background-color: #5C5C5C;
        }

        .footer__button:focus {
            background: #232323;
            border: 2px dashed rgba(255, 255, 255, 0.5);
        }

        .footer__button:active {
            background-color: #0E0E0E;
            border: none;
        }
    }
</style>