<template>
    <div class="row">
        <ValidationProvider v-slot="v" rules="choose|required">
        <div class="text__input--usual col s6">{{name}}</div>
        <div class="input-field col s6 input__registration" ref="input">
                <label class="active label__select" ><span class="input__label">{{short_name}}</span></label>
                <select v-model="value" @change="change(value)">
                    <option value="" disabled selected>{{placeholder}}</option>
                    <option v-for="ar in array" :value="ar.value" :key="ar.value">{{ar.name}}</option>
                </select>
            </div>
            <span>{{v.errors[0]}}</span>
        </ValidationProvider>
        </div>
</template>

<script>

    import M from 'materialize-css'
    import MI from '../../assets/style/materialze_dynamic.css'
    import {ValidationProvider, extend} from 'vee-validate'
    import {required} from 'vee-validate/dist/rules'

    extend('required', {
        ...required
    });

    extend('choose', {
        validate(value) {
            // console.log(value.toString() + ' validate');
            return value.toString().trim().length > 1 ;
        },
        message: (value) => {
            return value.toString() + ' my val'
        }
    });

    export default {
        name: "Select",
        components: {ValidationProvider},
        props: {
            name: String,
            short_name: String,
            placeholder: String,
            array: Array
        },
        data: function() {
          return {
              value: ''
          }
        },
        mounted() {
            let select = this.$el.querySelectorAll('select');
            M.FormSelect.init(select, select.options);
            console.log(MI);
            //this.$refs.input.classList.add(MI);
            // let cl_input = this.$el.querySelector('.input-vue');
            // console.log(getComputedStyle(cl_input));
        },
        methods: {
          change(val) {
              if (val === undefined) {
                  // console.log('not defined');
              } else {
                  // console.log('define');
                  // console.log(val);
                  this.$emit('select-choose', val);
              }
          }
        }
    }
</script>

<style lang="sass" scoped>
    @import "input_style"

    .label__select
        z-index: 2

</style>