<template>
  <div class="my-page">
    <h1 style="text-align: center; padding: 70px; font-size: 50px">
      Sustainable Tips
    </h1>
    <Tips />
  </div>
</template>

<script>
import Tips from "../components/Tips.vue"

export default {
  components: {
    Tips,
  },
}
</script>

<style scoped>
.my-page {
  background-image: url(https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_1280.jpg);
  background-size: cover;
  height: 580px;
  width: 100%;
  position: absolute;
  top: 0;
  animation: zoomIn 3.8s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards;
  font-family: "Baskerville Old Face", serif;
}

@keyframes zoomIn {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.my-page h1 {
  color: white;
}
</style>
