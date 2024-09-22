<template>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <iframe 
          src="https://m.place.naver.com/restaurant/1810863210/home" 
          width="100%" 
          height="400px" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
        <button class="close-button" @click="closeModal">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close'); 
    },
  },
};
</script>

<style>
@import url('https://webfontworld.github.io/SCoreDream/SCoreDream.css');
/* 모달 오버레이: 배경 반투명 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 콘텐츠: 중앙에 위치 */
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  text-align: center;
}


/* 닫기 버튼 스타일 */
.close-button {
  margin-top: 20px;
  font-family: 'SCoreDream';
  background-color: #f595c5; /* 핑크색 배경 */
  color: white; /* 텍스트 색상 */
  border: none;
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  border-radius: 5px; /* 둥근 모서리 */
  transition: background-color 0.3s; /* 배경색 변화 애니메이션 */
  margin-bottom: 20px; /* 버튼과 iframe 사이 간격 */
}

/* 버튼 호버 효과 */
.close-button:hover {
  background-color: #e951a2; /* 어두운 핑크색으로 변경 */
}

</style>