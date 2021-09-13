<template>
  <div class="modal-open">
    <a href="#modal">詳細CHECK!!</a>

    <div class="modal" id="modal">
      <a href="#!" class="overlay"></a>
      <div class="modal-wrapper">
        <div class="modal-contents">
          <a href="#!" class="modal-close">✕</a>
          <div class="modal-content2" style="line-height: 50px">
            <img
              class="nakatasan"
              src="@/assets/メチャカリ.png"
              width="220"
              height="180"
              border="4"
            />
            <h2 style="background-color: #ffce9e; text-align: center">
              定額制服借り放題サービス「メチャカリ」
            </h2>
            2021年8月8日に芸能人でありYouTuberの中田敦彦氏が、新しくアパレルブランドのプロジェクトを開始することを発表しました。<br />
            ブランド名は「CARL VON LINNÉ / カール フォン リンネ」。<br />持続可能性に極限配慮し、生地の選び方から、生産方法にまでこだわり、<br />さらにそれを受注生産で販売するとのこと。<br />
            <h2 style="background-color: #ffce9e; text-align: center">
              「CARL VON LINNÉ」の3つの特長
            </h2>
            環境に優しい生地・伝統産業を継承する・高い原価率で高品質<br />低価格の３つのポイントを実現しています。<br />
            同氏は過去にも「地球に住めなくなる日」を解説し、気候変動に関する動画を作っていたり、自分自身がヴィーガンであり、食事と環境問題に関しても発信しています。<br />
            <img
              class="nakatasan"
              src="@/assets/メチャカリ2.jpg"
              width="250"
              height="160"
              border="4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

.modal-open {
  display: inline-block;
  background-color: #89c4ff;
  color: #fff;
  margin: 10px;
  position: relative;
  top: 370px;
  border-radius: 30px;
  text-align: center;
  z-index: 1000;
  left: 45%;
}

.modal-open a {
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: #fff;
}
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 110%;
  left: 0;
  z-index: 800;
}
.modal:not(:target) {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal:target {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal .overlay {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: pink;
  opacity: 0.7;
  top: 0;
  left: 0;
}
.modal-wrapper {
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  height: 100%;
  max-height: 500px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-contents {
  overflow: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  color: black;
}
.modal-content {
  margin: 25px;
}
.modal-close {
  position: absolute;
  top: 5px;
  right: 10px;
  color: black;
}
</style>
