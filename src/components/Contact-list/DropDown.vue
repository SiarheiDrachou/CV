<template>
    <div>
        <div class="dropdown m-5">
            <button 
                class="btn btn-secondary mr-5" 
                type="button"
                @click="request($event)"
            >Small</button>

            <button 
                class="btn btn-secondary" 
                type="button"
                @click="request($event)"
            >Big</button>
        </div>

        <Loader v-show="spinner"/>
    </div>
</template>

<script>
import Loader from './Loader'

export default {
    data: function() {
        return {
            dataRequest : null,
            dataBig: null,
            dataSmall: null,
            data: null,
            spinner: false
        }
    },
    components: {
        Loader
    },
    methods: {
        async request (event) {
            this.spinner = true;

            if(event.target.textContent == 'Small' && this.dataSmall == null) {
                try {
                    this.dataRequest = await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|5}`);
                    this.data = await this.dataRequest.json();
                    this.dataSmall = this.data;

                    this.$emit("contactsRequest", this.data);
                    }
                catch {
                    alert("ERROR!!!")
                }
                finally {
                    this.spinner = false;
                }
            }
            else if(event.target.textContent == 'Small' && this.dataSmall !== null) {
                this.data = this.dataSmall;
                this.spinner = false;

                this.$emit("contactsRequest", this.data);
            }
            if(event.target.textContent == 'Big' && this.dataBig == null) {
                try {
                    this.dataRequest = await fetch(`http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|5}`);
                    this.data = await this.dataRequest.json();
                    this.dataBig = this.data;

                    this.$emit("contactsRequest", this.data);
                    }
                catch {
                    alert("ERROR!!!")
                }
                finally {
                    this.spinner = false;
                }
            }
            else if(event.target.textContent == 'Big' && this.dataBig !== null) {
                this.data = this.dataBig;
                this.spinner = false;

                this.$emit("contactsRequest", this.data);
            }
        }
    }
}
</script>