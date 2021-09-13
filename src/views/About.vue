<template>
  <div>
    <Rating />
    <Getpic />

    <Howwerate />
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue"
import Howwerate from "@/components/Howwerate.vue"
import Getpic from "@/components/Getpic.vue"

export default {
  components: {
    Rating,
    Howwerate,
    Getpic,
  },
}
</script>
