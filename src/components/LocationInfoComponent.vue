<template>
  <img class="location-img" src="../assets/location.png">
  <h4>오시는 길</h4>
  <img class="map-img" src="../assets/map.png" @click="openPopup">
  <div class="left-side">
    <div class="ma-t-5">
      📢 주소:&nbsp; 경기 수원시 영통구 영통로214번길 31 2층
    </div>
    <div class="ma-t-5">
      🚗 차량:&nbsp; 벽적골롯데캐슬9단지아파트 주차장
    </div>
    <div class="ma-t-5">
      🚌 대중교통:&nbsp; 망포역 하차 후, 8번 출구
    </div>
  </div>
  <MapModal :show-modal="showModal" @close="closePopup"/>
  <BottomLine />
</template>

<script>
import BottomLine from './BottomLine.vue';
import MapModal from '../modal/MapModal.vue'
export default {
  data() {
    return {
      showModal: false,
    };
  },
  components:{
    BottomLine,
    MapModal,
  },
  methods: {
    openPopup() {
      this.showModal = true;
    },
    closePopup(){
      this.showModal = false;
    }
  },
  watch:{
    showModal(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden'; // 모달 열림
      } else {
        document.body.style.overflow = ''; // 모달 닫힘
      }
    },
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
    margin-left: 10%;
    margin-top: 5%;
}
.left-side{
  text-align: left;
  margin-top: 5%;
  margin-bottom: 50%;
  font-size: 14px;
}
</style>