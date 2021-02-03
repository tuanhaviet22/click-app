<template>
  <section class="main-banner background-css banner--4 position-relative banner-header"
           v-bind:style="{ 'background-color':  module.module_background_color }">
    <canvas id="c" height="485" width="1920"></canvas>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-7">
          <div class="banner-content text-white">
            <h2 v-if="module.module_title" data-animate="fadeInDown" data-delay=".5" class="animated fadeInDown"
                style="animation-duration: 0.6s; animation-delay: 0.5s;">
              {{ module.module_title }}
            </h2>
            <p v-if="module.module_description" data-animate="fadeInLeft" data-delay=".7" class="animated fadeInLeft"
               style="animation-duration: 0.6s; animation-delay: 0.7s;" v-html="module.module_description">
            </p>
            <a :href="(module.module_url_button != null) ? 'module.module_url_button' : '/' "
               class="btn list-inline animated fadeInUp"
               :title="module.module_title_url_button" v-if="module.module_title_button">
              <span v-if="module.module_icon_button"
                    v-html="module.module_icon_button"></span>{{ module.module_title_button }}
            </a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="banner-image banner-img--4">
            <img :src="module.module_background"
                 :alt="module.module_title" data-animate="fadeInRight"
                 v-if="module.module_background"
                 data-delay="1" class="animated fadeInRight" style="animation-duration: 0.6s; animation-delay: 1s;">
            <img :src="module.module_avatar" data-rjs="2"
                 v-if="module.module_avatar"
                 :alt="module.module_title" data-animate="fadeInDown"
                 data-delay="1.3" class="animated fadeInDown" style="animation-duration: 0.6s; animation-delay: 1.3s;">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  name: 'banner',
  props: ['id'],
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      settings: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20
        // Some Swiper option/callback...
      },
      module: {},
      listBanner: []
    }
  },
  computed: {},
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.listBanner = JSON.parse(this.module.module_metadata)
  }
}
</script>

<style scoped>

</style>
