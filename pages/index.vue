<template>
  <div class="__app">
    <div v-for="module in handleArrayModule">
      <banner :id="module.id" v-if="module.type == 'banner'" />
      <post :id="module.id" v-if="module.type == 'post'"/>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Banner from '@/components/LandingPage/banner'
import Post from '@/components/LandingPage/post'
export default {
  components: { Banner,Post },
  data() {
    return {
      info : {},
      modules : [],
      modulesBlade : []
    }
  },
  head() {
    return {
      title : this.info.meta_title,
      meta : [
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
    handleArrayModule(){
      let result = [];
      this.modules.forEach((item,key) => {
        let data = {
          id : item,
          blade : this.modulesBlade[key],
          type : this.handleStringBlade(this.modulesBlade[key])
        }
        result.push(data)
      })
      return result
    }
  },
  methods :{
    handleStringBlade(string){
      return string.substr(0 ,string.length - ((string).split('-'))[(string).split('-').length - 1].length -1 )
    }
  },
  asyncData({$axios}){
    return $axios.get('/api/homepage').then(response => {
      return {
        info : response.data[0],
        modules : (response.data[0].page_modules).split(','),
        modulesBlade : (response.data[0].page_module_blade).split(',')
      }
    })
  }
}
</script>
