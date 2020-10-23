<template>
    <div class="index__view">
        <Message text="Äitah, kasutamise eest, kas soovite plaanerida uus marsruut kohe" v-bind:options="[
            {value:'Uus marsruut', route_link: '/road', small: true}
          , {value: 'Tagasi', route_link: '/road_track', small: false}]"></Message>
    </div>
</template>

<script>
    import Message from "@/components/ui_elements/Message";
    export default {
        name: "Index",
        components: {Message}
    }
</script>

<style lang="sass" scoped>
    .index__view
        flex-direction: column
        justify-content: center
        align-content: center
        @media only screen and (min-width: 430px)
            display: flex
            height: calc(100vh - 112px)
</style>