<template>
  <section class="banner-block" :id="'banner-block-'+id" v-if="module.module_background == null">
    <swiper ref="banner-slide" :options="settings" >
      <swiper-slide v-for="(banner,key) in listBanner" :key="key">
        <div class="single-slider content-v-center">
          <img :src="banner.item_slide_image" :alt="banner.item_slide_image_alt" :title="banner.item_slide_image_title"
               class="w-100 d-block">
        </div>
      </swiper-slide>
    </swiper>

  </section>
  <section class="banner-area banner-bg-1 ptb--80 ptb-md--60 banner-block"  v-else
           :id="'banner-block-'+id"
           v-bind:style="{ 'background-image': 'url(' + module.module_background + ')' }"
  >
    <div class="banner-box text-center">
      <h2 class="banner__name">{{module.module_title}}</h2>
      <p class="banner__text mb--50 mb-md--20" v-if="module.module_description" v-html="module.module_description"></p>
      <a v-if="module.module_title_button" :href="module.module_url_button"
         class="btn btn-bordered btn-style-1"
         :title="module.module_title_url_button"><span v-html="module.module_icon_button"></span> {{module.module_title_button}}</a>
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
      listBanner : []
    }
  },
  computed: {
  },
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id);
    this.listBanner = JSON.parse(this.module.module_metadata)
  }
}
</script>

<style scoped>

</style>
