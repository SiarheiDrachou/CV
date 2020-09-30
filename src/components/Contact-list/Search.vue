<template>
    <div class="search">
            <input 
                type="text" 
                placeholder="Поиск"
                v-model="find"
            >
            <button @click="search(find)">Найти</button>
        </div>
</template>

<script>
    export default {
        data: function() {
            return {
                find: null,
                results: []
            }
        },
        props: [
            'dataArr'
        ],
        methods: {
            search(find) {
                let j = 0;
                this.results = [];

                for(let i = 0; i < this.dataArr.length; i++) {
                    for(let key in this.dataArr[i]) {
                        let dataItem = this.dataArr[i];
                        if(dataItem[key].toString().indexOf(`${find}`)!==-1) {
                            this.results[j] = this.dataArr[i];
                            j++;
                        }
                    }
                }

                if(this.results.length == 0) {
                    alert('Ничего не найдено');
                    this.$emit('search', this.dataArr);
                }
                else {
                    this.$emit('search', this.results);
                }
            }
        },
        watch: { // Следим за именениями в переменных 
            dataArr: function(dataArr) {
                this.dataArr = dataArr;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        width: 95%;
        margin: 50px auto;
    }
</style>