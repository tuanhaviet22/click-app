<template>
  <section class='fact-area history-block'>
    <div class='background-over' v-if='module.module_background_color'
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class='container'>
      <title_module :title='module.module_title' :description='module.module_description' />
      <div class='row'>
        <div class='col-lg-6 col-md-6'>

          <div class='history-item' v-for='(item,key) in metadata' v-if='key%2 == 0'
               :class='[(key != 0) ? "mt-5" : ""]'>
            <div class='history-thumb animated fadeInUp' data-animate='fadeInUp' data-duration='.1s' data-delay='0.2s'
                 v-if='item.item_slide_icon' v-html='item.item_slide_icon'>
            </div>
            <div class='history-thumb animated fadeInUp' data-animate='fadeInUp' data-duration='.1s' data-delay='0.2s'
                 v-else>
              <img :src='item.item_slide_image' :alt='item.item_slide_image_alt'
                   :title='item.item_slide_image_title'>
            </div>

            <div class='history-content animated fadeInUp' data-animate='fadeInUp' data-duration='.1s'
                 data-delay='0.2s'>
              <span>{{ item.item_slide_value }}</span>
              <h4 class='title'>{{ item.item_slide_title }}</h4>
            </div>
            <div class='number-box'>
              <span>{{(key<10) ? "0" : ''}}{{  key+1 }}</span>
            </div>
          </div>

        </div>
        <div class='col-lg-6 col-md-6'>

          <div class='history-item pt-240 history-item-2' v-for='(item,key) in metadata' v-if='key%2 != 0'
               >
            <div class='history-thumb animated fadeInUp' data-animate='fadeInUp' data-duration='.1s' data-delay='0.2s'
                 v-if='item.item_slide_icon' v-html='item.item_slide_icon'>
            </div>
            <div class='history-thumb animated fadeInUp' data-animate='fadeInUp' data-duration='.1s' data-delay='0.2s'
                 v-else>
              <img :src='item.item_slide_image' :alt='item.item_slide_image_alt'
                   :title='item.item_slide_image_title'>
            </div>

            <div class='history-content animated fadeInUp' data-animate='fadeInUp' data-duration='.1s'
                 data-delay='0.2s'>
              <span>{{ item.item_slide_value }}</span>
              <h4 class='title'>{{ item.item_slide_title }}</h4>
            </div>
            <div class='number-box'>
              <span>{{(key<10) ? "0" : ''}}{{  key+1 }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <cta_button :module='module' />
  </section>
</template>

<script>
import Title_module from '@/components/LandingPage/title_module'
import Cta_button from '@/components/LandingPage/cta_button'
export default {
  name: 'history',
  props: ['id'],
  components: { Cta_button, Title_module },
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
