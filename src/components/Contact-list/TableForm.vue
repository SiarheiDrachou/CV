<template>
    <form class="form" @click.prevent="">
        <input class="form__input" type="text" placeholder="firstName" require v-model="firstName"/>
        
        <input class="form__input" type="text" placeholder="lastName" require v-model="lastName"/>
        
        <input class="form__input" type="email" placeholder="email" require v-model="email"/>
        
        <input class="form__input" type="tel" placeholder="phone" require v-model="phone"/>

        <button class="button" @click="add(firstName, lastName, email, phone)">Submit</button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
        }
    },
    props: [
        "data"
    ],
    methods: {
        add(firstName, lastName, email, phone) {
            if(!this.isAdd || !firstName || !lastName || !email || !phone) {
                this.isAdd = true;
                this.$emit("created", this.data, this.isAdd);
            }
            else {
                this.isAdd = false;
                this.data.push({
                    id: new Date().getMilliseconds(),
                    firstName,
                    lastName, 
                    email, 
                    phone
                })
                
                this.firstName=this.lastName=this.email=this.phone = null;
                this.$emit("created", this.data, this.isAdd);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .form {
        display: flex;
        padding: 0 10px;
        margin: 0 auto;

        &__input {
            border: 1px solid black !important;
            padding-left: 15px !important;
            width: 20% !important;
            min-width: 200px !important;
            margin-right: 15px !important;
        }
    }
</style>