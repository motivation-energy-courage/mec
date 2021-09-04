<template>
  <div class="human">
    <div class="uniqlo">
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/greenpeacejp/guide/_/17851786916416986/"
      ></blockquote>
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CSb3Kr-Bi8M/"
      ></blockquote>
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CQ5pW4tp9GJ/"
      ></blockquote>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    this.$el.appendChild(script)
  },
}
</script>

<style>
.uniqlo {
  position: relative;
  top: 700px;
  display: flex;
  gap: 15px 30px;
}

.uniqlo h1 {
  text-align: center;
  font-family: "Baskerville Old Face", serif;
}
</style>
