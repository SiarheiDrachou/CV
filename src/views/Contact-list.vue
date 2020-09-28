<template>
    <div>
        <DropDown @contactsRequest="contactsRequest" />

        <TableForm v-if="isAdd" :data="data" @created="created" />

        <TableList v-show="data" :data="data" @create="create" :newPage="newPages" />

        <PaginationList v-show="data" :data="data" @newPage="newPage" />
    </div>
</template>

<script>
    import TableList from '../components/Contact-list/TableList'
    import PaginationList from '../components/Contact-list/PaginationList'
    import TableForm from '../components/Contact-list/TableForm'
    import DropDown from '../components/Contact-list/DropDown'

    export default {
        data: function() {
            return {
                isAdd: null,
                data: null,
                newPages: 1
            }
        },
        components: {
            TableList,
            PaginationList,
            TableForm,
            DropDown
        },
        methods: {
            create(isAdd) { // Делаем видимыми поля для ручного ввода данных нового пользователя
                this.isAdd = isAdd;
            },
            created(data, isAdd) { // Добавляем нового пользователя в таблицу после ручного ввода данных
                this.data = data;
                this.isAdd = isAdd;
            },
            contactsRequest(data) {
                this.data = data;
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
            // $route: {
            //     immediate: true,
            //     handler(to) {
            //         this.routeData = to.params.data;
            //     }
            // }
        }
        // mounted() {
        //     if(this.routeData) {
        //         this.data = this.routeData;
        //     }
        // }
    }
</script>


<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    @import '../../node_modules/materialize-css/dist/css/materialize.min.css'; 
</style>