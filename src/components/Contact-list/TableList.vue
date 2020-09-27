<template>
    <table class="table w-75 mx-auto" ref="table">
        <thead class="thead-dark w-75">
            <tr>
                <th
                    :class="thead.class" 
                    scope="col"
                    v-for="(thead, id) in tableHead"
                    :key="id"
                >
                    {{thead.text}}
                </th>
            </tr>
        </thead>
        <tbody class="table-body w-75" ref="tbody">
            <tr 
                v-for="(item, id) in data"
                :key="id"
            > 
                <td class="td">
                    {{item.id}} 

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

                    <svg 
                        width="1em" 
                        height="1em" 
                        viewBox="0 0 16 16" 
                        class="bi bi-trash" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                        @click="remove(id)"
                    >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </td>
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.email}}</td>
                <td>{{item.phone}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    data: function() {
        return {
            isAdd: false,
            paginationData: [],
            paginationLength: null,
            newPage: 1,
            tableHead: [
                {
                    class: 'id',
                    text: 'id'
                },
                {
                    class: 'firstName',
                    text: 'firstName'
                },
                
                {
                    class: 'lastName',
                    text: 'lastName'
                },
                {
                    class: 'email',
                    text: 'email'
                },
                {
                    class: 'phone',
                    text: 'phone'
                }
            ]
        }
    },
    props: [
        "data"
    ],
    methods: {
        create() {
            this.isAdd = true;
        },
        remove(id) {
            this.data.splice(id, 1);
            this.getTable(this.data);
        }
    },
    watch: {
        data: function(data) {
            this.data = data;
            this.getTable(this.data);
        }
    }
}
</script>

<style lang="scss" scoped>
    .td {
        min-width: 150px;

        svg:first-child {
            margin-left: 50px;
        }
    }
</style>