<template>
  <section class='background-css mission-section'>
    <div class='background-over' v-if='module.module_background_color'
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class='container'>
      <div class='row flex-center'>
        <div class='mission-image col-md-12 col-lg-6 animated' data-animate='fadeInLeft' data-delay='.2'
             data-duration='1'>
          <div class='list-image relative'>
            <img v-for='item in metadata .media_data' v-if='item.image' :src='item.image' :alt='item.alt'
                 :title='item.title'>
          </div>
        </div>
        <div class='col-md-12 col-lg-6'>
          <title_module :title='module.module_title' :description='module.module_description' />
          <swiper ref='mission-slide'>
            <swiper-slide v-for='item in metadata.content_data'>
              <div class='animated' data-animate='fadeInRight' data-delay='.2' data-duration='1'>
                <div class='infor-text'>
                  <div class='desc'>{{ item.item_slide_desc }}</div>
                  <div class='staff flex'>
                    <div class='mission-svg' v-if='item.imgorsvg == "svg"' v-html='item.item_slide_svg'>
                    </div>
                    <img v-else :src='item.item_slide_image' title='item.item_slide_image_title'
                         :alt='item.item_slide_image_alt'>
                    <div class='name'>
                      <h3>{{ item.item_slide_title }}</h3>
                      <span>{{ item.item_slide_role }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>

        </div>
      </div>
      <div class='flex-center mt-5 btn-active'>
        <cta_button :module='module' />
      </div>

    </div>
  </section>
</template>

<script>
import Cta_button from '~/components/LandingPage/cta_button'
import Title_module from '~/components/LandingPage/title_module'
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'mission',
  props: ['id'],
  components: {
    Cta_button, Title_module, Swiper,
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
      },
      module: {},
      metadata: []
    }
  },

  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.metadata = JSON.parse(this.module.module_metadata)
    this.metadata.media_data = JSON.parse(this.metadata.media_data)
  }
}
</script>

<style scoped>

</style>
