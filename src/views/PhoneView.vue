<template>
  <div>
    <h1>Phone Number</h1>
    <div>
      <p>{{ this.$store.state.fund }}</p>
      <p>{{ this.$store.state.stock }}</p>
      <button @click="remove()">Effacer</button>
    </div>
    <section class="wrapper">
      <div @click="add(1)"><button class="btn">1</button></div>
      <div @click="add(2)"><button class="btn">2</button></div>
      <div @click="add(3)"><button class="btn">3</button></div>
      <div @click="add(4)"><button class="btn">4</button></div>
      <div @click="add(5)"><button class="btn">5</button></div>
      <div @click="add(6)"><button class="btn">6</button></div>
      <div @click="add(7)"><button class="btn">7</button></div>
      <div @click="add(8)"><button class="btn">8</button></div>
      <div @click="add(9)"><button class="btn">9</button></div>
      <p></p>
      <div @click="add(0)"><button class="btn">0</button></div>
    </section>
  </div>
  <button @click="call()">Appeler</button>
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
<style scoped>
  .wrapper{
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 10px;
    width: 300px;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
  }

  .btn{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>