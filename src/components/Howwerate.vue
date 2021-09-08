<template>
  <div class="howwerate">
    <div class="donyu">
      <h10 style="text-align: center; font-size: 0px">lp </h10>
      <div class="hello">
        <h1>How we rate?</h1>
        <div class="goodonyou">
          <h4 style="line-height: 45px">
            このサイトは、オーストラリアの慈善団体 Ethical Consumers
            Australiaによる<br />社会的企業が、ローンチしたエシカルファッションアプリ「Good
            on you」の<br />評価を元に作成しています。<br />レイティングはブランドの公式情報やNGOなどが公表している情報に基づいて行われており、<br />ブランドのエシカル度が5段階で表される仕組みです。
            <br />このサイトでは14つのブランドが、環境、人権、アニマルウェルフェア（動物福祉）の<br />3つの視点でレイティングされています。
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.howwerate {
  position: absolute;
  top: 1150px;
}

.donyu {
  position: relative;
  top: 30px;
  left: 130px;
  z-index: 300;
  padding: 1rem 0.5rem;
  font-size: 25px;
  line-height: 0.85em;
  color: #fff;
  padding: 20px;

  background-image: url(https://beiz.jp/images_P/sky/sky_00031.jpg);
  width: 1150px;
  height: 500px;
  border: 2px solid;
  background-size: cover;
  border-radius: 60px;
}

.hello {
  position: relative;
  top: 40px;
  right: -70px;
  color: color;
  animation: SlideIn 12.6s infinite;
}

@keyframes SlideIn {
  0% {
    opacity: 0; /*初期状態では透明に*/
    transform: translateX(64px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.goodonyou {
  position: relative;
  top: 20px;
}
</style>
