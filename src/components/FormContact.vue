<template>
    <div class="flex2">
        <form @submit.prevent="ajoutContact" class="flex">
            <input type="texte" placeholder="Nom ..." v-model="formContact.name" class="stock">
            <input type="texte" placeholder="Numéro ..." v-model="formContact.number" class="stock">
            <button type="submit" class="btn">Ajouter</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"formContact",
    data() {   
            return {
                formContact: {
                    name: '',
                    number: '',
                }
            }

        },
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
<style scoped>
    .flex{
        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 20px;
    }

    .flex2{
        display: flex;
        justify-content: center;
    }

    .stock{
        padding: 5px;
    }

    .btn{
        width: 50%;
        margin: auto;
        padding: 5px;
    }
</style>