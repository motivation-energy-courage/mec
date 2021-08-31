<template>
  <div class="quiz">
    <h1>Question</h1>

    <div class="quiz1">
      <h3>{{ question.title }}</h3>
      <div v-for="(answer, index) in question.answers" v-bind:key="index">
        <button v-on:click="hantei(answer.correct)" class="button">
          {{ answer.choice }}
        </button>
      </div>
      <div class="answer">
        <h2>Answer</h2>
      </div>
      <div>{{ seikaiOrFuseikai }}</div>
      <div class="questions">
        <Questions msg="問題2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Questions"],
  data() {
    return {
      seikaiOrFuseikai: "",
      question: {
        title: "Q.エシカルファッションと関係ない言葉はどれでしょう？",
        answers: [
          {
            choice: "A.サステナブル",
            correct: false,
          },
          {
            choice: "B.フェアトレード",
            correct: false,
          },
          {
            choice: "C.ロハス",
            correct: false,
          },
          {
            choice: "D.トレンド",
            correct: true,
          },
        ],
      },
    }
  },
  methods: {
    hantei(answer) {
      // 正解不正解を判定する
      if (answer) {
        this.seikaiOrFuseikai = "正解"
      } else {
        this.seikaiOrFuseikai = "不正解"
      }
    },
  },
}
</script>

<style>
.quiz {
  display: flex;
  flex-direction: column;
  align-items: left;
  color: rgb(43, 41, 41);
}

.quiz1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  color: #696969;
}

.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
}

.answer {
  color: rgb(43, 41, 41);
  padding-top: 3rem;
}
</style>
