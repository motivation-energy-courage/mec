<template>
  <div class="app">
    <button v-on:click="postTweet">ツイート</button>
    <!-- 変更点１ -->
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        git
        {{ tweet.text }}
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  /* 変更点２ */
  data() {
    return {
      tweets: [
        // こんな感じのデータが入る予定
        {
          id: "0GwoGZuhTNhqHQDBeiVW",
          text: "こんにちは、ツイートの本文です。",
        },
      ],
    };
  },
  methods: {
    postTweet() {
      const tweet = {
        text: "こんにちは、ツイートの本文です。",
      };
      firebase
        .firestore()
        .collection("tweets")
        .add(tweet)
        .then((ref) => {
          this.tweets.push({
            id: ref.id,
            ...tweet,
          });
        });
    },
  },
};
</script>
