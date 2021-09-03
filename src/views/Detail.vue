<template>
  <div class="abouti">
    <h1 style="text-align: center; padding: 70px; font-size: 50px">Rating</h1>
    <div class="zara">
      <h1 style="color: black; font-size: 46px">
        {{ this.$route.params.brand }}
      </h1>
      <div class="zaraimage">
        <img
          class="img-border"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/GU_logo.svg/1200px-GU_logo.svg.png"
          width="320"
          height="280"
        />
        <div class="comprete">
          <img
            v-if="badness"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
            width="80"
            height="80"
          />
          <img
            v-if="sadness"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
            width="80"
            height="80"
          />
          <img
            v-if="soso"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
            width="80"
            height="80"
          />
          <img
            v-if="happy"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
            width="80"
            height="80"
          />
          <img
            v-if="great"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
            width="80"
            height="80"
          />

          <h2 style="font-size: 25px">Total Rating</h2>
          <h2>{{ this.$route.params.total }}</h2>
          <h2>{{ this.$route.params.totalnum }}</h2>
        </div>
        <div class="box">
          <h3>
            Location:{{ this.$route.params.location }}<br />Price:{{
              this.$route.params.price
            }}
          </h3>
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
              v-if="envbadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
              width="40"
              height="40"
            />
            <img
              v-if="envsadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
              width="40"
              height="40"
            />
            <img
              v-if="envsoso"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
              width="40"
              height="40"
            />
            <img
              v-if="envhappy"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
              width="40"
              height="40"
            />
            <img
              v-if="envgreat"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
              width="40"
              height="40"
            />

            <h3 style="line-height: 0px">Environment Rating</h3>
            <h4 style="line-height: 10px">{{ this.$route.params.envrate }}</h4>
            <h4 style="line-height: 8px">
              {{ this.$route.params.labornum }}
            </h4>
          </div>
          <div class="zaraenvironmentphraze">
            <h4 style="line-height: 40px">
              <div class="honnbun">{{ texts[this.$route.params.id] }}</div>
            </h4>
          </div>

          <div class="zaralaborrate">
            <img
              v-if="laborbadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborsadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborsoso"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborhappy"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborgreat"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
              width="40"
              height="40"
            />
            <!-- <img
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
            width="40"
            height="40"
          /> -->
            <h3 style="line-height: 0px">Labor Rating</h3>
            <h4 style="line-height: 10px">
              {{ this.$route.params.laborrate }}
            </h4>
            <h4 style="line-height: 8px">{{ this.$route.params.labornum }}</h4>
          </div>
          <div class="zaralaborphraze">
            <h4 style="line-height: 40px">
              {{ textss[this.$route.params.id] }}
            </h4>
          </div>

          <div class="zaraanimalrate">
            <img
              class="animalimg"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-040.png"
              width="40"
              height="40"
            />
            <h3 style="line-height: 0px">Animal Rating</h3>
            <h4 style="line-height: 10px">
              {{ this.$route.params.animalrate }}
            </h4>
            <h4 style="line-height: 8px">{{ this.$route.params.animalnum }}</h4>
          </div>
          <div class="zaraanimalphraze">
            <h4 style="line-height: 40px">
              {{ textsss[this.$route.params.id] }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: String,
    rating: String,
    location: String,
    price: String,
    id: Number,
    total: String,
    totalnum: String,
    envrate: String,
    laborrate: String,
    labornum: String,
    animalrate: String,
    animalnum: String,
    brandpic: String,
    envratenum: String,
  },
  data() {
    return {
      sadness: false,
      badness: false,
      soso: false,
      happy: false,
      great: false,
      envsadness: false,
      envbadness: false,
      envsoso: false,
      envhappy: false,
      envgreat: false,
      laborsadness: false,
      laborbadness: false,
      laborsoso: false,
      laborhappy: false,
      laborgreat: false,
      texts: [
        "地球に関して言えば、ザラは私たちから「十分ではない」という評価を得ています。Zaraの親会社であるInditexは、Closing theloopと呼ばれる修復および再利用プログラムを開始しました。このプログラムは、顧客が古着を店内または郵便局から降ろして、セカンドライフを獲得する機会を提供します。これは良い取り組みです。ブランドはリサイクルパッケージも使用しています。しかし、製品を製造する際に繊維の無駄を最小限に抑えるという証拠はありません。また、ザラは自社の事業とサプライチェーンから発生する温室効果ガス排出量を削減するという絶対的な目標を設定していますが、その目標を達成するために順調に進んでいるという証拠はありません。",
        "ZARAはあああああああああああああ<br>ああああああああああああ",
        "しまむら",
        "ザラは再び労働力について「十分ではない」と評価します。生産の最終段階の半分は、労働虐待のリスクが中程度の国であるスペインで行われ、ブランドはファッション透明性指数で51〜60％のスコアを獲得しました。ブランドは、サプライヤーのポリシー、監査、および修復プロセスに関する詳細情報を公開している可能性が高いため、ある程度透明性があります。Zaraはまた、生産の最終段階にあるサプライヤーの詳細なリスト、サプライヤー監査の結果に関する情報、強制労働、男女平等、結社の自由に関する情報も公開しています。また、COVID-19の影響からサプライチェーンのサプライヤーと労働者を保護するためのいくつかのポリシーを開示しています。",
      ],
      textss: [
        "ザラは再び労働力について「十分ではない」と評価します。生産の最終段階の半分は、労働虐待のリスクが中程度の国であるスペインで行われ、ブランドはファッション透明性指数で51〜60％のスコアを獲得しました。ブランドは、サプライヤーのポリシー、監査、および修復プロセスに関する詳細情報を公開している可能性が高いため、ある程度透明性があります。Zaraはまた、生産の最終段階にあるサプライヤーの詳細なリスト、サプライヤー監査の結果に関する情報、強制労働、男女平等、結社の自由に関する情報も公開しています。また、COVID-19の影響からサプライチェーンのサプライヤーと労働者を保護するためのいくつかのポリシーを開示しています。",
        "HEllo",
      ],
      textsss: [
        "ザラの動物福祉方針は、ファイブ・フリーダムズと連携しており、毛皮、アンゴラ、および動物でテストされた製品の在庫を厳しく禁止しています。残念ながら、ザラはウール、レザー、ダウン、エキゾチックな動物の毛を使用しており、動物製品が生産の最初の段階にまでさかのぼるという証拠はないため、ここでも「不十分」と評価しています。",
      ],
    }
  },
  created: function () {
    if (this.total === "⭐️⭐️★★★") {
      this.sadness = true
    } else if (this.total === "⭐️★★★★") {
      this.badness = true
    } else if (this.total === "⭐️⭐️⭐️★★") {
      this.soso = true
    } else if (this.total === "⭐️⭐️⭐️⭐️★") {
      this.happy = true
    } else if (this.total === "⭐️⭐️⭐️⭐️⭐️") {
      this.great = true
    } else if (this.total === "⭐️⭐️★★★") {
      this.envsadness = true
    } else if (this.envrate === "⭐️★★★★") {
      this.envbadness = true
    } else if (this.envrate === "⭐️⭐️⭐️★★") {
      this.envsoso = true
    } else if (this.envrate === "⭐️⭐️⭐️⭐️★") {
      this.envhappy = true
    } else if (this.envrate === "⭐️⭐️⭐️⭐️⭐️") {
      this.envgreate = true
    } else if (this.laborrate === "⭐️⭐️★★★") {
      this.laborsadness = true
    }

    //  if (this.brand==="ZARA")
  },
}
</script>

<style>
.zara {
  position: absolute;
  top: 466px;
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

.abouti {
  background-image: url(https://cdn.pixabay.com/photo/2016/12/12/20/34/shirt-1902601_1280.jpg);
  background-size: cover;
  height: 580px;
  width: 100%;
  position: absolute;
  top: 0;
}

.abouti h1 {
  color: white;
}
</style>
