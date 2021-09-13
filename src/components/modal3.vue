<template>
  <div class="modal-open3">
    <a href="#modal3">詳細CHECK!!</a>

    <div class="modal3" id="modal3">
      <a href="#!" class="overlay3"></a>
      <div class="modal-wrapper3">
        <div class="modal-contents3">
          <a href="#!" class="modal-close3">✕</a>
          <div class="modal-content3" style="line-height: 50px">
            <img
              class="nakatasan"
              src="@/assets/古着回収.jpeg"
              width="220"
              height="180"
              border="4"
            />
            <h2 style="background-color: #ffce9e; text-align: center">
              有名アパレルブランドが古着を無料回収！！
            </h2>
            古着を無料で回収するアパレルブランドが近年増えています。<br />
            回収に協力すると、クーポン券やポイントをもらえるブランドも<br />存在するので、古着回収への注目度は高まっています。<br />
            ここでは、古着を無料で回収するアパレルブランドを3つ紹介します。
            <h2 style="background-color: #ffce9e; text-align: center">
              古着を無料で回収するアパレルブランド3選
            </h2>
            <span id="sample1" style="text-align: center"
              ><h4>1.UNIQLO</h4></span
            ><br />
            ユニクロでは自社ブランドの商品を回収するリサイクルボックスを全店に設置。回収した衣服は、新たな服や燃料、素材に生まれ変わったり、難民キャンプに支援衣料としてリユースされたりします。
            また回収したダウン製品は、独自の技術で新たな商品として再生したのちに、販売しています。<br />
            <span id="sample2" style="text-align: center"
              ><h3 style="text-align: center">2.ZARA</h3></span
            ><br />
            ZARAでは店舗に回収用コンテナを設置し、衣類の回収を行っています。ZARA以外のブランド製品や、衣類以外にもクッションやベッドカバーなどの回収を行っているのが特徴です。回収した古着は、寄付やリサイクル、新たな生地へと変換されます。<br />
            <span id="sample3" style="text-align: center"
              ><h3 style="text-align: center">3.Patagonia</h3></span
            ><br />
            リサイクルに意欲的なブランドであるパタゴニアは、10年以上前から自社製品の回収・リサイクルを実施しています。直営店にある回収ボックスもしくは、流通センターに送付すると回収が可能です。
            回収された製品は、新たな繊維や生地としてリサイクルする他に、古着として再利用されることもあります。2020年には、パタゴニアのポリエステル製品の8割にリサイクル素材が使われており、環境意識の高さが伺えます。
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

.modal-open3 {
  display: inline-block;
  background-color: pink;
  color: #fff;
  margin: 10px;
  position: relative;
  top: 500px;
  border-radius: 30px;

  z-index: 300;
}

.modal-open3 a {
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: #fff;
}
.modal3 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 110%;
  z-index: 800;
}
.modal3:not(:target) {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal3:target {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s, visibility 0.5s;
}
.modal3 .overlay3 {
  display: block;
  width: 100%;
  height: 100%;
  background-color: pink;
  opacity: 0.7;
  top: 0;
  left: 0;
}
.modal-wrapper3 {
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  height: 100%;
  max-height: 500px;
  background-color: #fff;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
}
.modal-contents3 {
  overflow: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  color: black;
}
.modal-content3 {
  margin: 25px;
}
.modal-close3 {
  position: relative;
  top: 5px;
  right: 10px;
  color: black;
}

#sample1 {
  border: solid 0.5px;
  position: relative;
  top: 543px;
  background-color: #ffb2b2;
}

#sample2 {
  border: solid 0.5px;
  position: absolute;
  top: 787px;
  background-color: #ddbcff;
}

#sample3 {
  border: solid 0.5px;
  position: absolute;
  top: 1027px;
  background-color: #d8ffb2;
}
</style>
