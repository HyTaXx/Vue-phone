<template>
  <div>
    <h1>Phone Number</h1>
    <div>
      <p>{{ this.$store.state.fund }}</p>
      <p>{{ this.$store.state.stock }}</p>
    </div>
    <section class="numbers">
      <div @click="add(9)"><button>9</button></div>
      <div @click="add(8)"><button>8</button></div>
      <div @click="add(7)"><button>7</button></div>
      <div @click="add(6)"><button>6</button></div>
      <div @click="add(5)"><button>5</button></div>
      <div @click="add(4)"><button>4</button></div>
      <div @click="add(3)"><button>3</button></div>
      <div @click="add(2)"><button>2</button></div>
      <div @click="add(1)"><button>1</button></div>
      <div @click="add(0)"><button>0</button></div>
    </section>
  </div>
  <button @click="call()">Appeler</button>
  <button @click="remove()">Effacer</button>
</template>
<script>

export default {
  name:'phoneView',
    data(){
        return {
            appels:{
                name:'',
                number:'',
                date:new Date()
            }
        }
    },

  computed:{
    personnes(){
      return this.$store.state.contacts
    }
  },
  methods:{
    call(){
      window.location.href = "http://localhost:8080/#/appelsView";
    },
    remove(){
      this.$store.state.stock=''
    },
    add(value){
      
      if(this.$store.state.stock.length<9){
        this.$store.state.stock += value
      } else {
        this.$store.state.stock += value
        let check = this.personnes.find(personnes => personnes.number == this.$store.state.stock.toString())
        if (check){
          this.appels.name = check.name
          this.appels.number = check.number
          this.$store.commit('appels',this.appels)
        this.$store.state.fund=check.name
      } else {
        this.$store.state.fund="Numéro non trouvé"
      }
      }  
    },
  } 
}
</script>
<style>
  .numbers{
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
  }
</style>