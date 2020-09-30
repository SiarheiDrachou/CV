<template>
    <div class="scroll">
        <DropDown @contactsRequest="contactsRequest" />

        <div class="create" v-show="data">
            <button @click="create" v-if="!isAdd">Добавить</button>

            <TableForm v-else :data="data" @created="created" />

            <button @click="cancel" v-if="isAdd">Отменить</button>
        </div>

        <Search v-show="data" @search="search" :dataArr="dataArr" />

        <TableList v-show="data" :data="data" :newPage="newPages" @views="views"/>

        <PaginationList v-show="data" :data="data" @newPage="newPage" />

        <Contact  :item="item" v-if="isClick"/>
    </div>
</template>

<script>
    import TableList from '../components/Contact-list/TableList'
    import PaginationList from '../components/Contact-list/PaginationList'
    import TableForm from '../components/Contact-list/TableForm'
    import DropDown from '../components/Contact-list/DropDown'
    import Contact from '../components/Contact-list/Contact'
    import Search from '../components/Contact-list/Search'

    export default {
        data: function() {
            return {
                isAdd: false,
                data: null,
                dataArr: null,
                newPages: 1,
                isClick: false,
                item: null
            }
        },
        components: {
            TableList,
            PaginationList,
            TableForm,
            DropDown,
            Contact,
            Search
        },
        methods: {
            search(result) {
                this.data = result;
                this.newPage = 1;
            },
            cancel() {
                this.isAdd = false;
            },
            views(item, click) {
                this.item = item;
                this.isClick = click;
            },
            create() { // Показываем поля для ввода данных нового пользователя
                if(this.data) {
                    this.isAdd = true;
                }
            },
            created(data, isAdd) { // Добавляем нового пользователя в таблицу после ручного ввода данных
                this.data = data;
                this.isAdd = isAdd;
            },
            contactsRequest(data, dataArr) {
                this.data = data;
                this.dataArr = dataArr;
            },
            newPage(newPages) {
                this.newPages = newPages;
            }
        },
        watch: { // Следим за именениями в переменных 
            data: function(data) {
                this.data = data;
            },
            isAdd: function(isAdd) {
                this.isAdd = isAdd;
            },
            newPages: function(newPages) {
                this.newPages = newPages;
            },
            isClick: function(isClick) {
                this.isClick = isClick;
            },
            dataArr: function(dataArr) {
                this.dataArr = dataArr;
            }
        }
    }
</script>


<style lang="scss" scoped>
    .create {
        width: 95%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        margin: 50px auto;
    }
</style>