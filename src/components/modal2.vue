<template>
  <div class="modal-open2">
    <a href="#modal2">詳細CHECK!!</a>

    <div class="modal2" id="modal2">
      <a href="#!" class="overlay2"></a>
      <div class="modal-wrapper2">
        <div class="modal-contents2">
          <a href="#!" class="modal-close2">✕</a>
          <div class="modal-content2" style="line-height: 50px">
            <img
              class="nakatasan"
              src="@/assets/中田.jpg"
              width="220"
              height="180"
              border="4"
            />
            <h2 style="background-color: #ffce9e; text-align: center">
              中田敦彦氏、エシカルブランド立ち上げ
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
              src="@/assets/カールフォンリンネ.png"
              width="260"
              height="180"
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

.modal-open2 {
  display: inline-block;
  background-color: orange;
  color: #fff;
  margin: 10px;
  position: relative;
  top: 530px;
  border-radius: 30px;

  z-index: 1000;
}

.modal-open2 a {
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: #fff;
}
.modal2 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 110%;
  left: 0;
  z-index: 800;
}
.modal2:not(:target) {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal2:target {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal2 .overlay2 {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: pink;
  opacity: 0.7;
  top: 0;
  left: 0;
}
.modal-wrapper2 {
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
.modal-contents2 {
  overflow: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  color: black;
}
.modal-content2 {
  margin: 25px;
}
.modal-close2 {
  position: absolute;
  top: 5px;
  right: 10px;
  color: black;
}

.nakatasan {
  position: relative;
  top: 10px;
  margin: 4px;
  left: 50%;
}
</style>
