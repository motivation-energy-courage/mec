<template>
  <div class="home">
    <div id="title">Better Ethical Fashion Choice</div>
    <div id="team"><h4>MEC</h4></div>
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
        エシカルファッションについてあなたはどれだけ知っていますか？<br />環境・労働・動物の三つの観点から<br />考えていきましょう。
      </h3>
      <h1>Information</h1>
      <h3 style="text-align: center,font-size: 30px;">
        エシカルファッションについて分かりやすく情報を載せているWebサイトを紹介します。
      </h3>
      <div class="site">
        <iframe src="https://smartpeople.jp/column/lana-plaza/"></iframe>
        <iframe src="https://naruhodosdgs.jp/ethical-fashion/"></iframe>
        <iframe src="https://www.yogaroom.jp/yogahack/p/6587"></iframe>
      </div>
      <div class="shokai" style="word-spacing: 80px">
        <h2>
          ①歴史に残る悲劇・ラナプラザ事件について
          ②エシカルファッションってどんなもの？
          ③ファストファッションの裏にある事実
        </h2>
        <div>
          <insta />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Insta from "../components/Insta.vue"

export default {
  components: {
    Insta,
  },
}
</script>

<style>
.home {
  background-image: url(https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_1280.jpg);
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.09);
  background-blend-mode: lighten;

  height: 790px;
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
  top: 950px;
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

#team {
  font-size: 20px;
  position: absolute;
  top: 460px;
  font-family: "Sacramento";
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.introduce h3 {
  position: absolute; /*絶対配置*/
  top: 760px;
}

.shokai {
  position: absolute;
  top: 440px;
  left: 30px;
  font-size: 14px;
}

iframe {
  width: 430px;
  height: 550px;
  margin: 0px 15px 0px 0px;
  padding: 10px;
}

.site {
  display: flex;
}
</style>
