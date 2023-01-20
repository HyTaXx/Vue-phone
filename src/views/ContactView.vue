<template>
    <div>
        <formContact />
        <h1>Contacts</h1>
        <div v-for="contact in contacts" :key="contact.number">
            <h2>Nom de contact : {{ contact.name }} | Numéro : {{  contact.number }}</h2>
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
<style>
    
</style>