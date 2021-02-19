<template>
  <div class='__app'>
    <div v-for='module in handleArrayModule'>
      <Banner :id='module.id' v-if="module.type == 'banner'" />
      <BannerCategory :id='module.id' v-if="module.type == 'banner-category'" />
      <Statistic :id='module.id' v-if="module.type == 'statistic'" />
      <Features :id='module.id' v-if="module.type == 'features'" />
      <Procedure :id='module.id' v-if="module.type == 'procedure'" />
      <Customer :id='module.id' v-if="module.type == 'customer'" />
      <Partner :id='module.id' v-if="module.type == 'partner'" />
      <Benefits :id='module.id' v-if="module.type == 'benefits'" />
      <History :id='module.id' v-if="module.type == 'history'" />
      <Intro :id='module.id' v-if="module.type == 'intro'" />
      <Personnel :id='module.id' v-if='module.type =="personnel"' />
      <Price :id='module.id' v-if='module.type =="price"' />
      <CoreValue :id='module.id' v-if='module.type =="price"' />
      <!--      <Intro_editor :id="module.id" v-if="module.type == 'intro_editor'"/>-->
      <Mission :id='module.id' v-if='module.type =="mission"'/>
      <Post :id='module.id' v-if="module.type == 'post'" />
    </div>
  </div>
</template>

<script>

import Banner from '@/components/LandingPage/banner'
import Post from '@/components/LandingPage/post'
import BannerCategory from '@/components/LandingPage/banner-category'
import Statistic from '@/components/LandingPage/statistic'
import Features from '@/components/LandingPage/features'
import Procedure from '@/components/LandingPage/procedure'
import Customer from '@/components/LandingPage/customer'
import Partner from '@/components/LandingPage/partner'
import Benefits from '@/components/LandingPage/benefits'
import Intro_editor from '@/components/LandingPage/intro_editor'
import History from '@/components/LandingPage/history'
import Intro from '@/components/LandingPage/intro'
import Mission from  '@/components/LandingPage/mission'
import CoreValue from  '@/components/LandingPage/cores_value'
export default {
  components: {
    Intro_editor,
    Benefits,
    Partner,
    Customer,
    Procedure,
    Features,
    Statistic,
    BannerCategory,
    Banner,
    Post,
    History,
    Intro,
    Mission,
    CoreValue
  },
  data() {
    return {
      info: {},
      modules: [],
      modulesBlade: []
    }
  },
  head() {
    return {
      title: this.info.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
          this.info.meta_description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.meta_key
        }
      ]
    }
  },
  computed: {
    handleArrayModule() {
      let result = []
      this.modules.forEach((item, key) => {
        let data = {
          id: item,
          blade: this.modulesBlade[key],
          type: this.handleStringBlade(this.modulesBlade[key])
        }
        result.push(data)
      })
      return result
    }
  },
  methods: {
    handleStringBlade(string) {
      return string.substr(0, string.length - ((string).split('-'))[(string).split('-').length - 1].length - 1)
    }
  },
  asyncData({ $axios }) {
    return $axios.get('/api/homepage').then(response => {
      return {
        info: response.data[0],
        modules: (response.data[0].page_modules).split(','),
        modulesBlade: (response.data[0].page_module_blade).split(',')
      }
    })
  }
}
</script>
