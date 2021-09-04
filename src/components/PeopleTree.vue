<template>
  <div class="zara">
    <h1 style="color: black; font-size: 46px">PeopleTree</h1>
    <div class="zaraimage">
      <img
        class="img-border"
        src="https://img.dinos.co.jp/kp/defaultMall/images/goods/EMD/3011/enl/WN1365f2.jpg?Mode=main2"
        width="380"
        height="300"
      />
      <div class="comprete">
        <img
          src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
          width="70"
          height="80"
        />
        <h2 style="font-size: 25px">Total Rating</h2>
        <h2>⭐️⭐️⭐️⭐️⭐️</h2>
        <h2>5.0/5.0</h2>
      </div>
      <div class="box">
        <h3>Location:England<br />Price:⭐️⭐️</h3>
      </div>
      <div class="zaraconcrete">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/30/09/58/pollution-3441119_1280.jpg"
          width="470"
          height="770"
        />
        <img
          src="https://cdn.pixabay.com/photo/2021/05/16/06/46/india-6257329_1280.jpg"
          width="470"
          height="770"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg"
          width="470"
          height="770"
        />

        <div class="subtitle1"><h1>Environment</h1></div>
        <div class="subtitle2"><h1>Labor</h1></div>
        <div class="subtitle3"><h1>Animal</h1></div>

        <div class="environmentrate">
          <img
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
            width="40"
            height="40"
          />
          <h3 style="line-height: 0px">Environment Rating</h3>
          <h4 style="line-height: 10px">⭐️⭐️⭐️⭐️⭐️</h4>
          <h4 style="line-height: 8px">5.0/5.0</h4>
        </div>
        <div class="zaraenvironmentphraze">
          <h4 style="line-height: 40px">
            PeopleTreeの環境評価はGreatです。<br />Global Organic Textile
            Standard（GOTS）<br />コットンなど、環境にやさしい素材をほとんど<br />の製品で使用しています。<br />また、すべての製品に影響の少ない無毒の<br />染料を使用しています。<br />環境にやさしい素材を使用しているため、<br />生産に使用される化学物質、水、廃水の<br />量を制限することに成功しています。
          </h4>
        </div>

        <div class="zaralaborrate">
          <img
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
            width="40"
            height="40"
          />
          <h3 style="line-height: 0px">Labor Rating</h3>
          <h4 style="line-height: 10px">⭐️⭐️⭐️⭐️⭐️</h4>
          <h4 style="line-height: 8px">5.0/5.0</h4>
        </div>
        <div class="zaralaborphraze">
          <h4 style="line-height: 40px">
            PeopleTreeの労働評価はGreatです。<br />PeopleTreeの製品のほとんどは、Global
            Organic Textile Standard（GOTS）またはFairtrade International-Small
            ProducersOrganisationsといった環境負荷よって認定されています。それはWFTO保証システムのメンバーです。<br />それは、そのサプライチェーンのほとんどで生活賃金の支払いを保証します。サプライチェーンのすべてを追跡します。
          </h4>
        </div>

        <div class="zaraanimalrate">
          <img
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
            width="40"
            height="40"
          />
          <h3 style="line-height: 0px">Animal Rating</h3>
          <h4 style="line-height: 10px">⭐️⭐️⭐️⭐️</h4>
          <h4 style="line-height: 8px">4.0/5.0</h4>
        </div>
        <div class="zaraanimalphraze">
          <h4 style="line-height: 40px">
            PeopleTreeの動物評価はGoodです。<br />毛皮、革、羽毛、エキゾチックな動物の皮、エキゾチックな動物の毛、アンゴラは使用していません。<br />それは、ミュールシングされていない羊から<br />羊毛を調達していると述べています。
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.zara {
  position: absolute;
  top: 500px;
}
.zaraimage {
  position: relative;
  top: 100px;
  text-align: center;
}

.zara h1 {
  position: relative;
  top: 100px;
  text-align: center;
  color: white;
}

.comprete {
  font-family: "Baskerville Old Face", serif;
  padding: 0.5em 1em;
  margin: 2em 0;
  background: #ffffef;
  border: dashed 2px yellow; /*点線*/
  height: 160px;
  font-family: "Baskerville Old Face", serif;
  width: 25%;
  height: 270px;
  position: relative;
  left: 36%;
}

.img-border {
  border: 4px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.comprete p {
  font-size: 42px;
  margin: 0;
  padding: 0;
}

.zaraconcrete {
  display: flex;
  gap: 5px 10px;
  z-index: 10;
}

.subtitle1 {
  z-index: 20;
  position: absolute;
  left: 140px;
  top: 560px;
  font-family: "Baskerville Old Face", serif;
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.subtitle2 {
  position: absolute;
  left: 660px;
  top: 560px;
  font-family: "Baskerville Old Face", serif;
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.subtitle3 {
  position: absolute;
  left: 1150px;
  top: 560px;
  font-family: "Baskerville Old Face", serif;
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.environmentrate {
  z-index: 20;
  position: absolute;
  top: 700px;
  left: 115px;
  padding: 0.5em 1em;
  margin: 2em 0;
  background: #f0f7ff;
  border: dashed 2px #5b8bd0; /*点線*/
  height: 160px;
  font-family: "Baskerville Old Face", serif;
}

.zaralaborrate {
  z-index: 20;
  position: absolute;
  top: 730px;
  left: 600px;
  padding: 0.5em 1em;
  background: #eaffea;
  border: dashed 2px green; /*点線*/
  height: 160px;
  width: 200px;
  font-family: "Baskerville Old Face", serif;
}

.zaraanimalrate {
  z-index: 20;
  position: absolute;
  top: 730px;
  left: 1105px;
  padding: 0.5em 1em;
  background: #fff2e5;
  border: dashed 2px orange; /*点線*/
  height: 160px;
  width: 200px;
  font-family: "Baskerville Old Face", serif;
}

.zaraenvironmentphraze {
  color: black;
  position: absolute;
  left: 45px;
  top: 925px;
  background-color: rgba(240, 234, 234, 0.6);
  height: 500px;
  width: 400px;
}

.zaralaborphraze {
  color: black;
  position: absolute;
  left: 520px;
  top: 925px;
  background-color: rgba(240, 234, 234, 0.62);
  height: 500px;
  width: 400px;
}

.zaraanimalphraze {
  color: black;
  position: absolute;
  left: 1000px;
  top: 925px;
  background-color: rgba(240, 234, 234, 0.62);
  height: 500px;
  width: 400px;
  z-index: 30;
}

.box {
  position: absolute;
  top: 340px;
  right: 370px;
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #232323;
  background: #fff8e8;
  border-left: solid 10px #ffc06e;
}
</style>
