<template>
  <div class="normal-box7">
    <img src="@/assets/大理石赤.jpg" class="redstone" width=800 height=900>
    <div class="submits">
      <br /><hr style="text-align: center" width="100%" size="20" noshade="" />
      <h3 style="text-align: center" id="your">
        【 あなたのSustainable Tips 】
      </h3>
      <br />
      <br>

      <h4 style="text-align: center; font size=60" id="newpost">New Post</h4>
      <div class="normal-box2">
        <div id="submit" style="text-align: center">
          <div id="submit-title" style="text-align: center">
            <h2>タイトル</h2>
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
            <h2>画像</h2>
            <button class="button1" v-on:click="Picture">画像アップロード</button>
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
          <div id="shosai"><h2>詳細</h2></div>
          <div id="appp">
         <h2><button class="toko" v-on:click="Post">投稿</button></h2>
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
  top: -40px;
  left: 0;
  right: 0;
  margin: auto;
}
/* 
.normal-box7 {
  padding: 500px 100px 600px 20px;
  width: 55%;
  margin-bottom: 10px;
  border: 5px double #333333;
  text-align: center;
  justify-content: center;


} */

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

.toko {
   width: 10%;
    min-width: 200px;
    max-width: 600px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid white;
    background: pink;
    cursor: pointer;
        font-size: 23px;

}

#submit {
  position: relative;
  top: 180px;
}

#your {
  background-color: pink;
  width: 420px;
  height: 10%;
  position: relative;
  top:30px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 30px;
  font-size: 25px;
}

.redstone {
  position: absolute;
  top: 158px;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0.8;
}

#newpost {
  font-size: 40px;
  position: relative;
  top: 40px;
}

#submit h1 {
  position: relative;
  top: -200px;
}

#submit-title {
  position: relative;
  top: -110px;
  
}

#picturee {
  position: relative;
  top: -40px;
}

#picturee button {
  position: relative;
  top: 9px;
}

.button1 {
  width: 7%;
    min-width: 200px;
    max-width: 600px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid white;
    background: pink;
    cursor: pointer;
    border-radius: 14px;
    font-size: 15px;
}

#shosai {
  position: relative;
  top: 185px;
  text-align: center;
}

.textbox {
  position: relative;
  top: -120px;
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
  top: 210px;
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
