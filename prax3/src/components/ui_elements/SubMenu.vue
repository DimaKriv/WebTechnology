<template>
    <nav>
        <div class="nav-wrapper nav__menu--small nav__tab--black row">
            <ul class="tabs tabs-transparent">
                <li v-for="tab in tabs" :key="tab" class="tab col s6">
                    <a :class="{'active': active === tab}" @click="tab_click(tab)">{{tab}}</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>

    import M from 'materialize-css'

    export default {
        name: "SubMenu",
        props:{
            tabs: Array,
            s_active: String
        },
        data: function () {
         return {
             active: ''
         }
        },
        mounted() {
            this.active = this.s_active;
            M.Tabs.init();
        },
        methods: {
            tab_click(tab) {
                this.active = tab;
                this.$emit('tab-click', tab);
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../text_style"

    $primary-color: #EDB808
    $primary-text: #000000

    nav .text__logo--black
        @extend .text--usual
        color: $primary-text
        left: 50%

    %primary-theme
        color: $primary-text
        background-color: $primary-color
        font-size: 20px

    .nav__menu--small
            @extend %primary-theme

    .nav__tab--black
        & > ul.tabs.tabs-transparent
            & > li.tab
                & > a
                    color: grey
                & > a:hover
                    color: $primary-text
                & > a.active
                    color: $primary-text
</style>