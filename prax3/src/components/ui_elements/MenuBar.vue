<template>
    <div>
    <nav class="nav-extended">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="nav-wrapper nav__menu--small">
            <span class="brand-logo center text__logo--black">{{$route.name}}</span>
            <ul class="hide-on-large-only left">
                <li><a href="#" class="text__logo--black sidenav-trigger a__menu-position" data-target="slide-out">
                    <i class="material-icons left ">menu</i></a></li>
            </ul>
            <ul class="right ul__personal-data">
                <li v-if="$route.meta.is_login" class="hide-on-extra-sm hide-on-large-only">
                    <a href="#" class="btn btn-small button__secondary--small">1.90 &euro;
                        <i class="material-icons right">add</i></a></li>
                <li v-if="$route.meta.is_login" class="hide-on-med-and-down">
                    <a href="#" class="btn btn-small button__secondary--small">1.90 &euro;</a></li>
                <li v-if="$route.meta.is_login" class="hide-on-med-and-down">
                    <a  href="#" class="btn btn-small button__secondary--small">
                    <i class="material-icons center">add</i></a></li>
            </ul>

        </div>
        <div class="nav-content nav__menu--small hide-on-med-and-down nav__tab--black">
            <ul class="tabs tabs-transparent">
                <li class="tab"><a v-if="$route.meta.is_login">
                    <router-link to="/road">Konstrueri marsruut</router-link></a>
                    <a v-else><router-link to="/">Logi sisse</router-link></a></li>
                <li class="tab"><a>Serverist</a></li>
                <li class="tab"><a>Jälgitud kauplused</a></li>
                <li class="tab"><a>Kontaktid</a></li>
                <li v-if="$route.meta.is_login" class="tab"><a><router-link to="/">Logi välja</router-link></a>
                </li>
            </ul>
        </div>
    </nav>
        <ul id="slide-out" class="sidenav">
                <li><a v-if="$route.meta.is_login">
                    <router-link to="/marsruut">Konstrueri marsruut</router-link></a>
                    <a v-else><router-link to="/">Logi sisse</router-link></a></li>
                <li><a>Serverist</a></li>
                <li><a>Jälgitud kauplused</a></li>
                <li><a>Kontaktid</a></li>
                <li v-if="$route.meta.is_login"><a><router-link to="/">Logi välja</router-link></a></li>
        </ul>
    </div>
</template>

<script>
    import M from 'materialize-css'

    export default {
        name: "MenuBar",
    mounted() {
            let el = this.$el.querySelectorAll('.sidenav')[0];
            M.Tabs.init();
            M.Sidenav.init(el, el.options)
    }
    }
</script>

<style scoped lang="sass">
    @import "../text_style"
    // @use "sass:color"

    $primary-color: #EDB808
    $primary-text: #000000
    $secondary-color: #312F2F
    $secondary-text: #FFFFFF

    %primary-theme
        color: $primary-text
        background-color: $primary-color
        font-size: 20px

    .nav__menu--small
        @extend %primary-theme

    nav .text__logo--black
        @extend .text--usual
        color: $primary-text
        left: 50%

    .nav__tab--black
        & > ul.tabs.tabs-transparent
            & > li.tab
                & > a
                    color: grey
                    & > a
                        padding: 0
                        color: grey
                & > a:hover
                    color: $primary-text
                    & > a
                        padding: 0
                        color: $primary-text
                & > a.active
                    color: $primary-text
                    & > a
                        padding: 0
                        color: $primary-text

    .ul__person
        & > li
            & > a > a
                color: gray

    @mixin button-style($background, $color)
        @include text-style
        background-color: $background
        color: $color

    .button__secondary--small
        @include button-style($secondary-color, $secondary-text)
        width: 130px
        height: 31px
        border-radius: 200px
        font-size: 17px
        &:focus
            @include button-style($secondary-color, $secondary-text)

    .a__menu-position
        position: static
        margin: 0

    .hide-on-extra-sm
        @media only screen and (max-width: 400px)
            display: none
</style>