<template>
  <div class="home">
    <div id="title">Better Ethical Fashion Choice</div>

    <div id="setsumei" style="line-height: 30px">
      このサイトでは素材の選定、生産、販売までのプロセスで<br />人と地球環境に配慮して作られたファッション＝<br />エシカルファッションについて紹介しています。
    </div>
    <div id="team"><h4>MEC</h4></div>
    <div class="honbun">
      <div class="introduce">
        <h3 style="text-align: center">
          エシカルファッションとは、<br />
          「環境を破壊しない」「労働者から搾取しない」「動物の命を守る」<br />といったエシカル消費の考え方に配慮して生産されたファッションの総称です。
        </h3>
      </div>
    </div>
    <div class="quiz">
      <h1>Quiz Game</h1>
      <div class="know" style="text-align: center">
        エシカルファッションについてあなたはどれだけ知っていますか？<br />環境・労働・動物の三つの観点から<br />考えていきましょう。
      </div>
      <div class="EAL">
        <p>Environment</p>
        <p>Labor</p>
        <p>Animal Right</p>
      </div>

      <div class="example-modal-window">
        <MyModal @close="closeModal" @next="nextModal" v-if="quizmodal">
          <div class="modal-title">問題！</div>
          {{ question[questionOrder].title }}<br />

          <div class="btn">
            <a v-on:click="hantei(question[questionOrder].answers[0].correct)">
              {{ question[questionOrder].answers[0].choice }}</a
            >

            <a v-on:click="hantei(question[questionOrder].answers[1].correct)">
              {{ question[questionOrder].answers[1].choice }}</a
            >

            <a v-on:click="hantei(question[questionOrder].answers[2].correct)">
              {{ question[questionOrder].answers[2].choice }}</a
            >

            <a v-on:click="hantei(question[questionOrder].answers[3].correct)">
              {{ question[questionOrder].answers[3].choice }}</a
            >
          </div>
          <div class="quiz-answer" v-if="SorF">
            {{ seikaiOrFuseikai }}
            <br /><br />
          </div>

          <div class="kaisetsu-btn">
            <a v-on:click="Kaisetsudisplay"> 解説</a>
          </div>
          <div class="quiz-kaisetsu" v-if="Kaisetsu">
            {{ question[questionOrder].comment }}
          </div>
        </MyModal>
      </div>

      <div class="quizimage">
        <img
          class="quizimage1"
          @click="openModal1"
          src="@/assets/kannkyou.jpg"
          width="450"
          height="400"
        />
        <img
          class="quizimage2"
          @click="openModal2"
          src="@/assets/roudou.jpg"
          width="450"
          height="400"
        />
        <img
          class="quizimage3"
          @click="openModal3"
          src="@/assets/animal.jpg"
          width="450"
          height="400"
        />
      </div>

    </div>

    <div class="information">
      <h1>Information</h1>
    </div>

    <div class="introduce2">
      エシカルファッションについて分かりやすく情報を載せているWebサイトを紹介します。
    </div>


    <div class="shokai">
      ①歴史に残る悲劇・ラナプラザ事件について
      ②エシカルファッションってどんなもの？ ③ファストファッションの裏にある事実
    </div>

    <div class="site">
      <iframe src="https://smartpeople.jp/column/lana-plaza/"></iframe>
      <iframe src="https://naruhodosdgs.jp/ethical-fashion/"></iframe>
      <iframe src="https://www.yogaroom.jp/yogahack/p/6587"></iframe>
    </div>

    <div class="Instagram">
      <insta />
    </div>
  </div>
</template>

<script>
import Insta from "../components/Insta.vue"
// import Quiz from "../components/Quiz.vue"
import MyModal from "./QQuiz.vue"

export default {
  data() {
    return {
      questionOrder: 0,
      quizmodal: false,
      Kaisetsu: false,
      SorF: false,
      isActive: false,
      seikaiOrFuseikai: "",
      question: [
        {
          title: "Q．ジーンズ1本作るために何リットルの水が必要になるでしょう？",
          comment: "これはなんと人が7年かけて飲む、水の量に相当します！！！",
          answers: [
            {
              choice: " A．約1,500リットル",
              correct: false,
            },
            {
              choice: " B．約3,500リットル",
              correct: false,
            },
            {
              choice: " C．約5,500リットル",
              correct: false,
            },
            {
              choice: " D．約7,500リットル",
              correct: true,
            },
          ],
        },

        {
          title:
            "Q．一年間でアパレル業界から出る服の廃棄量はどれくらいでしょう？",
          comment:
            "一年間に約29億着生産されますが、そのおよそ半分は廃棄処分されている現状です😭⚡️",
          answers: [
            {
              choice: "A．50万着",
              correct: false,
            },
            {
              choice: "B．100万着",
              correct: false,
            },
            {
              choice: "C．1億着",
              correct: false,
            },
            {
              choice: "D．15億着",
              correct: true,
            },
          ],
        },
        {
          title: "Q．ファストファッションの問題点はどれでしょう？",
          comment:
            "これは全て正解です！そもそもファストファッションとは、最新の流行を取り入れた商品が低価格で販売され、短いサイクルで商品が生産・販売するファッションのことを指します。",
          answers: [
            {
              choice: "A．廃棄物の量が多い",
              correct: true,
            },
            {
              choice: "B．劣悪な労働環境",
              correct: true,
            },
            {
              choice: "C．有害物質による環境被害",
              correct: true,
            },
            {
              choice: "D．アイテムのコピー問題 ",
              correct: true,
            },
          ],
        },
        {
          title: "Q．世界には児童労働者はおよそ何人いるでしょう？",
          comment:
            "この約1億6,800万人の中で、およそ98％もの労働者が生活を賄うのに十分とされる推定賃金（生活賃金）をもらえていないのが現状です。家計が苦しいため、危険な仕事にもかかわらず劣悪な環境で働かなければならず、多くの子供たちが教育を受ける権利を侵害されているのです。",
          answers: [
            {
              choice: "A．約68万人",
              correct: false,
            },
            {
              choice: "B．約680万人",
              correct: false,
            },
            {
              choice: "C．約6,800万人",
              correct: false,
            },
            {
              choice: "D．約1億6,800万人",
              correct: true,
            },
          ],
        },
        {
          title:
            "Q．2013年に大規模な縫製工場のビルが崩壊し、死者1138人、負傷者2500人以上を生んだ深刻な事件を何事件というでしょう？",
          comment: "サイトの下にも詳しく書いてありますので、ぜひご覧ください！",
          answers: [
            {
              choice: "A．ラナプラザ事件",
              correct: true,
            },
            {
              choice: "B．ラナナプラザ事件",
              correct: false,
            },
            {
              choice: "C．ラッナプラザ事件",
              correct: false,
            },
            {
              choice: "D．ラナブラサ事件",
              correct: false,
            },
          ],
        },
        {
          title: "Q．ラナプラザ事件は、どこの国で起こったでしょうか？",
          comment:
            "バングラデシュは豊かな緑と多くの川や水路が特徴の南アジアの国です！",

          answers: [
            {
              choice: "A．バングラデシュ",
              correct: true,
            },
            {
              choice: "B．インド",
              correct: false,
            },
            {
              choice: "C．ミャンマー",
              correct: false,
            },
            {
              choice: "D．ネパール",
              correct: false,
            },
          ],
        },
        {
          title: "Q．日本には毛皮製造工場がいくつあるでしょう？",
          comment:
            "2016年に日本における最後の毛皮用のミンク農場（新潟県）が閉鎖し、日本の毛皮製造工場はゼロになりました！",
          answers: [
            {
              choice: "A．0",
              correct: true,
            },
            {
              choice: "B．10",
              correct: false,
            },
            {
              choice: "C．50 ",
              correct: false,
            },
            {
              choice: "D．100 ",
              correct: false,
            },
          ],
        },
        {
          title:
            "Q．環境負荷の少ない人工レザーのうち、当てはまらないものはどれでしょう？",
          comment:
            "レザー製品を作るにあたって、「クロムなめし」と呼ばれる、動物の皮の毛や汚れを落として柔らかくする工程が、化学製品を使うため環境汚染の観点から問題視されている。選択肢のパイナップル、ワイン、コーヒーの他にも、ぶどう、きのこ、トウモロコシ、りんごの皮、サボテン、ココナッツを使った人工レザーの製品があります！",

          answers: [
            {
              choice: "A．パイナップル",
              correct: false,
            },
            {
              choice: "B．ワイン",
              correct: false,
            },
            {
              choice: "C．コーヒー",
              correct: false,
            },
            {
              choice: "D．お茶",
              correct: true,
            },
          ],
        },
        {
          title:
            "Q．「可能な限り食べ物・衣服・その他の目的のために、あらゆる形態の動物への残虐行為、動物の搾取を取り入れないようにする生き方」を実践する人を何というでしょう？",
          comment:
            "ヴィーガンは食生活においても日常生活においても「動物から得るモノ」全てを口にせず、使いません！肉、魚だけではなく、卵、乳、蜂蜜も摂取しません!",

          answers: [
            {
              choice: "A．ピーマン",
              correct: false,
            },
            {
              choice: "B．ピータン",
              correct: false,
            },
            {
              choice: "C．ヴィーガン",
              correct: true,
            },
            {
              choice: "D．ウェルダン",
              correct: false,
            },
          ],
        },
      ],
    }
  },
  components: {
    Insta,
    // Quiz,
    MyModal,
  },
  methods: {
    hantei(answer) {
      this.SorF = true
      // 正解不正解を判定する
      if (answer) {
        this.seikaiOrFuseikai = "⭕️正解"
      } else {
        this.seikaiOrFuseikai = "✖️不正解"
      }
      // if (this.questionOrder == 6) {
      //   this.questionOrder += 1
      // }
    },
    Kaisetsudisplay() {
      this.Kaisetsu = true
    },
    openModal1() {
      this.quizmodal = true
      this.questionOrder = 0
    },
    openModal2() {
      this.quizmodal = true
      this.questionOrder = 3
    },
    openModal3() {
      this.quizmodal = true
      this.questionOrder = 6
    },
    closeModal() {
      this.quizmodal = false
    },
    nextModal() {
      this.Kaisetsu = false
      this.SorF = false
      console.log(this.questionOrder)
      if (this.questionOrder == 8) {
        this.quizmodal = false
      } else if (this.questionOrder >= 6) {
        this.quizmadal = false
        this.questionOrder += 1
        this.quizmodal = true
      } else if (this.questionOrder == 5) {
        this.quizmodal = false
      } else if (this.questionOrder >= 3) {
        this.quizmodal = false
        this.questionOrder += 1
        this.quizmodal = true
      } else if (this.questionOrder == 2) {
        this.quizmodal = false
      } else {
        this.quizmodal = false
        this.questionOrder += 1
        this.quizmodal = true
      }
    },
  },
}
</script>

<style>
.home {
  background-image: url(https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_1280.jpg);
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.09);
  background-blend-mode: lighten;

  height: 790px;
  width: 100%;
  position: absolute;
  top: 0;
  /* animation: zoomIn 2.8s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards; */
}
.home h1 {
  font-family: "Baskerville Old Face", serif;
  vertical-align: super;
}
.home h3 {
  width: 100%;
  height: 100px;
  text-align: center;
  z-index: 20;
  font-size: 20px;
  font-family: "Baskerville Old Face", serif;
  padding: 40px 0;
}

.home h4 {
  position: relative;
  top: 230px;
  text-align: center;
  color: white;
}

.quiz {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-flow: column;
  font-family: "Baskerville Old Face", serif;
  position: relative;
top: 1000px;
  text-align: center;
}

.quiz h1 {
  background-image: url(https://beiz.jp/images_P/pastel/pastel_00054.jpg);
  border-radius: 10px;
  text-align: center;
  width: 270px;
  height: 50px;
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.EAL {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
}

.quizimage {
  display: flex;
  justify-content: space-around;
}

.quizimage1:hover {
  opacity: 0.7;
  color: white;
}

.quizimage2:hover {
  opacity: 0.7;
  color: white;
}

.quizimage3:hover {
  opacity: 0.7;
  color: white;
}

.quiz-answer {
  /* padding-top: 100px; */
  font-size: 1.5rem;
  color: #696969;
}

#setsumei {
  font-size: 18px;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
  position: relative;
  top: 255px;
  left: 300px;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-family: "Baskerville Old Face", serif;

}


#title {
  animation-name: fadeup;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  font-family: "Baskerville Old Face", serif;

  position: absolute;

  top: 20%;
  left: 30%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  color: white;
  padding: 1rem 0.5rem;
  font-size: 3em;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

#team {
  font-size: 20px;
  position: absolute;
  top: 450px;
  left: 1240px;
  font-family: "Sacramento";
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

iframe {
  width: 430px;
  height: 550px;
  margin: 0px 15px 0px 0px;
  padding: 10px;
}

.know {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-family: "Baskerville Old Face", serif;
  font-size: 20px;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.know h1 {
  background-image: url(https://beiz.jp/images_P/pastel/pastel_00054.jpg);
  border-radius: 10px;
  align-items: center;
  width: 270px;
  height: 50px;
  margin: 0 auto;
}

.information h1 {
  background-image: url(https://beiz.jp/images_P/pastel/pastel_00054.jpg);
  border-radius: 10px;
  text-align: center;
  width: 270px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  top: 1150px;
}

.introduce h3 {
  position: absolute; /*絶対配置*/
  top: 780px;
}

.introduce2 {
  display: flex;
  position: relative;
  top: 1200px;
  font-family: "Baskerville Old Face", serif;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.shokai {
  display: flex;
  position: relative;
  top: 1250px;
  font-family: "Baskerville Old Face", serif;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.site {
  display: flex;
  position: relative;
  top: 1300px;
  justify-content: center;
  align-items: center;
}

.Instagram {
  display: flex;
  position: relative;
  top: 650px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.modal-title {
  font-size: 20px;
  padding-bottom: 1rem;
  padding-top: 0rem;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 35px;
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.btn a {
  display: flex;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background: #ffffff;
  text-align: center;
  color: #696969;
  font-size: 20px;
  box-shadow: 3px 3px 0px 0px #d3d3d3;
  text-align: left;
}
.btn a:hover {
  background: #fffacd;
  color: #696969;
  margin-left: 3px;
  margin-top: 3px;
  box-shadow: none;
}

.quiz-kaisetsu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 100px;
  margin: 0 auto;
  padding-top: 10px;
}

.kaisetsu-btn {
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.kaisetsu-btn a {
  display: block;
  width: 70px;
  height: 50px;
  text-decoration: none;
  background: #ffffff;
  text-align: center;
  border: 2px solid #e3e3e3;
  color: #666666;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 1px 1px 6px 0px #ffffff inset;
  transition: all 0.5s ease;
}
.kaisetsu-btn a:hover {
  background: #f5f5f5;
  color: #8a8a8a;
  margin-left: 0px;
  margin-top: 0px;
  border: 2px solid #dedede;
  box-shadow: none;
}

.active {
  display: none;
}

.site {
  display: flex;
}

</style>
