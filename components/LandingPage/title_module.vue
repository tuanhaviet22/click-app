<template>
  <div class="row justify-content-center">
    <div class="section-heading text-center mb-5">
      <h2 class="title-section flex-center relative animated" data-animate="fadeInDown" data-delay=".1" v-if="title">
        {{ title }}
      </h2>
      <div class="desc-section animated" v-if="description" data-animate="fadeInRight" data-delay=".2"
           data-duration="1" v-html="description">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'title_module',
  props: ['title', 'description']
}
</script>

<style scoped>

</style>
