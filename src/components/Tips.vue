<template>
  <div class="tips">
    <Modal />
    <Modal2 />
    <Modal3 />

    <div class="my_modal_body1">
      <div class="my_modal_header">
        <label class="my_modal_close" for="my_modal1"
          ><div class="my_modal_close_icon"><span></span></div></label
        ><!-- 閉じるボタン -->
      </div>
    </div>

    <div class="baloon">
      <img src="@/assets/オレンジ風船2.png" width="410" height="500" />
    </div>
    <div class="nakataphraze">
      <h3>
        中田敦彦さんが<br />
        エシカルファッション<br />ブランドを立ち上げ！
      </h3>
    </div>
    <div>
      <img class="nakata" src="@/assets/中田.jpg" width="150" height="100" />
    </div>

    <div class="baloon2">
      <img src="@/assets/水色風船2.png" width="450" height="500" />
      <h3>月額制服借り放題サービス<br />「メチャカリ」って知ってる？</h3>
      <img
        class="kari"
        src="@/assets/メチャカリ.png"
        width="150"
        height="100"
      />
    </div>

    <div class="baloon3">
      <img src="@/assets/ピンク風船2.png" width="570" height="450" />
      <h3>ユニクロやGU、H&Mが無料で<br />古着を回収しています！</h3>
      <img class="used" src="@/assets/古着回収.jpeg" width="150" height="100" />
    </div>


    <Submit />
  </div>
</template>

<script>
import Modal from "../components/modal.vue"
import Modal2 from "../components/modal2.vue"
import Modal3 from "../components/modal3.vue"
import Submit from "../components/Submits.vue"

export default {
  components: {
    Modal,
    Modal2,
    Modal3,
    Submit,

  },
}
</script>

<style scoped>
.baloon {
  animation: wobbling_x 0.7s ease-in-out infinite alternate,
    wobbling_y 1.2s ease-in-out infinite alternate;
  z-index: 10;
  transition-duration: 0.5s; /*変化の時間*/
  position: relative;
  top: 490px;
  z-index: 2;
}

.nakataphraze {
  position: relative;
  top: 80px;
  z-index: 300;
  float: left;
  margin-left: 120px;
}
.nakata {
  position: relative;
  top: 170px;
  margin-left: -170px;
  z-index: 300;
  border-radius: 30px;
}

.kari {
  position: relative;
  top: -370px;
  left: 0px;
  border-radius: 30px;
}

.used {
  position: relative;
  top: -330px;
  margin-left: 180px;
  border-radius: 30px;
}



.baloon2 {
  animation: wobbling_x 0.5s ease-in-out infinite alternate,
    wobbling_y 0.8s ease-in-out infinite alternate;
  transition-duration: 0.5s; /*変化の時間*/
  top: 890px;
  text-align: center;
  position: relative;
  top: -300px;
}

.baloon2 h3 {
  position: relative;
  top: -400px;
  font-family: "Baskerville Old Face", serif;
}

.baloon3 {
  animation: wobbling_x 0.7s ease-in-out infinite alternate,
  wobbling_y 1.2s ease-in-out infinite alternate;
  z-index: 10;
  transition-duration: 0.5s; /*変化の時間*/
  position: relative;
  float: right;
  top: -810px;
}

.baloon3 h3 {
  position: relative;
  top: -370px;
  margin-left: 130px;
  font-family: "Baskerville Old Face", serif;
}

.baloon4 {
  animation: wobbling_x 0.5s ease-in-out infinite alternate,
    wobbling_y 1s ease-in-out infinite alternate;
  z-index: 10;
  transition-duration: 0.5s; /*変化の時間*/
  position: relative;
  top: -700px;
}
@keyframes wobbling_x {
  0% {
    margin-left: 18px;
  }

  100% {
    margin-left: 0px;
  }
}

@keyframes wobbling_y {
  0% {
    margin-top: 0px;
  }

  100% {
    margin-top: 25px;
  }
}

.baloon4 h3 {
  position: relative;
  top: 100px;
  font-family: "Baskerville Old Face", serif;
}


</style>
