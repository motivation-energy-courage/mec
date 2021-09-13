<template>
  <div class="how">
    <h1>How We Rate?</h1>

    <h4 style="line-height: 45px">
      このサイトは、オーストラリアの慈善団体 Ethical Consumers Australia<br />による社会的企業が、ローンチしたエシカルファッションアプリ<br />「Good
      on you」の評価を元に作成しています。<br />レイティングはブランドの公式情報やNGOなどが公表している情報に<br />基づいて行われており、ブランドのエシカル度が5段階で表される仕組みです。
      <br />このサイトでは14つのブランドが、環境、人権、アニマルウェルフェア<br />（動物福祉）の3つの視点でレイティングされています。
    </h4>
  </div>
</template>

<style scoped>
.how {
  background-image: url(http://farm3.static.flickr.com/2196/2495481645_d6a07c44cd.jpg);
  background-size: cover;

  width: 65%;
  height: 90%;
  border: 2px solid;
  color: white;
  position: relative;
  top: 700px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  margin-bottom: 30px;
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

.how h1 {
  position: relative;
  top: 20px;
  text-align: center;
  padding: 1rem 0.5rem;
  font-size: 2.2em;
  line-height: 0.95em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.5);
  animation: SlideIn 12.6s infinite;
}

.how h4 {
  position: relative;
  top: 20px;
  text-align: center;
  padding: 1rem 0.5rem;
  font-size: 1.5em;
  line-height: 0.95em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
  animation: SlideIn 12.6s infinite;
}
</style>
