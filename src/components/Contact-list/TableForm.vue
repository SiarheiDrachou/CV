<template>
    <form class="form" @click.prevent="" ref="form">
        <input 
            class="form__input" 
            type="text" 
            :placeholder="id"
            v-for="(input, id) in inputArr"
            :key="id"
            v-show="id !== 'address'"
        />

        <input 
            class="form__input" 
            type="text" 
            :placeholder="'address ' + key"
            v-for="(address, key) in inputArr.address"
            :key="key"
        />

        <button class="button" @click="add()">Submit</button>
    </form>
</template>

<script>
    export default {
        data: function() {
            return {
                isAdd: false,
                inputArr: null,
                objectItem: null
            }
        },
        props: [
            "data"
        ],
        methods: {
            add() { // Функция получения данных нового пользователя
                let data = new Object(); // Создаем новый пустой объект

                for(let i = 0; i < this.$refs.form.length - 1; i++) { // Заполняем пустой объект данными из полей ввода
                    console.log(this.$refs.form[i].getAttribute("placeholder"));

                    if(this.$refs.form[i].getAttribute("placeholder") == 'address') {
                        data[`${this.$refs.form[i].getAttribute("placeholder")}`] = new Object();
                        this.objectItem = data[`${this.$refs.form[i].getAttribute("placeholder")}`];
                    }
                    else if(this.$refs.form[i].getAttribute("placeholder").split(' ').includes('address')) {
                        let placeholderReplace = this.$refs.form[i].getAttribute("placeholder");
                        placeholderReplace = placeholderReplace.replace('address ', '');

                        this.objectItem[`${placeholderReplace}`] = this.$refs.form[i].value;
                    }
                    else {
                        data[`${this.$refs.form[i].getAttribute("placeholder")}`] = this.$refs.form[i].value;
                    }
                }

                this.data.push(data); // Добавляем нового пользователя в массив пользователей

                this.$emit("created", this.data, this.isAdd); // Передаем данные нового пользователя в компонент таблицы для перерисовки
            }
        },
        created() {
            this.inputArr = this.data[0];
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 10px;

        &__input {
            border: 1px solid black;
            padding-left: 5px;
            margin-right: 15px;
            margin-top: 5px;
        }
    }
</style>