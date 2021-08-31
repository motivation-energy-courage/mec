<template>
  <div class="about">
    <div class="subtitle">
      <h1 style="text-align: center; padding: 70px; font-size: 50px">Rating</h1>
      <div class="brand">
        <!-- <h2 style="text-align: center; padding: 70px; font-size: 34px">
          Fast Fashion Brand
        </h2> -->
      </div>

      <div>
        <ZARA />
      </div>
      <!-- <div class="item">
        <a href="http://127.0.0.1:5501/index.html">UNIQLO</a
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.e-pokke.com/blog/instagram-basic-display-api.html#step6"
          >ZARA</a
        >&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.e-pokke.com/blog/instagram-basic-display-api.html#step6"
          >H&M</a
        >
      </div> -->
    </div>
  </div>
</template>

<script>
import ZARA from "@/components/ZARA.vue"

export default {
  components: {
    ZARA,
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
  top: 700px;
  left: 33%;
  font-size: 30px;
  text-align: center;
  font-family: "Baskerville Old Face", serif;
}
.item a {
  text-decoration: none;
  color: black;
}

.subtitle h1 {
  color: white;
}
</style>
