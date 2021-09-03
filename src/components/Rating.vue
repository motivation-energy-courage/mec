<template>
  <div class="about">
    <div class="subtitle">
      <h1 style="text-align: center; padding: 70px; font-size: 50px">Rating</h1>
      <div class="brand">
        <h2 style="text-align: center; padding: 70px; font-size: 34px">
          Fast Fashion Brand
        </h2>
      </div>

      <div class="item">
        <div v-on:click="zara">ZARA</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div v-on:click="uniqlo">UNIQLO</div>
        &nbsp;&nbsp;&nbsp;
        <div v-on:click="gu">GU</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div v-on:click="shimamura">しまむら</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="item2">
          <br />
          <div v-on:click="hm">H&M</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div v-on:click="gap">GAP</div>
          &nbsp;&nbsp;&nbsp;
          <div v-on:click="muji">無印良品</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div v-on:click="adidas">adidas</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="brand2">
            <h2 style="text-align: center; font-size: 34px">
              Ethical Fashion Brand
            </h2>
          </div>
          <div class="item3">
            <br />
            <div v-on:click="peopletree">PeopleTree</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-on:click="patagonia">Patagonia</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-on:click="nike">NIKE</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-on:click="stella">Stella McCartney</div>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PeopleTree from "@/components/PeopleTree.vue"
// import ZARA from './ZARA.vue'

export default {
  methods: {
    // zara専用のページに飛ばす
    zara: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "ZARA",
          total: "⭐️⭐️★★★",
          location: "Spain",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "2.0/5.0",
          envrate: "⭐️★★★★",
          enbratenum: "2.0/5.0",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
          brandpic: "ハロー",
        },
      })
    },
    uniqlo: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "UNIQLO",
          total: "⭐️⭐️★★★",
          location: "JAPAN",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "2.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    gu: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "GU",
          total: "⭐️⭐️★★★",
          location: "JAPAN",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "2.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    shimamura: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    hm: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    gap: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    muji: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    adidas: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    peopletree: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    patagonia: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    nike: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
        },
      })
    },
    stella: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "しまむら",
          total: "⭐️★★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️★★★",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
          enbratenum: "3.0/5.0",
        },
      })
    },
  },
}
</script>

<style>
.about {
  background-image: url(https://cdn.pixabay.com/photo/2016/12/12/20/34/shirt-1902601_1280.jpg);
  background-size: cover;
  height: 580px;
  width: 100%;
  position: absolute;
  top: 0;
}

.brand {
  color: black;
  text-align: center;
  position: relative;
  top: 250px;
  font-family: "Baskerville Old Face", serif;
}
.item {
  position: absolute;
  top: 120%;
  left: 33%;
  display: flex;
  font-size: 30px;
  font-family: "Baskerville Old Face", serif;
}

.item a {
  text-decoration: none;
  color: black;
}

.item2 {
  text-align: center;
  position: absolute;
  top: 100px;
  left: 10px;

  display: flex;
  font-size: 30px;
  font-family: "Baskerville Old Face", serif;
}

.item3 {
  position: absolute;
  top: 360%;
  display: flex;
  font-size: 30px;
  font-family: "Baskerville Old Face", serif;
}

.subtitle h1 {
  color: white;
}

.brand2 {
  position: absolute;
  top: 70px;
  left: 50px;
}
</style>
