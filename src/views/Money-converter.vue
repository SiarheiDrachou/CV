<template>
    <div>
        <div class="dropdown m-5">
            <button 
                class="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
                ref="btn" 
                v-show="!spinner"
            >
                {{startValue}}
            </button>

            <div 
                class="dropdown-menu p-0" 
                ref="dropmenu" 
                @click="buildThead($event)" 
                v-show="!spinner"
            >
            </div>
        </div>
        
        <div class="spinner-border text-danger mx-auto" role="status" v-if="spinner"></div>

        <table class="table w-75 mx-auto" ref="table" v-show="!spinner">
            <thead class="thead-dark w-50">
                <tr>
                <th class="col w-100" scope="col" ref="col"> 
                    USD Exchange rate
                </th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-body w-75" ref="tbody"></tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                money : null,
                moneys: null,
                spinner: true,
                startValue: null
            }
        },
        methods: {
            startSession() {
                if(!localStorage.getItem('valuta')) {
                    localStorage.setItem('valuta', 'USD');
                    let elMenu = document.querySelector(`.${localStorage.getItem('valuta')}`);
                    elMenu.classList.add('active');
                } 
                this.startValue = localStorage.getItem('valuta');
                this.readMoney();
            },
            buildTbody(arrKeys, arrValues) {
                this.$refs.btn.innerHTML = localStorage.getItem('valuta');
                this.$refs.col.innerHTML = localStorage.getItem('valuta') + " Exchange rate";
                this.$refs.tbody.innerHTML = '';
                for(let i = 0; i < arrValues.length; i++) {
                    let tbodyTextEl =  `<tr class="row-${i+1}">
                                            <th scope="row"> ${arrValues[i]} </th>
                                            <td>${arrKeys[i]}</td>
                                        </tr>`;
                    this.$refs.tbody.insertAdjacentHTML('beforeend', tbodyTextEl);
                }
                this.buildButton(arrValues);
            },
            async readMoney () {
                try {
                    this.money = await fetch(`https://api.exchangerate-api.com/v4/latest/${localStorage.getItem('valuta')}`);
                    this.moneys = await this.money.json();
                    let arrValues = Object.keys(this.moneys.rates);
                    let arrKeys = Object.values(this.moneys.rates);

                    this.buildTbody(arrKeys, arrValues);
                }
                catch {
                    alert("ERROR!!!")
                }
                finally {
                    this.spinner = false;
                }
            },
            buildThead(event) {
                if(event.target.textContent.length == 3) {
                    localStorage.setItem('valuta', event.target.textContent);
                    let elMenu = event.target;
                    for(let i = 0; i < this.$refs.dropmenu.children.length; i++) {
                        let linkEl = this.$refs.dropmenu.children[i];
                        linkEl.classList.remove('active');
                    }
                    elMenu.classList.add('active');
                    this.readMoney();
                }
            },
            buildButton(arrValues) {
                for(let i = 0; i < arrValues.length; i++) {
                    let values = `<a class="${arrValues[i]} item-${i} dropdown-item" href="#">${arrValues[i]}</a>`
                    this.$refs.dropmenu.insertAdjacentHTML('beforeend', values);
                }
            }
        },
        mounted() {
            this.startSession();
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>