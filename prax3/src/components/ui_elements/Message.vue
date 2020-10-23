<template>
    <div class="card message--central">
        <div class="card-content">
            <p class=text--usual>{{message_text}}</p>
        </div>
        <div class="card-content center">
            <div class="row">
                <div v-for="but in buttons" :key="but.value" class="col s12 l6">
                    <div class="div__delimeter--hidden waves-effect waves-light hide-on-large-only col s12"
                         v-if="but.value !== last">delim</div>
                    <router-link :to="but.route_link">
                        <a class="btn-large waves-effect waves-light"
                       v-bind:class="{button__primary: but.value === last, button__secondary: but.value !== last
                       , 'button--font-small': but.small}" >{{but.value}}</a></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            text: String,
            options: Array,

        },
        data: function() {
            return {
                message_text: this.text,
                buttons: this.options,
                last: this.options[0].value
            }
        },
        created:
        function() {
            console.log('why')
        },
        mounted() {

        }
    }
</script>

<style lang="sass" scoped>
    @use "sass:color"
    @import "../text_style"

    $primary-text: #000000
    $primary-color: #EDB808
    $secondary-color: #312F2F
    $secondary-text: #FFFFFF

    %button-shape
        height: 52px
        width: 201px
        border-radius: 200px

    %mesage-shape
        border-radius: 24px
        align-self: center

    %mesage-style
        color: $primary-text

    .message--central
        @extend %mesage-shape
        @extend %mesage-style


    @mixin button-style($background, $color)
        @include text-style
        background-color: $background
        color: $color
        padding: 0

    .button__primary
        @extend %button-shape
        @include button-style($primary-color, $primary-text)

    .button__secondary
        @extend %button-shape
        @include button-style($secondary-color, $secondary-text)

    .text--usual
        @include text-style
        text-align: center

    .div__delimeter--hidden
        visibility: hidden

    .button--font-small
        font-size: 16px

    // @mixin on-hover($button-name, $color)
        .#{$button-name}:hover
             background-color: color.scale($color, $lightness: 30%)

    //@mixin on-visited($button-name, $color)
        //.#{$button-name}:visited
        //    background-color: color.scale($color, $lightness: 30%)

    // @include on-hover("button__primary", $primary-color)
    // @include on-hover("button__secondary", $secondary-color)

    // @include on-visited("button__primary", $primary-color)
    // @include on-visited("button__secondary", $secondary-color)
</style>