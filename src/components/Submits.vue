<template>
  <div class="normal-box7">
    <div class="submits">
      <br />
      <h1 style="text-align: center">
        【あなたのSustainable Tipsを教えてください】
      </h1>
      <br />

      <h4 style="text-align: center; font size=30">New Post</h4>
      <div class="normal-box2">
        <div id="submit" style="text-align: center">
          <h1>投稿内容</h1>
          <div id="submit-title" style="text-align: center">
            <h1>タイトル</h1>
          </div>
          <div class="textbox">
            <input
              class="textbox1"
              v-on:click="Post"
              v-model="message"
              placeholder="例）私のおすすめエシカルワンピース"
              size="50"
            />
          </div>
          <div id="picturee" style="text-align: center">
            <h1>画像</h1>
            <button v-on:click="Picture">画像アップロード</button>
          </div>

          <div class="textbox2">
            <input
              class="text2"
              v-on:click="Post"
              v-model="detail"
              placeholder="例）このワンピースは100%リサイクル素材から作られていますよ！"
              size="50"
            />
          </div>
        </div>
        <div id="up">
          <div id="shosai"><h1>詳細</h1></div>
          <div id="appp">
            <button v-on:click="Post">投稿</button>
          </div>
        </div>
        <div class="divid">
          <hr style="text-align: center" width="100%" size="20" noshade="" />
          <br />
          <h1 style="text-align: center">Posts List</h1>
          <br />
          <img
            src="@/assets/ワンピース.jpeg"
            width="30%"
            height="300"
            class="onepiece"
          />
          <img
            src="@/assets/cosme.jpg"
            width="30%"
            height="300"
            class="cosme"
          />
          <img
            src="@/assets/ピアス.jpg"
            width="30%"
            height="300"
            class="pierce"
          />

          <div class="boxes" style="display: flex; flex-wrap: wrap">
            <div class="box1" v-for="(post, index) in posts" :key="index">
              <h2 style="text-align: center">Title</h2>
              <h3 style="text-align: center">{{ post.title }}</h3>
              <br />
              <h2 style="text-align: center">Detail</h2>
              <h3 style="text-align: center">{{ post.details }}</h3>
              <br />
              <h5 class="edit">編集</h5>
              <br />
              <h5 class="delete">削除</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      picture: null,
      message: "",
      detail: "",
      posts: [],
      postorder: 0,
    }
  },

  methods: {
    Post() {
      console.log(this.postorder)
      firebase.firestore().collection("posts").doc(String(this.postorder)).set({
        title: this.message,
        details: this.detail,
      })
    },
    Picture() {},
  },
  created: function () {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          this.posts.push(doc.data())
        })
        // this.posts.push(docs.data())
        console.log(this.posts)
        this.postorder = this.posts.length
      })
  },
}
</script>

<style scoped>
.submits {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;
}

.normal-box7 {
  padding: 50px 1000px 1000px 20px;
  margin-bottom: 10px;
  border: 5px double #333333;
}

.submits h4 {
  background-color: rgba(255, 0, 0, 0.5);

  border-top-left-radius: 10px 5px;
  border-top-right-radius: 20px 10px;
  border-bottom-right-radius: 30px 50px;
  border-bottom-left-radius: 40px 100px;
  width: 20%;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 35px;
}

.newpost h1 {
  position: relative;
  top: 100px;
  background-color: rgba(255, 0, 0, 0.5);

  border-top-left-radius: 10px 5px;
  border-top-right-radius: 20px 10px;
  border-bottom-right-radius: 30px 50px;
  border-bottom-left-radius: 40px 100px;
}

/* .normal-box2 {
  margin: 2em 15em;
  padding: 30em;
  background-color: #fce4ec;
  border-radius: 10px;
} */

#appp {
  position: relative;
  top: 700px;
  text-align: center;
}

#submit {
  position: relative;
  top: 180px;
}

#submit h1 {
  position: relative;
  top: -100px;
}

#submit-title {
  position: relative;
  top: 60px;
}

#picturee {
  position: relative;
  top: 100px;
}

#picturee button {
  position: relative;
  top: -60px;
}

#shosai {
  position: relative;
  top: 304px;
  text-align: center;
}

.textbox {
  position: relative;
  top: -50px;
  width: 40%;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
}

.textbox1 {
  width: 100%; /*親要素いっぱい広げる*/
  padding: 10px 15px; /*ボックスを大きくする*/
  font-size: 16px;
  border-radius: 3px; /*ボックス角の丸み*/
  border: 2px solid #ddd; /*枠線*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
  position: relative;
  top: 30px;
  left: 0;
  right: 0;
  margin: auto;
}

.text2 {
  width: 530px; /*親要素いっぱい広げる*/
  padding: 200px 15px; /*ボックスを大きくする*/
  font-size: 16px;
  border-radius: 3px; /*ボックス角の丸み*/
  border: 2px solid #ddd; /*枠線*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
  position: absolute;
  top: 300px;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
}

.divid {
  position: absolute;
  top: 1200px;
  left: 0;
  right: 0;
  margin: auto;
}
hr {
  border: none;
  border-top: 3px double #333;
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;
}

hr:after {
  background: #fff;
  content: "§";
  padding: 0 4px;
  position: relative;
  top: -13px;
}

img.onepiece {
  margin: 10px 20px 20px;
}

img.pierce {
  margin: 10px 30px 10px;
}

.box1 {
  width: 30%;
  height: 400px;
  background-color: #f0f8ff;
  margin: 0px 20px 20px;
}

.edit {
  position: absolute;
  top: 830px;
  left: 30px;
  cursor: pointer;
}

.delete {
  position: absolute;
  top: 830px;
  cursor: pointer;
}

.box2 {
  width: 28.5%;
  height: 400px;
  background-color: #f0f8ff;
  margin: 0px 10px 20px;
  position: absolute;
  top: 438px;
}
</style>
