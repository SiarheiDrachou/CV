<template>
    <div>
        <Loader v-if="display" />
        
        <div class="container" v-show="!display">
            <h1 class="center-align"> Image gallery </h1>

            <div 
                class="row" 
                ref="cardImg"
            >
            </div>
        </div>
        
        <ul class="pagination container center-align" ref="listEl" @click="nextPage($event)" v-show="!display"></ul>
    </div>
</template>

<script>
    import M from 'materialize-css';
    import Loader from '../components/Picture-gallery/Loader'

    export default {
        data: function() {
            return {
                downloadImg:null,
                imgJSON: null,
                currentPage: null,
                newPage: null,
                limit: 40,
                display: true,
                start: 0
            }
        },
        components: {
            Loader
        },
        methods: {
            async readImage() {
                if(this.start === 0) {
                    try { 
                        this.downloadImg = await fetch(`https://picsum.photos/v2/list?limit=${this.limit}`);
                        this.imgJSON = await this.downloadImg.json();

                        this.getImage();
                    }
                    catch {
                        alert("So sorry, it's error...")
                    }
                }
            },
            startSession() {
                this.currentPage = +localStorage.getItem('page');
    
                if (!this.currentPage) {
                    this.currentPage = 1;
                    localStorage.setItem('page', this.currentPage);
                }
            },
            nextPage(event) {
                if(this.$refs.listEl.firstElementChild.firstElementChild.firstElementChild === event.target) {
                    this.left(event);
                }
                else if(this.$refs.listEl.lastElementChild.firstElementChild.firstElementChild === event.target) {
                    this.right(event);
                }
                else if(this.$refs.listEl === event.target ) {
                    return ;
                }
                else {
                    this.newPage = event.target.textContent;
                    localStorage.setItem('page', this.newPage);
                    this.disabled();
                    this.getImage();
                }
            },
            left(event) {
                const leftChevron = event.target;
                this.currentPage = +localStorage.getItem('page');

                if (leftChevron === this.$refs.listEl.firstElementChild.firstElementChild.firstElementChild && this.currentPage > 1) {
                    this.newPage = this.currentPage - 1;
                    localStorage.setItem('page', this.newPage);
                    this.getImage();
                    this.disabled();
                }
            },
            right(event) {
                const rightChevron = event.target;
                this.currentPage = +localStorage.getItem('page');

                if (rightChevron === this.$refs.listEl.lastElementChild.firstElementChild.firstElementChild && this.currentPage < Math.ceil(this.limit / 10)) {
                    this.newPage = this.currentPage + 1;
                    localStorage.setItem('page', this.newPage);
                    this.getImage();
                    this.disabled();
                }
            },
            disabled() {
                if (this.newPage == 1) {
                    this.$refs.listEl.firstElementChild.classList.add('disabled');
                    this.$refs.listEl.firstElementChild.classList.remove('waves-effect');
                    this.$refs.listEl.lastElementChild.classList.remove('disabled');
                    this.$refs.listEl.lastElementChild.classList.add('waves-effect');
                }
                else if (this.newPage == Math.ceil(this.limit / 10)) {
                    this.$refs.listEl.lastElementChild.classList.add('disabled');
                    this.$refs.listEl.lastElementChild.classList.remove('waves-effect');
                    this.$refs.listEl.firstElementChild.classList.remove('disabled');
                    this.$refs.listEl.firstElementChild.classList.add('waves-effect');
                }
                else {
                    this.$refs.listEl.firstElementChild.classList.remove('disabled');
                    this.$refs.listEl.lastElementChild.classList.remove('disabled');
                    this.$refs.listEl.firstElementChild.classList.add('waves-effect');
                    this.$refs.listEl.lastElementChild.classList.add('waves-effect');
                }
            },
            paginationList() {
                this.$refs.listEl.innerHTML = '';

                let paginationItem = `  <li 
                                            class="left waves-effect arrowL" 
                                            ref="left"
                                        >
                                            <a href="#!"><i class="material-icons">chevron_left</i></a>
                                        </li>
                `
                this.$refs.listEl.insertAdjacentHTML('afterbegin', paginationItem);
                for (let i = 0; i < Math.ceil(this.limit / 10); i++) {
                    paginationItem = `  <li 
                                            class="waves-effect"
                                        >
                                            <a href="#!">${i+1}</a>
                                        </li>`;
                    this.$refs.listEl.insertAdjacentHTML('beforeend', paginationItem);

                    if(this.limit <= 10) {
                        this.newPage = 1;
                        this.disabled();
                    }
                }

                paginationItem = `  <li 
                                        class="right waves-effect arrowR" 
                                        ref="right"
                                    >
                                        <a href="#!"><i class="material-icons">chevron_right</i></a>
                                    </li>
                `
                this.$refs.listEl.insertAdjacentHTML('beforeend', paginationItem);
            },
            getImage() {
                this.$refs.cardImg.innerHTML = '';

                for(let i = (+localStorage.getItem('page') - 1) * 10; i < +localStorage.getItem('page') * 10; i++) {
                    let cardImage = `<img class="col l3 m6 s12 materialboxed" style="margin: 2px;" src="${this.imgJSON[i].download_url}">`;
                    this.$refs.cardImg.insertAdjacentHTML('beforeend', cardImage);
                }
                M.AutoInit();
            }
        },
        mounted() {
            this.startSession();
            this.readImage();
            this.paginationList();
            this.disabled();
            M.AutoInit();
            this.display = false;
            this.start++;
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../node_modules/materialize-css/dist/css/materialize.min.css';

    .preloader-wrapper {
        display: block;
    }

    .row,
    .pagination {
        display: block !important;
    }
</style>