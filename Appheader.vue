<template>
  <nav class="router-header">
    <router-link v-for="item in list" :to="item.to" :key="item.to" class="router-header">{{ item.to }}</router-link>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      list: [
        {title: 'Home', to:'/'},
        {title: 'Cats Limited', to:'cats'},
        {title: 'Heros', to:'dc-heros'},
        {title: 'markdown', to:'Markdown'},
        {title: '/slider', to:'Slider'}
      ]
    }
  }
}
</script>

<style>
.router-header {
  display: flex;
  padding: 0 10px;
}
</style>