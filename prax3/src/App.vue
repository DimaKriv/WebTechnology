<template>
  <div id="app" class="container__source">
    <MenuBar></MenuBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "@/components/ui_elements/MenuBar";

export default {
  name: 'App',
  components: {
    MenuBar
  },
  data: function(){
    return {
      logo: this.$route.params.name
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.container__source
  min-height: 100vh
  background-image: url("assets/theme_gps.jpg")

html
  height: 100%

body
  height: 100%
</style>
