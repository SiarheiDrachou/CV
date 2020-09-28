<template>
    <form class="form" @click.prevent="" ref="form">
        <input 
            class="form__input" 
            type="text" 
            :placeholder="id"
            v-for="(input, id) in inputArr"
            :key="id"
        />

        <button class="button" @click="add()">Submit</button>
    </form>
</template>

<script>
    export default {
        data: function() {
            return {
                isAdd: false,
                inputArr: null
            }
        },
        props: [
            "data",
            'routeData'
        ],
        methods: {
            add() { // Функция получения данных нового пользователя
                let data = new Object(); // Создаем новый пустой объект

                for(let i = 0; i < this.$refs.form.length - 1; i++) { // Заполняем пустой объект данными из полей ввода
                    data[`${this.$refs.form[i].getAttribute("placeholder")}`] = this.$refs.form[i].value; // название поля получаем из поля подсказки
                }                                                                                         // описание получаем из поля value 

                this.data.push(data); // Добавляем нового пользователя в массив пользователей

                this.$emit("created", this.data, this.isAdd); // Передаем данные нового пользователя в компонент таблицы для перерисовки
            }
        },
        created() { // Заполнение шапки таблицы списком полей контактов
            if(this.routeData) { // Если добавили новые  поля то заполняем шапку таблицы отсюда
                this.inputArr = this.routeData[0];
            }
            else { // Заполняем шапку таблицы при первичной отрисовке
                this.inputArr = this.data[0];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-top: 50px;
        margin-left: 2%;

        &__input {
            border: 1px solid black;
            padding-left: 5px;
            width: 10%;
            margin-right: 15px;
        }
    }
</style>