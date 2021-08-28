<template>
  <div class="my-page">
    <h1 style="text-align: center; padding: 70px; font-size: 50px">
      Sustainable Tips
    </h1>

    <div>
      <Uniqlo />
    </div>
  </div>
</template>

<script>
import Uniqlo from "@/components/Uniqlo.vue"

export default {
  components: {
    Uniqlo,
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
}

.my-page h1 {
  color: white;
}
</style>
