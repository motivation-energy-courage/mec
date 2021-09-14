<template>
  <div class="modal-open">
    <a href="#modal">詳細CHECK!!</a>

    <div class="modal" id="modal">
      <a href="#!" class="overlay"></a>
      <div class="modal-wrapper">
        <div class="modal-contents">
          <a href="#!" class="modal-close">✕</a>
          <div class="modal-content" style="line-height: 50px">
            <img
              id="nakatasan"
              src="@/assets/メチャカリ.png"
              width="220"
              height="180"
              border="4"
            /><br><br><br><br>
            <h2 style="background-color: #ffce9e; text-align: center">
               定額制服借り放題サービス「メチャカリ」
            </h2>
            20～30代女性に最も使われるファッションレンタルアプリです。ストライプインターナショナルが展開するearth music&ecologyをはじめ、人気ブランドの新品アイテムを定額で何度でも借りることが可能。レディース・メンズ・キッズのアイテムを取扱い。夏は浴衣、冬はコートも借りることができます。返却時のクリーニングや洗濯は不要。<br />
            <h2 style="background-color: #ffce9e; text-align: center">
              月額定額で洋服が借り放題
            </h2>
月額定額なので気軽にレンタル。楽しんだあとはクリーニング不要で返却。返却するとまた新たな洋服が借りられます。

もうあなたのクローゼットが着なくなった服で埋め尽くされることはありません。洋服メインですが、バッグや帽子などの小物もレンタル可能になっています。
            <img
              id="nakatanaka"
              src="@/assets/メチャカリ2.jpg"
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

.modal-open {
  display: inline-block;
  background-color: #89c4ff;
  color: #fff;
  margin: 10px;
  position: relative;
  top: 380px;
  border-radius: 30px;
  left: 44%;

  z-index: 1000;
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

#nakatasan {
 position: absolute;
  top: 110px;
  left: 50%;
  transform: translate(-50%, -50%);
}

#nakatanaka {
  position: absolute;
  top:910px;
  left: 50%;
  transform: translate(-50%, -50%);

}
</style>


