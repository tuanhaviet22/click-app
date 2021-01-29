<template>
  <nav class='main-navigation' style='display: block;'>
    <ul class='mainmenu'>
      <li class='mainmenu__item' v-for='item in menu[0]'
          :class='[item.children ? "menu-item-has-children" : ""]'>
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

