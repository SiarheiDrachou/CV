<template>
    <div>
        <DropDown @contactsRequest="contactsRequest" />

        <Loader v-show="!data"/>

        <TableList v-show="data" :data="data"/>

        <PaginationList />
    
        <TableForm />
    </div>
</template>

<script>
    import TableList from '../components/Table/TableList'
    import PaginationList from '../components/Table/PaginationList'
    import TableForm from '../components/Table/TableForm'
    import Loader from '../components/Table/Loader'
    import DropDown from '../components/Table/DropDown'

    export default {
        data: function() {
            return {
                data: null,
                newPage: 1,
                pagination: [],
                paginationLength: null
            }
        },
        components: {
            TableList,
            PaginationList,
            TableForm,
            Loader,
            DropDown
        },
        methods: {
            contactsRequest(data) {
                this.data = data;
            }
        },
        watch: {
            data: function(data) {
                this.data = data;
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    @import '../../node_modules/materialize-css/dist/css/materialize.min.css'; 
</style>