<template>
  <div id="app">
      <div class="container__dashboard--align">
      <div class="row">
          <div class="col s6">
      <OnlineForecast class="char__first--offset"></OnlineForecast>
      <ReasonForBuy></ReasonForBuy>
          </div>
          <div class="col s6">
              <PopularDietBar class="char__first--offset"></PopularDietBar>
              <BuyPurposeBar></BuyPurposeBar>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
  import OnlineForecast from "@/components/OnlineForecast";
  import ReasonForBuy from "@/components/ReasonForBuy";
  import PopularDietBar from "@/components/PopularDietBar";
  import BuyPurposeBar from "@/components/BuyPurposeBar";
  export default {
  name: 'App',
  components: {
    OnlineForecast,
      ReasonForBuy,
      PopularDietBar,
      BuyPurposeBar
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
.container__dashboard--align
    margin-left: 20px
    margin-right: 20px
    margin-top: 20px

.char__first--offset
    margin-bottom: 40px
</style>
