<template>
  <h1 class="text-center">MARKDOWN APP</h1>
  <div class="marker">
      <div>
          <textarea class="left-wing" v-model="text" cols="30" rows="10"></textarea>
      </div>
      <div class="right-wing" v-html="markedtext"></div>
  </div>
</template>

<script>
import marked from 'marked';
export default {
    data(){
        return {
            text:'',
        }
    },
    computed: {
        markedtext(){
            return marked(this.text)
        }
    }
}
</script>

<style>
.marker {
    display: flex;
    margin-left: 25rem;
}
.left-wing {
    height: 250px;
}

.right-wing {
    height: 250px;
    background: slategray;
    color: white;
    width: 50%;
}

</style>