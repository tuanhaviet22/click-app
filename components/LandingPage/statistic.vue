<template>
  <section class="background-css fact-area statistic-block">
    <div class="background-over" v-if="module.module_background_color"
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class="container">
      <title_module :title="module.module_title" :description="module.module_description" />
      <div class="row no-gutters">
        <div v-if="module.module_background || module.module_avatar" class="col-md-6 col-sm-12 animated"
             data-delay="0.4" data-animate="fadeIn">
          <div class="counter-image">
            <div class="rotmate-image rotateme" v-if="module.module_background">
              <img :src="module.module_background" alt="">
            </div>
            <div class="top-img" v-if="module.module_avatar">
              <img :src="module.module_avatar">
            </div>
          </div>
        </div>
        <div class="col-xs-12"
             :class="[(module.module_background || module.module_avatar) ? 'col-md-6 col-sm-12' : '']">
          <div class="row animated" data-animate="fadeInDown" data-delay=".6">
            <div class="col-xs-12 statistic-item" v-for="item in metadata"
                 :class="[(module.module_background || module.module_avatar) ? 'col-md-6 col-sm-12' : '']">
              <div class="fun_text">
                <div class="icon-item">
                    <span class="counter-icon">
                      <span v-if="item.imgorsvg == 'svg'" v-html="item.item_slide_svg"></span>
                        <img v-else :src="item.item_slide_image"
                             :alt="item.item_slide_image_alt"
                             :title="item.item_slide_image_title">
                    </span>
                </div>
                <span class="counter" data-speed="3500"
                      data-stop="7000" v-if="item.item_slide_value">{{ item.item_slide_value }}</span>
                <h4 v-if="item.item_slide_title">{{ item.item_slide_title }}</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <cta_button :module="module" />
  </section>
</template>

<script>
import Cta_button from '@/components/LandingPage/cta_button'
import Title_module from '@/components/LandingPage/title_module'

export default {
  name: 'statistic',
  components: { Title_module, Cta_button },
  props: ['id'],
  data() {
    return {
      module: {},
      metadata: []
    }
  },
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.metadata = JSON.parse(this.module.module_metadata)
  }
}
</script>

<style scoped>

</style>
