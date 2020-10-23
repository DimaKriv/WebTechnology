<template>
    <a class="waves-effect waves-light btn-small button__primary" :class="button_style"
    @click="$emit('click_button')">
        <i v-if="icon != null" class="material-icons left">{{icon}}</i><slot></slot></a>
</template>

<script>
    export default {
        name: "ButtonMaterial",
        props: {
            icon: {
                default: null,
                type: String
            },
            disable: {
                type:Boolean,
                default: false
            },
            but_style: Array
        },
        data: function () {
            return {
                button_style: null
            }
        },
        mounted() {
            this.button_style = [...this.but_style];
            this.button_state();
        },
        watch: {
            disable: function () {
                this.button_state()
            }
        },
        methods: {
            button_state() {
                if (this.disable === true){
                    this.button_style.push('disabled');
                } else {
                    let index = this.button_style.indexOf('disabled');
                    if (index > -1 ) {
                        this.button_style.splice(index, 1);
                    }
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../text_style"

    $primary-color: #EDB808
    $primary-text: #000000
    $secondary-color: #312F2F
    $secondary-text: #FFFFFF

    %button-shape
        height: 52px
        width: 201px
        border-radius: 200px

    @mixin button-style($background, $color)
        @include text-style
        background-color: $background
        color: $color

    .button__primary
        @extend %button-shape
        @include button-style($primary-color, $primary-text)

    .button--right-align
        position: relative
        float: right

    .button--size-sm
        height: 38px

    .button__primary--lg-width
        line-height: 52px
        width: 300px

    .button__primary--extra-width
        line-height: 52px
        width: 375px

    .button__secondary
        @extend %button-shape
        @include button-style($secondary-color, $secondary-text)

</style>