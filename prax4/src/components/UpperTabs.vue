<template>
    <div class="row">
        <div class="col s12">
            <ul class="tabs tabs__up">
                <li class="tab col s3 "><router-link to="/">kasutamise aeg</router-link></li>
                <li class="tab col s3"><router-link to="/filter_bar">filtride kasutamine</router-link></li>
                <li class="tab col s3"><router-link to="/year">aasta kasutajad</router-link></li>
                <li class="tab col s3"><router-link to="/trend">filtride trend </router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import M from 'materialize-css'
    export default {
        name: "UpperTabs",
        mounted() {
            M.Tabs.init()
        }
    }
</script>

<style lang="sass" scoped>
    .tabs__up
        & > li
            & > a
                color: darkslategrey
                &[class~='router-link-exact-active']
                    border-bottom: 2px solid darkslategrey
</style>