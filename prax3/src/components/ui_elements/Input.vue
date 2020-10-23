<template>
    <div class="row">
        <ValidationProvider v-slot="{errors}" rules="required">
        <div class="text__input--usual col s6 input__height">{{name}}</div>
        <div class="input-field input__registration col s6 input__height">
            <input :placeholder="place_holder" v-model="value" id="first_name" :type="input_type" class="validate">
            <label for="first_name" class="active"><span class="input__label">{{short_name}}</span></label>
            <div class="span__error--invalid">{{errors[0]}}</div>
        </div>
        </ValidationProvider>
    </div>
</template>

<script>

    import {ValidationProvider, extend} from 'vee-validate';
    import {required} from 'vee-validate/dist/rules';

    extend('required', {
        ...required,
        message: '* kohuslik rida'

    });

    export default {
        name: "Input",
        components: {
          ValidationProvider
        },
        props: {
            name: String,
            short_name: String,
            place_holder: String,
            rules: {
                type: Array,
                default: () => ['required']
            },
            errors: {
                type: Object,
                default: () => {}
            },
            input_type: {
                type: String,
                default: 'text'
            }
        },
        data: function() {
          return {
              value: ''
          }
        },
        watch: {
            value: function(val){
                this.$emit('input', val);
            }
        },
        methods: {

        }
    }
</script>

<style lang="sass" scoped>
    @import "input_style"

    .span__error--invalid
        font-size: 10px
        color: red
        height: 10px
        text-align: left

    .input__height
        height: 82px
        margin-bottom: 0
        margin-top: 15px
</style>