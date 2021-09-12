<template>
  <div class="about">
    <div class="subtitle">
      <h1 style="text-align: center; padding: 70px; font-size: 50px">Rating</h1>

      <div class="brand">
        <h2 style="text-align: center; font-size: 34px">
          &nbsp;Fast Fashion Brand&nbsp;
        </h2>
      </div>

      <div class="item">
        <div class="zarap" v-on:click="zara">ZARA</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="uniqlop" v-on:click="uniqlo">UNIQLO</div>
        &nbsp;&nbsp;&nbsp;
        <div id="mujip" v-on:click="muji">無印良品</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="shimamurap" v-on:click="shimamura">しまむら</div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="item2">
          <br />
          <div class="hmp" v-on:click="hm">H&M</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="gapp" v-on:click="gap">GAP</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="gup" v-on:click="gu">GU</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="adidasp" v-on:click="adidas">adidas</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="brand2">
            <h2 style="text-align: center; font-size: 34px">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ethical Fashion
              Brand&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
          </div>
          <div class="item3">
            <br />
            <div class="peoplep" v-on:click="peopletree">PeopleTree</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div class="patagoniap" v-on:click="patagonia">Patagonia</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div class="nikep" v-on:click="nike">NIKE</div>
            <div class="item4">
              <br />
              <div class="stellap" v-on:click="stella">
                Stella&nbsp;McCartney
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div class="nastiesp" v-on:click="nasties">No&nbsp;Nasties</div>
              &nbsp;&nbsp;&nbsp;
              <div class="outerp" v-on:click="outerknown">Outerknown</div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          id: 1,
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
          total: "⭐️⭐️★★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 2,
          totalnum: "2.0/5.0",
          envrate: "⭐️⭐️★★★",
          envnum: "2.0/5.0",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "？",
          animalnum: "？/5.0",
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
          id: 3,
          totalnum: "1.0/5.0",
          envrate: "⭐️⭐️⭐️★★",
          envnum: "3.0/5.0",
          laborrate: "⭐️★★★★",
          labornum: "1.0/5.0",
          animalrate: "?",
          animalnum: "？/5.0",
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
          price: "⭐️★★★★",
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
          total: "⭐️⭐️⭐️★★",
          location: "JAPAN",
          price: "⭐️★★★★",
          id: 5,
          totalnum: "3.0/5.0",
          envrate: "⭐️⭐️⭐️★★",
          envnum: "3.0/5.0",
          laborrate: "⭐️⭐️★★★",
          labornum: "2.0/5.0",
          animalrate: "⭐️⭐️⭐️★★",
          animalnum: "3.0/5.0",
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
          location: "United Kingdom",
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
          total: "⭐️⭐️⭐️⭐️★",
          location: "United States",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "4.0/5.0",
          envrate: "⭐️⭐️⭐️⭐️★",
          envnum: "4.0/5.0",
          laborrate: "⭐️⭐️⭐️★★",
          labornum: "3.0/5.0",
          animalrate: "⭐️⭐️⭐️★★",
          animalnum: "3.0/5.0",
          brandpic: require("@/assets/patagonia.jpeg"),
        },
      })
    },
    nike: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "NIKE",
          total: "⭐️⭐️⭐️★★",
          location: "United States",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "3.0/5.0",
          envrate: "⭐️⭐️⭐️★★",
          envnum: "3.0/5.0",
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
          total: "⭐️⭐️⭐️⭐️★",
          location: "United Kingdom",
          price: "⭐️⭐️⭐️★★",
          id: 0,
          totalnum: "4.0/5.0",
          envrate: "⭐️⭐️⭐️⭐️★",
          envnum: "4.0/5.0",
          laborrate: "⭐️⭐️⭐️★★",
          labornum: "3.0/5.0",
          animalrate: "⭐️⭐️⭐️⭐️★",
          animalnum: "4.0/5.0",
          brandpic: require("@/assets/strella.png"),
        },
      })
    },
    nasties: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "No Nasties",
          total: "⭐️⭐️⭐️⭐️⭐️",
          location: "India",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "5.0/5.0",
          envrate: "⭐️⭐️⭐️⭐️⭐️",
          envnum: "5.0/5.0",
          laborrate: "⭐️⭐️⭐️⭐️⭐️",
          labornum: "5.0/5.0",
          animalrate: "⭐️⭐️⭐️⭐️⭐️",
          animalnum: "5.0/5.0",
          brandpic: require("@/assets/nasties.jpg"),
        },
      })
    },
    outerknown: function () {
      this.$router.push({
        name: "Detail",
        params: {
          brand: "OUTERKNOWN",
          total: "⭐️⭐️⭐️⭐️★",
          location: "United States",
          price: "⭐️⭐️★★★",
          id: 0,
          totalnum: "4.0/5.0",
          envrate: "⭐️⭐️⭐️⭐️⭐️",
          envnum: "5.0/5.0",
          laborrate: "⭐️⭐️⭐️⭐️★",
          labornum: "4.0/5.0",
          animalrate: "⭐️⭐️⭐️★★",
          animalnum: "3.0/5.0",
          brandpic: require("@/assets/outerknown.png"),
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
  animation: zoomIn 2.8s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards;
}

@keyframes zoomIn {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.subtitle h1 {
  color: black;
}

.brand h2 {
  color: black;
  text-align: center;
  position: relative;
  top: 390px;
  left: 33%;
  font-family: "Baskerville Old Face", serif;
  background-color: #ffcc99;
  border: #fff solid 1px;
  width: 500px;
  border-radius: 10px;
  animation: SlideIn 6.6s infinite;
}

@keyframes SlideIn {
  0% {
    opacity: 0; /*初期状態では透明に*/
    transform: translateX(64px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.item {
  position: absolute;
  top: 125%;
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
  position: relative;
  text-align: center;
  top: 200px;
  display: flex;
  left: -460px;
  font-size: 30px;
  font-family: "Baskerville Old Face", serif;
}

.item4 {
  text-align: center;
  position: absolute;
  top: 80px;
  left: -50px;
  display: flex;
  font-size: 30px;
  font-family: "Baskerville Old Face", serif;
}

.subtitle h1 {
  color: white;
  font-family: "Baskerville Old Face", serif;
}

.brand2 h2 {
  position: absolute;
  top: 100px;
  left: 10px;

  background-color: #d6ffad;
  border-radius: 0px;
  animation: SlideIn 6.6s infinite;
}

.zarap:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.uniqlop:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.gup:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.shimamurap:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.hmp:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.gapp:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

#mujip:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.adidasp:hover {
  color: deeppink;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.peoplep:hover {
  color: #66ff00;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.patagoniap:hover {
  color: #66ff00;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.nikep:hover {
  color: #66ff00;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.stellap:hover {
  color: #66ff00;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.nastiesp:hover {
  color: #66ff00;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.outerp:hover {
  color: #66ff00;
  transform: scale(1.3);
  transition: 0.3s;
  cursor: pointer;
}

.howwerate {
  position: relative;
  top: -100px;
  color: black;
  cursor: pointer;
}
</style>
