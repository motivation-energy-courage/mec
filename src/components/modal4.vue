<template>
  <div class="modal-open4">
    <a href="#modal4">詳細CHECK!!</a>

    <div class="modal4" id="modal4">
      <a href="#!" class="overlay4"></a>
      <div class="modal-wrapper4">
        <div class="modal-contents4">
          <a href="#!" class="modal-close4">✕</a>
          <div class="modal-content4" style="line-height: 50px">
            <img
              class="nakatasan"
              src="@/assets/studio.jpg"
              width="220"
              height="180"
              border="4"
            />
            <h2 style="background-color: #ffce9e; text-align: center">
              モデル・ローラさんが約2年かけた<br />〈STUDIO R330〉
            </h2>
            モデルのローラさんが手掛けるライフスタイルブランド〈STUDIO
            R330(ステュディオ アール
            スリーサーティー)〉が2020年6月5日(金)にローンチしました。オリジナルのサスティナブル素材を用いたトレーニングウェアやTシャツ、ヨガマットなどバラエティに富んだアイテムが展開されています。

            <h2 style="background-color: #ffce9e; text-align: center">
              兼ねてから環境問題に声を挙げていたローラさん
            </h2>
            以前より自身のインスタグラムでも、数シーズン前の服を着た姿を披露して<br />「長く大切に着る」という考えを表しているローラさん。
            ローラさんは「これは私が今までの⼈⽣で培ってきた経験と感性を信じて、サステナブルかつ良質なプロダクトを発信していく新しい形のライフスタイルブランド。
            素材やその背景にあるストーリーを⼤切にし、⼼がわくわくすること、そしてポジティブで⾃信に満ちあふれることの素晴らしさ、同時に環境にも配慮して⼀緒に地球の未来に貢献できるようなことをしたい。そんな想いから、このブランドの⽴ち上げを決めた。」とコメントした。<br />
            <br />
            <img
              class="nakatasan"
              src="@/assets/studio330.png"
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

.modal-open4 {
  display: inline-block;
  background-color: greenyellow;
  color: #fff;
  margin: 10px;
  position: relative;
  top: 960px;
  border-radius: 30px;

  z-index: 300;
}

.modal-open4 a {
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: #fff;
}
.modal4 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 170%;
  z-index: 200;
}
.modal4:not(:target) {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal4:target {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal4 .overlay4 {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: pink;
  opacity: 0.7;
  top: 0;
  left: 0;
}
.modal-wrapper4 {
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  height: 100%;
  max-height: 500px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.modal-contents4 {
  overflow: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  color: black;
}
.modal-content4 {
  margin: 25px;
}
.modal-close4 {
  position: absolute;
  top: 5px;
  color: black;
}
</style>
