<template>
    <div class="scroll">
        <table class="table" cellspacing="2px">
            <thead class="thead">
                <tr>
                    <th
                        scope="col"
                        v-for="(items, id) of tableHead"
                        :key="id"
                    >
                        {{id}}
                        <p title="Сортировка по возрастанию">
                            <svg 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 16 16" 
                                class="bi bi-caret-up-fill" 
                                fill="currentColor" 
                                xmlns="http://www.w3.org/2000/svg"
                                @click="sortIncrease(id)"
                            >
                                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                        </p>

                        <p title="Сортировка по убыванию">
                            <svg 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 16 16" 
                                class="bi bi-caret-down-fill" 
                                fill="currentColor" 
                                xmlns="http://www.w3.org/2000/svg"
                                @click="sortDecrease(id)"
                            >
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </p>
                    </th>
                    <th>
                    </th>
                </tr>
            </thead>
            
            <tbody class="tbody">
                <tr 
                    v-for="(items, id) in list"
                    :key="id"
                > 
                    <td 
                        v-for="(item, key) in items"
                        :key="key"
                        @click="viewInformation(items)"
                    >                    
                        <span v-if="key !== 'address'" >{{ item }}</span>
                        
                        <span 
                            v-else 
                            v-for="(address, keys) in item"
                            :key="keys"
                        >
                            {{ keys }} : {{ address }}
                            <br />
                        </span>
                    </td>

                    <td>
                        <p title="Удаление контакта">
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
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                tableHead: null,
                list: null,
                newList: null,
                isClick: true
            }
        },
        props: [
            'data',
            'newPage'
        ],
        methods: {
            scroll() {
                let height = document.querySelector('.scroll').scrollHeight;
                setTimeout(() => {
                    window.scrollTo({
                        top: height,
                        behavior: "smooth"
                    });
                });
            },
            viewInformation(item) {
                this.scroll();

                this.$emit('views', item, this.isClick);
            },
            remove(id) { // Метод для удаления пользователя из таблицы контактов
                if (confirm("Удалить пользователя")) {
                    this.data.splice(id, 1);
                } 
                else {
                    alert("Вы нажали кнопку отмена")
                }
            },
            page() {
                this.list = [];
                let j = 0;

                for(let i = (this.newPage - 1) * 50; i < (this.data.length <= 50 ? this.data.length : this.newPage * 50); i++) {
                    if(i == this.data.length) {
                        return ;
                    }
                    else {
                        this.list[j] = this.data[i];
                        j++;
                    }
                }
            },
            sortIncrease(id) {
                if(id == 'address') {
                    this.list.sort(function(a, b) {
                        if ( a[`${id}`].city > b[`${id}`].city ) {
                            return -1;
                        }
                        if ( a[`${id}`].city < b[`${id}`].city ) {
                            return 1;
                        }
                    });
                }
                else {
                    this.list.sort(function(a, b) {
                        if ( a[`${id}`] > b[`${id}`] ) {
                            return 1;
                        }
                        if ( a[`${id}`] < b[`${id}`] ) {
                            return -1;
                        }
                    });
                }
            },
            sortDecrease(id) {
                if(id == 'address') {
                    this.list.sort(function(a, b) {
                        if ( a[`${id}`].city > b[`${id}`].city ) {
                            return 1;
                        }
                        if ( a[`${id}`].city < b[`${id}`].city ) {
                            return -1;
                        }
                    });
                }
                else {
                    this.list.sort(function(a, b) {
                        if ( a[`${id}`] > b[`${id}`] ) {
                            return -1;
                        }
                        if ( a[`${id}`] < b[`${id}`] ) {
                            return 1;
                        }
                    });
                }
            }
        },
        watch: {
            data: function(data) {
                this.data = data;
                this.tableHead = data[0];
                this.page();
            },
            list: function(list) {
                this.list = list;
            },
            newPage: function(newPage) {
                this.newPage = newPage;

                this.page();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .scroll {
        width: 100%;
        overflow-x: scroll;
    }
    .table {
        width: 95% !important;
        margin: 20px auto !important;
    }

    th, td {
        border: 1px solid black !important;
    }
    th {

        p {
            display: inline;
        }
    }
    td {
        padding: 5px 10px !important;
    }
    a {
        color: black !important;
    }
    svg {
        width: 20px;
        height: 20px;
    }
</style>