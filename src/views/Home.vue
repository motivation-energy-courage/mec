<template>
  <div class="home">
    <div id="title">Better Ethical Fashion Choice</div>
    <div class="honbun">
      <div class="introduce">
        <h3 style="text-align: center">
          エシカルファッションとは、<br />
          「環境を破壊しない」「労働者から搾取しない」「動物の命を守る」<br />といったエシカル消費の考え方に配慮して生産されたファッションの総称です。
        </h3>
      </div>
      
    </div>
    <div class="quiz">
      <h1>Quiz Game</h1>
      <h3 style="text-align: center">
        エシカルファッションについてあなたはどれだけ知っていますか？<br />環境・労働・動物の三つの観点から<br />考えていきましょう
      </h3>
      <h1>SNS</h1>
      <h3 style="text-align: center">
        エシカルファッションについて分かりやすく情報を載せているSNSを紹介します。
      </h3>

      <div class="shokai">
        <h2>①Ref Waseda ②エシカルな暮らし</h2>





      </div>
    </div>
  </div>
</template>





<style>
.home {
  background-image: url(https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_1280.jpg);
  background-size: cover;
  height: 580px;
  width: 100%;
  position: absolute;
  top: 0;
}
.home h1 {
  font-family: "Baskerville Old Face", serif;
  vertical-align: super;
}
.home h3 {
  width: 100%;
  height: 100px;
  text-align: center;
  z-index: 20;
  font-size: 20px;
  font-family: "Baskerville Old Face", serif;
  padding: 40px 0;
}

.home h4 {
  position: relative;
  top: 230px;
  text-align: center;
  color: white;
}

.quiz {
  font-family: "Baskerville Old Face", serif;
  position: relative; /*絶対配置*/
  top: 800px;
  text-align: center;
}

.quiz h1 {
  background-image: url(https://beiz.jp/images_P/pastel/pastel_00054.jpg);
  border-radius: 10px;

  width: 270px;
  height: 50px;
  margin: 0 auto;
}
#title {
  animation-name: fadeup;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  font-family: "Baskerville Old Face", serif;

  position: absolute;

  top: 20%;
  left: 10%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  color: white;
  padding: 1rem 0.5rem;
  font-size: 3em;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}
@keyframes fadeup {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.introduce h3 {
  position: absolute; /*絶対配置*/
  top: 600px;
}

.shokai {
  position: absolute;
  top: 440px;
}
</style>
