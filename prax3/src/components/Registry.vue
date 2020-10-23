<template>
<Container>
     <div class="row">
         <ValidationObserver v-slot="{invalid}">
         <Input class="col s12 l6" name="Nimi" short_name="nimi" place_holder="Kirjuta eesnimi"/>
         <Input class="col s12 l6" name="Perenimi" short_name="perenimi" place_holder="Kirjuta eesnimi"/>
         <Input class="col s12 l6" name="Kasutaja nimi" short_name="nimi" place_holder="Kirjuta perenimi"/>
         <Input class="col s12 l6" name="Lisa parool" short_name="parool" place_holder="Lisa parool"
                input_type="password"/>
         <Select class="col s12 l6" name="Makse viis" short_name="maksmine" placeholder="Vali makse viis"
                 v-bind:array="[{name: 'Visa', value:'visa'}, {name:'MasterCard', value:'master-card'},
                 {name:'PayPal', value:'pay-pal'}]"
                 @select-choose='get_payment_type'/>
         <Payment :payment="payment"></Payment>
         <div class="col s12 l6">
         <ButtonMaterial  :but_style="['button--size-sm', 'button--right-align']"
                         :disable="invalid" @click_button="registry(invalid)">Loo konto</ButtonMaterial>
         </div>
         </ValidationObserver>
     </div>
</Container>
</template>

<script>
    import Container from "@/components/ui_elements/Container";
    import Input from "@/components/ui_elements/Input";
    import Select from "@/components/ui_elements/Select";
    import Payment from "@/components/ui_elements/Payment";
    import ButtonMaterial from "@/components/ui_elements/ButtonMaterial";
    import {ValidationObserver} from 'vee-validate'
    //import {required} from 'vee-validate/dist/rules';

    export default {
        name: "registry",
        components: {ButtonMaterial, Payment, Select, Input, Container, ValidationObserver},
        data: function() {
            return {
                payment: null,
                v: {}
            }
        },
        methods: {
            get_payment_type(val) {
                this.payment = val;
                // console.log('Parent');
                // console.log(this.payment);
            },
            registry(invalid) {
                if (invalid === false) {
                    this.$router.push('/road');
                }
            }
        }
    }
</script>

<style scoped>

</style>