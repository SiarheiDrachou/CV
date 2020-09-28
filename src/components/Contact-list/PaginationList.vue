<template>
    <ul class="pagination container center-align" ref="listEl">
            <li 
                class="" 
                v-if="data"
                style="width: 150px"
            >
                <span>{{paginationData.length * (newPage - 1)}} - {{(paginationData.length * newPage > data.length ? data.length : paginationData.length * newPage)}}</span> из <span>{{data.length}}</span>
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
                v-for="(list, id) in paginations"
                :key="id"
                @click="nextPage(id)"
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
    }
}
</script>