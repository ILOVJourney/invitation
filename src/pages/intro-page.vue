<template>
<img src="../../public/intro.png" @click="goToHome">
</template>

<script>
export default{
  methods: {
    goToHome() {
      this.$router.push('/home')
    },
  },
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