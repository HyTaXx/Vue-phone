import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts:[
      {
        name:'JEREMY',
        number:"0782555250"
      },
      {
        name:'Armand',
        number:"0782945132"
      },
    ],
    appels:[
      {
        name:'JEREMY',
        number:'0782555250',
        date:new Date()
      }
    ],
    stock:'',
    found:''
  },
  getters: {
  },
  mutations: {
    ajoutContact(state,contacts){
      state.contacts.push(contacts)
    },
    appels(state,check){
      state.appels.push(check)
    }
  },
  actions: {
  },
  modules: {
  }
})