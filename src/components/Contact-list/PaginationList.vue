<template>
    <ul class="pagination container center-align" ref="listEl">
            <li 
                class="pagination__item" 
                v-if="data"
                style="min-width: 150px"
            >
                <span>{{startSize}} - {{endSize}} </span> из <span> {{size}}</span>
            </li>

            <li 
                class="pagination__item waves-effect" 
                ref="left"
                v-show="data"
                @click="left"
            >
                <a href="#!">&lt;</a>
            </li>

            <li 
                class="pagination__item waves-effect"
                v-for="(list, id) in paginations"
                :key="id"
                @click="nextPage(id)"
            >
                <a href="#!">{{id + 1}}</a>
            </li>

            <li 
                class="pagination__item waves-effect" 
                ref="right"
                v-show="data"
                @click="right"
            >
                <a href="#!">&gt;</a>
            </li>
        </ul>
</template>

<script>
    export default {
        data: function() {
            return {
                newPage: 1,
                paginationData: [],
                paginations: []
            }
        },
        props: [
            'data'
        ],
        methods: {
            nextPage(id) {
                this.newPage = id + 1;

                this.page();
            },
            page() {
                if(this.data.length < 50) {
                    this.newPage = 1;
                    this.paginationData = [];
                }

                let j = 0;

                for(let i = (this.newPage - 1) * 50; i < (this.data.length <= 50 ? this.data.length : this.newPage * 50); i++) {
                    this.paginationData[j] = this.data[i];
                    j++;
                }

                this.$emit("newPage", this.newPage);
            },
            left() {
                if (this.newPage > 1) {
                    this.newPage--;
                    
                    this.page();
                }
            },
            right() {
                if (this.newPage < Math.ceil(this.data.length / 50)) {
                    this.newPage++;
                    
                    this.page();
                }
            },
            pagination() {
                this.paginations = [];

                for(let i = 0; i < Math.ceil(this.data.length / 50); i++) {
                    this.paginations[i] = i + 1;
                }

                this.page();
            }
        },
        watch: {
            data: function(data) {
                this.data = data;

                this.pagination();
            },
            paginationData: function(paginationData) {
                this.paginationData = paginationData;
            }
        },
        computed: {
            startSize: function () {
                return this.paginationData.length * (this.newPage - 1);
            },
            endSize: function () {
                return (this.paginationData.length * this.newPage > this.data.length ? this.data.length : this.paginationData.length * this.newPage);
            },
            size: function () {
                return this.data.length;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 25px;

        &__item {
            list-style-type: none;
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                text-decoration: none;
            }
        }

        &__item:first-child {
            justify-content: space-between;
        }
    }
</style>