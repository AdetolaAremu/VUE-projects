<template>
  <h1>CATS ADDER APP</h1>
  <h2>Cats Count: {{ catscount }}</h2>

  <ul>
    <li v-for="(cat, index) in cats" :key="index">
      <div>{{ cat.name }} <span><button @click="remove(index)">x</button></span></div>
    </li>
  </ul>

  <form @submit.prevent="addkitty">
    <input v-model="newcats">
    <button>ADD CAT</button>
  </form>
</template>

<script>
export default {
  computed: {
    catscount(){
      return this.cats.length
    }
  },
  methods: {
    addkitty(){
      if(this.newcats !== '') {
        this.cats.push({name: this.newcats})
        this.newcats =''
      }
    },
    remove(index){
      this.cats = this.cats.filter((cat, i) => i !== index)
    }
  },
  data(){
    return {
      newcats: '',
      cats: [
        {name: 'Lions'},
        {name: 'Cats'},
        {name: 'Leopard'},
        {name: 'Hyena'},
        {name: 'Tiger'}
      ]
    }
  }
}
</script>

<style>

</style>