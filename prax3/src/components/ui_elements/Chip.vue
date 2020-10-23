<template>
    <div class="chip chip--primary">{{name}}<i class="close material-icons" @click="close()">close</i></div>
</template>

<script>
    import M from 'materialize-css'

    export default {
        name: "Chip",
        props: {
          name: String
        },
        mounted() {
            M.Chips.init();
        },
        methods: {
            close() {
                // console.log('close');
                this.$emit('chip-close', this.name);
            }
        }
    }
</script>

<style lang="sass" scoped>
    $primary-color: #EDB808

    .chip--primary
        background-color: $primary-color
</style>