<template>
    <img class="camera-img" src="../assets/camera.png">
    <h4>우리의 추억</h4>
    <div class="grid-container">
    </div>
    <img class="grid-item" src="../assets/mjh01.jpg">
    <img class="grid-item" src="../assets/mjh05.jpg">
    <img class="grid-item" src="../assets/mjh03.jpg">
</template>

<script>
export default {
  props: {
    scrollPosition: {
      type: Number,
      required: true,
    }
  },
  methods: {
    watch:{
      scrollPosition(newValue){
        newValue;
      },
    },
  },
}
</script>

<style scoped>
h4{
  margin-top: 0px;
  margin-bottom: 8px;
  font-size: 18px;
  color: RGB(50, 58, 71);
}
.camera-img {
    width: 10%; 
    height: auto; 
}
.onion-img{
    width: 20%
}
.grid-container {
  margin-top:10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
}
.grid-item {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  width: 100%;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>