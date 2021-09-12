<template>
  <div class="abouti">
    <h1 style="text-align: center; padding: 70px; font-size: 50px">Rating</h1>
    <div class="zara">
      <h1 style="color: black; font-size: 46px">
        {{ this.$route.params.brand }}
      </h1>
      <div class="zaraimage">
        <img v-bind:src="imgPath" width="320" height="280" />

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

            <h3 style="line-height: 50px">Environment Rating</h3>
            <h4 style="line-height: 0px">{{ this.$route.params.envrate }}</h4>
            <h4 style="line-height: 50px">
              {{ this.$route.params.envnum }}
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
            <h3 style="line-height: 50px">Labor Rating</h3>
            <h4 style="line-height: 0px">
              {{ this.$route.params.laborrate }}
            </h4>
            <h4 style="line-height: 50px">{{ this.$route.params.labornum }}</h4>
          </div>
          <div class="zaralaborphraze">
            <h4 style="line-height: 40px">
              {{ textss[this.$route.params.id] }}
            </h4>
          </div>

          <div class="zaraanimalrate">
            <!-- <img
              class="animalimg"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-040.png"
              width="40"
              height="40"
            /> -->

            <img
              v-if="animalbadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalsadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalsoso"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalhappy"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalgreat"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalquestion"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-040.png"
              width="40"
              height="40"
            />

            <h3 style="line-height: 50px">Animal Rating</h3>
            <h4 style="line-height: 0px">
              {{ this.$route.params.animalrate }}
            </h4>
            <h4 style="line-height: 50px">
              {{ this.$route.params.animalnum }}
            </h4>
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
    envnum: String,
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
      animalbadness: false,
      animalsadness: false,
      animalsoso: false,
      animalhappy: false,
      animalgreat: false,
      imgPath: this.$route.params.brandpic,
      animalquestion: false,
      texts: [
        "ZARAの環境評価はBADです。良い取り組みから言及すると、Zaraの親会社であるInditexでは、Closing theloopと呼ばれる衣服の再利用プログラムを開始しています。このプログラムにより衣服がセカンドライフを獲得できることに繋がります。また、服の包装にはリサイクルパッケージも使用しています。しかし、ZARAは製品を製造する際に繊維の無駄を最小限に抑える取り組みは取っていません。また、ZARAは自社の事業とサプライチェーンから発生する温室効果ガス排出量を削減するという目標を設定していますが、その目標達成が現時点で順調に進んでいるという実績はありません。",
        "UNIQLO環境評価は",
        "GUの環境評価はSo Soです。GUは循環型社会を目指した服のリサイクルや、製造工程において排出される水の量を削減するためのジーンズの取り組みなど自然保護に向けて積極的に取り組んでいる姿勢を見せています。しかし、GHG（温室効果ガス）排出量削減の目標が科学的に公表されていません。また、循環型社会を目指してリサイクルの取り組みを実施していますが、大量生産／消費からの脱却も検討するべきという見解もあります。また、 BCIコットンを使用しているので、よりオーガニックなコットンの使用率を上げる必要性もあると言及できます。",
        "しまむらの環境評価はSO SOです。循環リサイクルの取り組みや廃棄ゼロを目指していて、その目標に対していくつか具体的に取り組みを行っています。しまむらは「在庫廃棄ゼロ」を達成するためにサプライヤーへ発注した商品は「完全買取」しています。また、発注商品を最後の1枚まで売り切るため、過剰在庫の廃棄（焼却処分）は行っておりません。また「買い物袋のリサイクル」を行っていて、買い物をした顧客に無料で渡した買い物袋を近くの店舗に持ち込むことで、買い物袋1枚あたり1円で回収する取り組みを行なっています。また、回収した買い物袋は、資源としてリサイクルし再利用しています。",
        "H&M",
        "無印良品の環境評価はSo Soです。無印良品は2010年に循環型社会の形成に向けてリサイクルのプログラムを導入したり、木や自然の大切さを知ってもらうために独自のキャンプ場を運営するなどの取り組みを行なっています。また、不要な衣料品を回収しリサイクルしたり、残糸を軍手にしたりと、国が先導して動く前から環境保護に対する取り組みを積極的にしています。しかし現時点ではCO2排出量を測定したり、削減するための明確な目標が見受けられない状態です。",
      ],
      textss: [
        "ZARAの労働評価はBADです。ZARAの製造工程の半分は労働虐待のリスクが中程度あるスペインで行われています。ZARAは、サプライヤーのポリシー、監査、および修復プロセスに関する詳細情報を公開しているため、ある程度透明性があります。Zaraはまた、生産の最終段階にあるサプライヤーの詳細なリスト、サプライヤー監査の結果に関する情報、強制労働、男女平等、結社の自由に関する情報も公開しています。しかしサプライチェーン(商品の調達・製造から流通を経て消費者に届くまでのすべての工程)で生活賃金の支払いを保証するという言及がほとんどありません。",
        "UNIQLOの労働評価は",
        "GUの労働評価はBADです。GUは労働に関する国際基準の行動規範を公開していますが、工場で働く人に生活賃金を支払っているかは不透明な状態です。日本を本拠とする国際人権NGO「ヒューマンライツ・ナウ」が、アパレル業界の労働環境に関する実態調査を行った結果、ユニクロやユニクロと同じFR社の完全子会社であるGUの下請け工場における労働問題が非常に深刻だという声が聞かれたそうです。これらから、GUはウイグル族の人権問題などに関与している可能性があると言えます。",
        "しまむらの労働評価はVERY BADです。2018年にしまむらが衣料品を仕入れている取引先の下請け会社で、外国人技能実習生を違法に働かせていることが判明しました。その後、しまむらは全ての取引先に人権侵害がないように通達をしています。しかし、ウェブサイトを見る限りでは、未だに労働環境に対する情報に対する透明性が著しく低く、実際に何を、どう、どのくらい取り組んでいるのか不明瞭な状態であります。また英国の人権団体「Know The Chain」が2020年に世界のアパレル系企業64社を調査したところしまむらは、「何の措置も講じていない」という厳しい評価となりました。",
        "H&M",
        "無印良品の労働評価はBADです。英国の人権団体「Know The Chain」が2020年に世界のアパレル系企業64社を調査したところ無印良品を手がける「良品計画」（本社・東京都豊島区）は、下から2番目の「最低限の措置しか講じていない」と評価されました。良品計画はKTCに対し、中国・新疆ウイグル自治区にある工場について、「徹底した調査を行った結果、重大な問題は確認されていない」と報告しましたが、KTCは「『強制労働を特定するための調査は新疆では不可能』とする業界他社や監査機関の指摘と矛盾している」と疑問の目を向けている状態です。",
      ],
      textsss: [
        "ZARAの動物評価はBADです。ZARAの動物福祉方針は、The Five Freedoms for Animal（国際的に認められている動物の福祉基準)と連携しており、毛皮、アンゴラ、および動物でテストされた製品の在庫を厳しく禁止しています。しかし残念ながら、ZARAはウール、レザー、ダウン、エキゾチックな動物の毛を使用していることから、動物繊維が製造工程において少なからず存在すると判断できるため、動物評価においても「不十分」と評価します。",
        "UNIQLOの動物評価は",
        "GUは動物福祉に対してのポリシーがないので評価ができません。",
        "しまむらは動物福祉に対してのポリシーがないので評価ができません。しかし、2014年にリアルファー（毛皮）製品の販売中止を求める約4000人分の署名の受け取りをしまむらが拒否したことは記録に残すべきことでしょう。",
        "H&M",
        "無印良品の動物評価はSo Soです。無印良品は公式Webサイトの中で化粧品の動物実験の有無に対して、「化粧品は、化粧品メーカーへの委託製造で作られていますが、既に「効能・効果」と「安全性」が確認されている原料を使用して製造しており、製造段階ではもとより、製品段階での「動物実験」も行なっておりません。」と回答しています。しかし、化粧品以外の商品は動物実験をしているかについての明記はなく、情報開示に対する透明性が低い状態です。",
      ],
    }
  },
  created: function () {
    if (this.total === "⭐️⭐️★★★") {
      this.sadness = true
    }
    if (this.total === "⭐️★★★★") {
      this.badness = true
    }
    if (this.total === "⭐️⭐️⭐️★★") {
      this.soso = true
    }
    if (this.total === "⭐️⭐️⭐️⭐️★") {
      this.happy = true
    }
    if (this.total === "⭐️⭐️⭐️⭐️⭐️") {
      this.great = true
    }
    if (this.envrate === "⭐️⭐️★★★") {
      this.envsadness = true
    }
    if (this.envrate === "⭐️★★★★") {
      this.envbadness = true
    }
    if (this.envrate === "⭐️⭐️⭐️★★") {
      this.envsoso = true
    }
    if (this.envrate === "⭐️⭐️⭐️⭐️★") {
      this.envhappy = true
    }
    if (this.envrate === "⭐️⭐️⭐️⭐️⭐️") {
      this.envgreat = true
    }
    if (this.laborrate === "⭐️⭐️★★★") {
      this.laborsadness = true
    }
    if (this.laborrate === "⭐️★★★★") {
      this.laborbadness = true
    }
    if (this.laborrate === "⭐️⭐️⭐️★★") {
      this.laborsoso = true
    }
    if (this.laborrate === "⭐️⭐️⭐️⭐️★") {
      this.laborhappy = true
    }
    if (this.laborrate === "⭐️⭐️⭐️⭐️⭐️") {
      this.laborgreat = true
    }
    if (this.animalrate === "⭐️★★★★") {
      this.animalbadness = true
    }
    if (this.animalrate === "⭐️⭐️★★★") {
      this.animalsadness = true
    }
    if (this.animalrate === "⭐️⭐️⭐️★★") {
      this.animalsoso = true
    }
    if (this.animalrate === "⭐️⭐️⭐️⭐️★") {
      this.animalhappy = true
    }
    if (this.animalrate === "⭐️⭐️⭐️⭐️⭐️") {
      this.animalgreat = true
    }
    if (this.animalnum === "？/5.0") {
      this.animalquestion = true
    }

    //  if (this.brand==="ZARA")
  },
}
</script>

<style>
.zara {
  position: absolute;
  top: 495px;
  font-family: "Baskerville Old Face", serif;
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
  background-color: rgba(240, 234, 234, 0.62);

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
  top: 350px;
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
