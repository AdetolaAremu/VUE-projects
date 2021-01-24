<template>
  <h1>Hero count {{ herocount }}</h1>

  <ul>
    <li v-for="(hero, index) in dcheros" :key="index">
      <div>{{ hero.name }} <span><button @click="remove(index)">x</button></span></div>
    </li>
  </ul>

  <form @submit.prevent="addhero">
    <input v-model='newhero'>
    <button>ADD MEAL</button>
  </form>
</template>

<script>
export default {
    computed: {
    herocount(){
      return this.dcheros.length
    }
  },
  methods: {
    addhero(){
      if (this.newhero !== '') {
        this.dcheros.push({name: this.newhero})
        this.newhero=''
      }
    },
    remove(index){
      this.dcheros = this.dcheros.filter((hero, i) => i !== index)
    }
  },
  data(){
    return {
      newhero:'',
      dcheros: [
        {name: 'Arrow'},
        {name: 'Superman'},
        {name: 'Superwoman'},
        {name: 'Flash'}
      ]
    }
  }
}
</script>
