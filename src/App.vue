<template>
  <img src="../public/intro.png" v-if = "isIntroView" @click="clickHandler">
  <HomePage v-if="!isIntroView"/>
</template>

<script>
import HomePage from './pages/home-page.vue';

export default {
  name: 'App',
  data() {
    return {
      isIntroView: true,
    };
  },
  methods:{
    clickHandler(){
      this.isIntroView = false
    },
  },
  components:{
    HomePage,
  }
}
</script>
<style scoped>
  img{
    position:absolute; 
    width: 100%;
    left:50%;
    top:50%; 
    transform:translateY(-50%) translateX(-50%);
  }
</style>