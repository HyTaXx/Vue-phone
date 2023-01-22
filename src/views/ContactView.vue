<template>
    <div>
        <formContact />
        <h1>Contacts</h1>
        <div v-for="contact in contacts" :key="contact.number" class="stock">
            <div class="flex box-contact">  
                <img src="@/assets/circle-user-solid.svg" alt="Icone" class="logo">
                <h2>{{ contact.name }} | Numéro : {{  contact.number }}</h2>
            </div>
        </div>
    </div>

</template>

<script>
import formContact from '@/components/FormContact.vue'
export default {
    name:'contactView',
    components:{
        formContact
    },
    computed:{
        contacts(){
            return this.$store.state.contacts
        }
    },
}
</script>
<style scoped>
    .logo{
        width: 50px;
        height: 50px;
        margin: 0;
    }

    .flex{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
        align-items: center;
    }

    .box-contact{
        padding-left: 10px;
        padding-right: 10px;
    }

    .stock{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>