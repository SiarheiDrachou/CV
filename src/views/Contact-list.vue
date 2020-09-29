<template>
    <div>
        <DropDown @contactsRequest="contactsRequest" />

        <div class="create">
            <p title="Добавление нового контакта">
                <svg 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 16 16" 
                    class="bi bi-plus" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    @click="create"
                >
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </p>

            <TableForm v-if="isAdd" :data="data" @created="created" />
        </div>
        

        <TableList v-show="data" :data="data" :newPage="newPages" />

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
                isAdd: false,
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
            create() { // Показываем поля для ввода данных нового пользователя
                if(this.data) {
                    this.isAdd = true;
                }
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