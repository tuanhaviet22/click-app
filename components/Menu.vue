<template>
  <nav class='main-navigation' data-animate="fadeInDown" data-delay=".75">
    <div class="header-menu">
      <ul>
        <li v-for='item in menu[0]'
            :class='[item.children ? "has-sub" : ""]'>
          <a :href='item.url'
             class='mainmenu__link'>{{ item.title }}</a>
          <ul class='megamenu five-column' v-if='item.children'>
            <li class='has-children' v-for='_item in item.children'>
              <a class='megamenu-title' :href='_item.url'>{{ _item.title }}</a>
              <ul v-if='_item.children'>
                <li v-for='__item in _item.children'>
                  <a :href='__item.url'>{{ __item.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      menu: []
    }
  },
  async fetch() {
    this.menu = await this.$axios.$get('/api/menu')
  }
}
</script>

