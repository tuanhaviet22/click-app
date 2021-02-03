<template>
  <section v-if="module" class="background-css procedure-section ptb-100">
    <div class="background-over" v-if="module.module_background_color"
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class="container">
      <title_module :title="module.module_title" :description="module.module_description" />
      <div class="row align-items-center justify-content-md-center">
        <div class="col-md-12 col-lg-6" data-animate="fadeIn" data-delay=".4">
          <div class="work-process-wrap">


            <div class="process-icon-item" v-for="(item,index) in metadata"
                 :class="[(index%2 == 0) ? 'left-shape' : 'right-shape']">
              <div class="d-flex align-items-center">
                <div class="process-icon" :class="[(index%2 == 0) ? 'mr-4' : 'ml-4']">
                  <a v-if="item.imgorsvg == 'svg'"
                     :href="item.item_slide_url"
                     :title="item.item_slide_title" v-html="item.item_slide_svg">
                  </a>
                  <img v-else v-if="item.item_slide_image" :src="item.item_slide_image" :alt="item.item_slide_alt"
                       :title="item.item_slide_title">
                  <i v-else class="fas fa-project-diagram color-primary"></i>
                </div>
                <div class="process-content" :class="[(index%2 == 0) ? 'text-left' : 'text-right']">
                  <h5>{{ item.item_slide_title }}</h5>
                  <p v-html="item.item_slide_desc"></p>
                </div>
              </div>


              <svg class="svg-line" x="0px" y="0px" width="312px" height="130px" v-if="index == 0">
                <path fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300"
                      stroke-dashoffset="0"
                      d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"
                      class="dashed1"></path>
                <path fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300"
                      d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "
                      class="dashed2"></path>
              </svg>


              <svg class="svg-line" x="0px" y="0px" width="312px" height="130px" v-else>
                <path fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300"
                      stroke-dashoffset="0"
                      d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"
                      class="dashed1"></path>
                <path fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300"
                      d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"
                      class="dashed2"></path>
              </svg>

            </div>

          </div>
        </div>
        <div class="col-md-6 col-lg-6" data-animate="fadeIn" data-delay=".6">
          <div class="img-wrap">
            <img v-if="module.module_avatar" :title="module.module_title" :alt="module.module_title"
                 :src="module.module_avatar"
                 class="img-center img-fluid">
          </div>
        </div>
      </div>
      <div class="btn-active">
        <cta_button :module="module" />
      </div>
    </div>
  </section>
</template>

<script>
import Title_module from '@/components/LandingPage/title_module'
import Cta_button from '@/components/LandingPage/cta_button'

export default {
  name: 'procedure',
  components: { Cta_button, Title_module },
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
