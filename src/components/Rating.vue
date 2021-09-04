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
<div class="item4">
          <br />
          <div v-on:click="stella">Stella&nbsp;McCartney</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div v-on:click="nasties">No&nbsp;Nasties</div>
          &nbsp;&nbsp;&nbsp;
          <div v-on:click="outerknown">Outerknown</div>
          &nbsp;&nbsp;&nbsp;&nbsp;


          <!-- <div class ="item4">
             <br />
            <div v-on:click="stella">Stella&nbsp;McCartney</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div v-on:click="stella">No&nbsp;Nasties</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div v-on:click="stella">Outerknown</div>
            </div> -->

          </div>
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
          envrate: "⭐️⭐️★★★",
          envnum: "2.0/5.0",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
          brandpic: require("@/assets/ZARA.jpg"),
        },
      })
    },
    uniqlo: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "UNIQLO",
          total: "⭐️⭐️⭐️★★",
          location: "JAPAN",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "3.0/5.0",
          envrate: "⭐️⭐️⭐️★★",
          envnum: "3.0/5.0",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️⭐️★★",
          animalnum: "3.0/5.0",
          brandpic: require("@/assets/UNIQLO.jpeg"),
        },
      })
    },
    gu: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "GU",
          total: "⭐️⭐️⭐️★★",
          location: "JAPAN",
          price: "⭐️⭐️⭐️★★",
          id: 0,
          totalnum: "2.0/5.0",
          envrate: "⭐️⭐️⭐️★★",
          laborrate: "⭐️⭐️⭐️★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️⭐️★★",
          animalnum: "2.0/5.0",
          brandpic: require("@/assets/GU.png"),
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
          brandpic: require("@/assets/しまむら.jpg"),
        },
      })
    },
    hm: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "H&M",
          total: "⭐️⭐️⭐️★★",
          location: "Sweden",
          price: "⭐️⭐️⭐️★★",
          id: 0,
          totalnum: "3.0/5.0",
          envrate: "⭐️⭐️⭐️★★",
          envnum: "3.0/5.0",
          laborrate: "⭐️⭐️⭐️★★",
          labornum: "3.0/5.0",
          animalrate: "⭐️⭐️⭐️★★",
          animalnum: "3.0/5.0",
          brandpic: require("@/assets/H&M.jpg"),
        },
      })
    },
    gap: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "GAP",
          total: "⭐️⭐️⭐️★★",
          location: "Germany",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "3.0/5.0",
          envrate: "⭐️⭐️⭐️★★",
          envnum: "3.0/5.0",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️★★★",
          animalnum: "2.0/5.0",
          brandpic: require("@/assets/GAP.png"),
        },
      })
    },
    muji: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "無印良品",
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
          brandpic: require("@/assets/無印.jpeg"),
        },
      })
    },
    adidas: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "adidas",
          total: "⭐️⭐️⭐️⭐️★",
          location: "Germany",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "4.0/5.0",
          envrate: "⭐️⭐️⭐️⭐️★",
          envnum: "4.0/5.0",
          laborrate: "⭐️⭐️⭐️★★",
          labornum: "3.0/5.0",
          animalrate: "⭐️⭐️⭐️★★",
          animalnum: "3.0/5.0",
          brandpic: require("@/assets/adidas.jpg"),
        },
      })
    },
    peopletree: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "PeopleTree",
          total: "⭐️⭐️⭐️⭐️⭐️",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 0,
          totalnum: "5.0/5.0",
          envrate: "⭐️⭐️⭐️⭐️⭐️",
          envnum: "5.0/5.0",
          laborrate: "⭐️⭐️⭐️⭐️⭐️",
          labornum: "5.0/5.0",
          animalrate: "⭐️⭐️⭐️⭐️★",
          animalnum: "4.0/5.0",
          brandpic: require("@/assets/peopletree.png"),
        },
      })
    },
    patagonia: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "Patagonia",
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
          brandpic: require("@/assets/patagonia.jpeg"),
        },
      })
    },
    nike: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "NIKE",
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
          brandpic: require("@/assets/NIKE.jpg"),
        },
      })
    },
    stella: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "Stella McCartney",
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
          brandpic: require("@/assets/strella.png"),
        },
      })
    },
    nasties: function () {
      this.$router.push({name: "Detail",
        params: {
          brand: "No Nasties",
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
          brandpic: require("@/assets/nasties.jpg"),
        },
      })
      },
      outerknown: function () {
        this.$router.push({name: "Detail",
        params: {
          brand: "OUTERKNOWN",
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
          brandpic: require("@/assets/outerknown.png"),
        },
      })
      }
    
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
    text-align: center;

  top: 440%;
  display: flex;
  font-size: 30px;
  font-family: "Baskerville Old Face", serif;
}

.item4 {
  text-align: center;
  position: absolute;
  top: 80px;
  display: flex;
  font-size: 30px;
  font-family: "Baskerville Old Face", serif;
  right: -170px;
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
