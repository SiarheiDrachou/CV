<template>
    <ul class="pagination container center-align" ref="listEl">
            <li 
                class="left waves-effect arrowL" 
                ref="left"
                v-if="data"
            >
                <span>{{paginationLength * (newPage - 1)}} - {{paginationData.length * newPage}}</span> из <span>{{data.length}}</span>
            </li>

            <li 
                class="left waves-effect arrowL" 
                ref="left"
                v-show="data"
                @click="left"
            >
                <a href="#!"><i class="material-icons">chevron_left</i></a>
            </li>

            <li 
                class="waves-effect"
                v-for="(list, id) in pagination"
                :key="id"
                @click="nextPage($event)"
            >
                <a href="#!">{{id + 1}}</a>
            </li>

            <li 
                class="right waves-effect arrowR" 
                ref="right"
                v-show="data"
                @click="right"
            >
                <a href="#!"><i class="material-icons">chevron_right</i></a>
            </li>
        </ul>
</template>

<script>
export default {
    data: function() {
        return {
            newPage: 1,
            paginationData: []
        }
    },
    props: [
        'data',
        'paginationLength',
        'dataBig',
        'pagination'
    ],
    methods: {
        nextPage(event) {
            this.newPage = +event.target.textContent;

            this.page();
        },
        page() {
            if(this.data.length < 50) {
                this.newPage = 1;
                this.paginationData = [];
            }

            let j = 0;

            for(let i = (this.newPage - 1) * 50; i < (this.data.length <= 50 ? this.data.length : this.newPage * 50); i++) {
                this.paginationData[j] = this.dataBig[i];
                j++;
            }

            this.$emit("page", this.newPage);
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
        }
    },
    watch: {
        data: function(data) {
            this.data = data;
        },
        paginationData: function(paginationData) {
            this.paginationData = paginationData;
        },
        paginationLength: function(paginationLength) {
            this.paginationLength = paginationLength;
        },
        dataBig: function(dataBig) {
            this.dataBig = dataBig;
        },
        pagination: function(pagination) {
            this.pagination = pagination;
        }
    }
}
</script>