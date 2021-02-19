<template>
  <section class='background-css price-section mt-sm--30'>
    <div class='background-over' v-if='module.module_background_color'
         v-bind:style="{ 'background-color':  module.module_background_color }">
    </div>
    <div class='container'>
      <title_module :title='module.module_title' :description='module.module_description' />
      <div class='row no-gutters align-items-center'>
        <div class='col-md-4 col-sm-6 col-12 mt-4' v-for='(item,key) in handleMetadata'>
          <div class='price-item w-80 text-center' :class='[(key == 0) ? "active" : ""]'>
            <a :href='item.url_link' class='text-center' :title='item.url_title'
               :alt='item.url_alt'>
              <div v-if='item.price_avatar' class='price-image-big'>
                <img :src='item.price_avatar' :title='item.name'
                     :alt='item.name'>
              </div>
              <div v-if='item.name' class='title title-price'>
                {{ item.name }}
              </div>
              <div class='content'>
                <div class='row-data' v-for='_item in item.data_column'>
                  <span class='icon' v-if='_item.icon' v-html='_item.icon'></span>
                  <img v-if='_item.image' :src='_item.image' :title='_item.image_title' :alt='_item.image_alt'
                       style='height: 5rem'>
                  <label class='text' v-if='_item.text'>
                    <b class='mb-0'>{{ _item.value }}</b>
                    {{ _item.text }}
                  </label>
                </div>
                <div v-if='item.image' class='row-data'>
                  <img :src='item.image' style='height: 5rem;'
                       :title='item.image_title'
                       :alt='item.image_alt'>
                </div>
              </div>

            </a>

            <div class='title text-center'>

              <a :href='item.url_link' :title='item.url_title'
                 :alt='item.url_alt'>
                <p class='text-center'>
                  <span v-html='item.icon_price'>
                  </span>
                  <label class='price'>
                    {{ item.price }}
                  </label>

                  <label class='price-old' v-if='item.price_sale'>{{ item.price_sale
                    }}</label>
                </p>
              </a>
              <p>
                <button class='btn-select-price cursor' v-if='item.show_btn == 1'>
                  {{ (item.btn_buy_text) ? item.btn_buy_text : 'Mua ngay' }}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cta_button from '~/components/LandingPage/cta_button'
import Title_module from '~/components/LandingPage/title_module'

export default {
  name: 'price',
  props: ['id'],
  components: { Cta_button, Title_module },
  data() {
    return {
      module: {},
      metadata: []
    }
  },
  computed: {
    handleMetadata() {
      let result = []
      this.metadata.forEach(item => {
        item.data_column = JSON.parse(item.data_column)
        result.push(item)
      })
      return result
    }

  },
  async fetch() {
    this.module = await this.$axios.$get('/api/module/' + this.id)
    this.metadata = JSON.parse(this.module.module_metadata)
    this.metadata = JSON.parse(this.metadata)
  }
}
</script>

<style scoped>

</style>
