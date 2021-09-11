<template>
  <div class="quiztitle">
    <h1>問題</h1>
    <div class="quizmondai">
      <div
        class="mondaititle"
        v-for="(mondai, index) in question"
        v-bind:key="index"
      >
        {{ mondai.title }}
        <div
          class="btn"
          v-for="(answer, index) in mondai.answers"
          v-bind:key="index"
        >
          <a v-on:click="hantei(answer.correct)">
            {{ answer.choice }}
          </a>
        </div>
      </div>
      <div class="answer">{{ seikaiOrFuseikai }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seikaiOrFuseikai: "",
      question: [
        {
          title: "Q.ジーンズ1本作るために何リットルの水が必要になるでしょう？",
          answers: [
            {
              choice: "A．約1,500リットル",
              correct: false,
            },
            {
              choice: "B．約3,500リットル",
              correct: true,
            },
            {
              choice: "C．約5,500リットル",
              correct: false,
            },
            {
              choice: "D．約7,500リットル",
              correct: false,
            },
          ],
        },
        {
          title: "Q．世界には児童労働者はおよそ何人いるでしょう？",
          answers: [
            {
              choice: "A．約680万人",
              correct: false,
            },
            {
              choice: "B．約6,800万人",
              correct: false,
            },
            {
              choice: "C．約1億6,800万人",
              correct: true,
            },
          ],
        },
        {
          title:
            "Q.「可能な限り食べ物・衣服・その他の目的のために、あらゆる形態の動物への残虐行為、動物の搾取を取り入れないようにする生き方」を実践する人を何というでしょう？",
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
              choice: "C. ヴィーガン",
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
  methods: {
    hantei(answer) {
      // 正解不正解を判定する
      if (answer) {
        this.seikaiOrFuseikai = "⭕️正解"
      } else {
        this.seikaiOrFuseikai = "✖️不正解"
      }
    },
  },
}
</script>

<style>
.quiztitle h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(43, 41, 41);
  font-family: "Baskerville Old Face", serif;
  background-image: url(https://beiz.jp/images_P/pastel/pastel_00054.jpg);
  border-radius: 10px;
  /* width: 270px;
  height: 50px; */
  margin: 0 auto;
  text-align: left;
  position: relative;
  top: 100px;
}

.quizmondai {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 50%;
  color: #696969;
  position: relative;
  top: 110px;
  right: 530px;
  /* border-bottom: 5rem; */
}

.mondaititle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Baskerville Old Face", serif;
  font-size: 17px;
  border-radius: 50%;
  color: black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.btn {
  width: 200px;
  height: 35px;
  line-height: 35px;
  padding-top: 0.5rem;
}
.btn a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background: #ffffff;
  text-align: center;
  color: #696969;
  font-size: 20px;
  box-shadow: 3px 3px 0px 0px #d3d3d3;
}
.btn a:hover {
  background: #fffacd;
  color: #696969;
  margin-left: 3px;
  margin-top: 3px;
  box-shadow: none;
}

.answer {
  padding-top: 1rem;
  font-size: 1.5rem;
}
</style>
