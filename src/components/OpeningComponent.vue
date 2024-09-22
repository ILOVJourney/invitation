<template>
    <img src="../assets/lovelove.png">
    <h4>"두 가족의 따뜻한<br>첫 만남에 초대합니다."</h4>
    <div class="date">
        <text class="font-date">2024년 10월 19일 (토) 오후 6시</text>
    </div>
    <div class="font-small">
            더위를 이겨내고,<br>
            따스함과 시원함이 공존하는 9월,<br>
            두 가족의 첫 만남을 시작하려 합니다.
        <div class="ma-t-8">
            저희 두 사람의 만남을<br>
            허락해주시고 응원해주신<br>
            가족 여러분께 감사드리며,<br>
            함께하는 첫걸음에<br>
            양가 부모님을 모시고자 합니다.<br><br>
            소중한 만남의 자리를 빛내주세요.
        </div>
        <div class="ma-tb-30">
            <b>명주</b>&nbsp;&nbsp;&nbsp;그리고&nbsp;&nbsp;&nbsp;<b>지현</b>
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
    font-size: 22px;
    color: RGB(50, 58, 71);
    font-family: 'KBO-Dia-Gothic_bold';
    margin: 0;
    line-height: 30px;
}
.date{
    margin-top: 12%;
}
.font-date {
  background-color: #fff2cc; /* 형광펜 색상 (노란색) */
  padding: 8px; /* 텍스트와 배경 사이 여백 */
  font-size: 15px;
  border-radius: 4px; /* 모서리 둥글게 */
}
.font-small{
    font-size: 15px;
    margin-top: 13%;
    line-height: 26px;
}
img {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 45%; 
    height: auto; 
}
.ma-t-6p{
    margin-top: 6px;
}
.ma-t-8{
    margin-top: 8%;
}
.ma-tb-30{
    margin-top: 20%;
}

@font-face {
    font-family: 'KBO-Dia-Gothic_bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}
</style>


