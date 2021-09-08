<template>
  <div class="tips">
          <Modal />
          <Modal2 />
    <div class="modal">


      <div class="my_modal_body1">
        <div class="my_modal_header">
          <img src="@/assets/中田.jpg" width="150" height="100" />
          <h2>中田敦彦さんがエシカルブランドを立ち上げ</h2>
          <h3>
            中田敦彦さんが<br />
            こんにちはあああああああああああああああああああああああ
          </h3>
          

          <label class="my_modal_close" for="my_modal1"
            ><div class="my_modal_close_icon"><span></span></div></label
          ><!-- 閉じるボタン --> </div>
 
      </div></div>



      <div class="my_modal_body1">
        <div class="my_modal_header">
          <img src="@/assets/中田.jpg" width="150" height="100" />

          <label class="my_modal_close" for="my_modal1"
            ><div class="my_modal_close_icon"><span></span></div></label
          ><!-- 閉じるボタン --> </div>
 
      </div>


    <div class="baloon">
      
        <img src="@/assets/オレンジ風船2.png" width="410" height="500" />
      <h3>
        中田敦彦さんが<br />
        エシカルファッション<br />ブランドを立ち上げ！
      </h3>



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
  </div>
</template>

<script>
import Modal from "../components/modal.vue"
import Modal2 from "../components/modal2.vue"


export default {
  components: {
    Modal,
    Modal2,
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
  top: 380px;
}

.baloon h3 {
  color: black;
  position: absolute;
  top: 75px;
  left: 135px;
  font-family: "Baskerville Old Face", serif;
}

.nakata {
  position: absolute;
  top: 200px;
  left: 130px;
  border-radius: 30px;
}

.kari {
  position: absolute;
  top: 200px;
  left: 150px;
  border-radius: 30px;
}

.used {
  position: absolute;
  top: 200px;
  left: 180px;
  border-radius: 30px;
}

.baloon:hover {
      transform: scale(1.06, 1.06); /*画像の拡大*/

}

.baloon2 {
  animation: wobbling_x 0.7s ease-in-out infinite alternate,
    wobbling_y 1.2s ease-in-out infinite alternate;
  transition-duration: 0.5s; /*変化の時間*/
  position: absolute;
  top: 590px;
  right: 500px;
}

.baloon2 h3 {
  position: absolute;
  top: 100px;
  left: 107px;
  font-family: "Baskerville Old Face", serif;
}
.baloon2:hover {
    transform: scale(1.1, 1.1); /*画像の拡大*/

}

.baloon3 {
  animation: wobbling_x 0.7s ease-in-out infinite alternate,
    wobbling_y 1.2s ease-in-out infinite alternate;
  z-index: 10;
  transition-duration: 0.5s; /*変化の時間*/
  position: absolute;
  top: 750px;
  right: 0px;
}

.baloon3 h3 {
  position: absolute;
  top: 80px;
  left: 130px;
  font-family: "Baskerville Old Face", serif;
}

.baloon3:hover {
  transform: scale(1.1, 1.1); /*画像の拡大*/
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



</style>
