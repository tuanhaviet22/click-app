<template>
  <section class='cores-value'>
    <div class='background-over' v-if='module.module_background_color'
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class='container'>
      <title_module :title='module.module_title' :description='module.module_description' />
      <div class='row'>

        <div class='col-md-4' v-for='item in metadata'>
          <div class='core-value-item'>

            <div v-if='item.imgorsvg == "svg"' class='cores-value-icon text-center'>
              <span class='icon-wrapper'>
                  <a :href='item.item_slide_url' :title='item.item_slide_desc'
                     v-html='item.item_slide_svg'>
                  </a>
              </span>
            </div>
            <div v-else v-if='item.item_slide_image' class='cores-value-icon text-center'
                 :style="{ 'background-color':  item.item_slide_image }"
                 style='background-size: cover; background-repeat: no-repeat;'>
            </div>
            <div class='cores-value-content'>
              <h3 class='title text-center'>
                <a :href='item.item_slide_url'
                   :title='item.item_slide_desc'>{{ item.item_slide_title }}</a>
              </h3>
              <div class='desc'>{{ item.item_slide_desc }}</div>
            </div>
          </div>
        </div>

      </div>
      <div class='btn-active'>
        <cta_button :module='module'/>
      </div>
    </div>
  </section>
</template>

<script>
import Cta_button from '~/components/LandingPage/cta_button'
import Title_module from '~/components/LandingPage/title_module'

export default {
  name: 'cores_value',
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
