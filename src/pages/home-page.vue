<template>
  <OpeningComponenet />
  <LocationInfoComponent />
  <EndingComponenet :scroll-position="scrollPosition"/>
</template>

<script>
import OpeningComponenet from '../components/OpeningComponent.vue'
import LocationInfoComponent from '../components/LocationInfoComponent.vue'
import EndingComponenet from '../components/EndingComponent.vue'
export default {
  components: {
    OpeningComponenet,
    LocationInfoComponent,
    EndingComponenet,
  },
  data() {
    return {
      isLocationInfoVisible: false,
      isEndingVisible: false,
      scrollPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 80) { // 스크롤 위치가 100px 이상일 때
        this.isLocationInfoVisible = true;
      } 
      if (this.scrollPosition > 350){
        this.isEndingVisible = true;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
@import url('https://webfontworld.github.io/SCoreDream/SCoreDream.css');
body {
    background-image: url("../assets/background.png");
    background-size: contain;
    /* font-family: 'Noto Sans KR'; */
    font-family: 'SCoreDream';
    text-align: center;  
}
[style*="display: none"] {
  display: none !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>