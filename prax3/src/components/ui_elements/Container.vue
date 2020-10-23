<template>
    <div class="container__source--border">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style lang="sass" scoped>
    .container__source--border
        padding: 5px
        margin: 10px 10px 0 10px
        background-color: white
</style>