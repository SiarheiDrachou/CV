<template>
    <div class="information">
        Выбран пользователь <b>{{user}}</b>
        <br />
        Описание:
        <br />
        <textarea v-text="description"></textarea>
        <br />
        Адрес проживания: <b>{{streetAddress}}</b>
        <br />
        Город: <b>{{city}}</b>
        <br />
        Провинция/штат: <b>{{state}}</b>
        <br />
        Индекс: <b>{{zip}}</b>
    </div>
</template>

<script>
    export default {
        props: [
            'item'
        ],
        computed: {
            user: function () {
                return this.item.firstName + ' ' + this.item.lastName;
            },
            description: function () {
                return this.item.description;
            },
            streetAddress: function () {
                return this.item.address.streetAddress;
            },
            city: function () {
                return this.item.address.city;
            },
            state: function () {
                return this.item.address.state;
            },
            zip: function () {
                return this.item.address.zip;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .information {
        margin: 50px 0 0 50px;
    }
</style>