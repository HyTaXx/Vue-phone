<template>
    <div>
        <form @submit.prevent="ajoutContact">
            <input type="texte" placeholder="Nom ..." v-model="formContact.name">
            <input type="texte" placeholder="Numéro ..." v-model="formContact.number">
            <button type="submit">Ajouter</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"formContact",
    computed:{
        contacts(){
            return this.$store.state.contacts
        }
    },
    methods:{
        ajoutContact(){
            if (this.formContact.name == '' || this.formContact.number == '') return 

            this.$store.commit('ajoutContact',this.formContact)

            this.formContact = {
                name:'',
                number:''
            }
        }
    }

    
}
</script>
<style>
    
</style>