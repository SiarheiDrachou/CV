<template>
    <section class="aside-email">
        <h3 class="email-header"> Email newsletter </h3>
        
        <p class="email-text"> 
            Sign up to receive email updates and to hear what's going on.
        </p>

        <form>
            <input 
                class="input"
                type="text"
                placeholder="Your name"
                required
                minlength="2"
                maxlength="50"
            />

            <input 
                class="input"
                type="email" 
                placeholder="Your email"
                required
            />

            <button class="email-button"> 
                Subscribe to newsletter 
            </button>
        </form>
    </section>
</template>

<style lang="scss" scoped>
    .aside-email {
        width: 270px;

        .email-header {
            color: #171717;
            margin-top: 0;
            margin-bottom: 11px;
        }

        .email-text {
            width: 252px;
            height: 48px;
            color: #666666;
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 27px;
        }

        .input {
            width: 270px;
            height: 50px;
            border: 1px solid #E5E5E5;
            border-radius: 3px;
            font-size: 14px;
            padding-left: 15px;
            margin-bottom: 10px;
            cursor: pointer;
        }

        .input:hover {
            background-color: #F4F6FA;
            border: 1px solid #E5E5E5;
        }

        .input:focus {
            background-color: #FFFFFF;
            border: 1px solid #E5E5E5;
            color: black;
        }


        .email-button {
            width: 270px;
            height: 50px;
            background-color: #232323;
            border-radius: 3px;
            color: white;
            font-size: 14px;
            border: none;
            cursor: pointer;
        }

        .email-button:hover {
            background-color: #5C5C5C;
        }

        .email-button:focus {
            background: #232323;
            border: 2px dashed rgba(255, 255, 255, 0.5);
        }

        .email-button:active {
            background-color: #0E0E0E;
            border: none;
        }
    }
</style>