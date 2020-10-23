<template>
    <div class="input-field select__filter" ref="select_wrapper">
        <select id="filter" ref="select" v-model="value" @change="change_select()">
            <option value="" disabled selected><slot></slot></option>
            <option v-for="obj in objects" :value="obj.value" :key="obj.value">{{obj.name}}</option>
        </select>
    </div>
</template>

<script>
    import M from 'materialize-css'
    import MI from '@/components/ui_elements/select_alt.sass'

    export default {
        name: "SelectAlternative",
        props: {
         objects: Array
        },
        data: function () {
            return {
                value: ""
            }
        },
        mounted() {
            let select = this.$refs.select;
            M.FormSelect.init(select, select.options);
            console.log(MI);
        },
        methods: {
            change_select() {
                this.$emit('select-choose', this.value);
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>