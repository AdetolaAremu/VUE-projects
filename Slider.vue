<template>
  <h1 class="text-center">SLIDER APP</h1>
  <div>
      <div v-if="currentslide == 0" class="first-slider"></div>
      <div v-if="currentslide == 1" class="second-slider"></div>
      <div v-if="currentslide == 2" class="third-slider"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentslide:0,
        }
    },
    mounted(){
        setInterval(() => {
            console.log('This is slide', this.currentslide)
           if(this.currentslide == 2) {
               this.currentslide = 0
           } else {
               this.currentslide++
           }
        }, 1000);
    }
}
</script>

<style>

.first-slider {
    background: violet;
    height: 350px;
}

.second-slider {
    background: tomato;
    height: 350px;
}

.third-slider {
    background: turquoise;
    height: 350px;
}


</style>