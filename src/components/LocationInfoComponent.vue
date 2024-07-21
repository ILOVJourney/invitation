<template>
  <img class="location-img" src="../assets/location.png">
  <h4>오시는 길</h4>
  <img class="map-img" src="../assets/map.png">
  <div class="left-side">
    <div class="ma-t-5">
      📢 주소:&nbsp; 수원시 덕영대로 1555번길 20, 2층
    </div>
    <div class="ma-t-5">
      🚗 차량:&nbsp; 수원시 덕영대로 1555번길 20, B2층
    </div>
    <div class="ma-t-5">
      🚌 대중교통:&nbsp; 망포역 하차 후, 8번 출구 직진
    </div>
  </div>
  <BottomLine />
</template>

<script>
import BottomLine from './BottomLine.vue';
export default {
  components:{
    BottomLine,
  }
}
</script>

<style scoped>
h4{
  margin-top:0px;
  margin-bottom: 8px;
  font-size: 18px;
  color: RGB(50, 58, 71);
}
.location-img {
    width: 10%; 
}
.map-img{
    margin-top: 5%;
    width: 100%; 
    height: auto; 
}
.ma-t-5{
    margin-left: 12%;
    margin-top: 5%;
}
.left-side{
  text-align: left;
  margin-top: 5%;
  margin-bottom: 50%;
  font-size: 14px;
}
</style>