<template>
    <div>
        <Input class="col s12 l6" v-if="payment !== null" name="Kardi num"
                short_name="kaard" place_holder="Kaardi number" />
        <BlankInput class="col s12 l6" v-else></BlankInput>
        <Input class="col s12 l6" v-if="is_csv" name="CSV kood" short_name="csv" place_holder="Sissenda csv kood" />
        <BlankInput class="col s12 l6" v-else></BlankInput>
    </div>
</template>

<script>
    import Input from "@/components/ui_elements/Input";
    import BlankInput from "@/components/ui_elements/BlankInput";

    export default {
        name: "Payment",
        components: {Input, BlankInput},
        props: {
            payment: String
        },
        data: function () {
            return {
                is_csv: false
            }
        },
        mounted() {
            this.init();
        },
        watch:{
            payment: function () {
                this.init()
            }
        },
        methods: {
            init() {
                switch (this.payment) {
                    case 'visa':
                        this.is_csv = false;
                        break;
                    case 'master-card':
                        this.is_csv = false;
                        break;
                    case 'pay-pal':
                        // console.log('p');
                        this.is_csv = true;
                        break;
                    default:
                        // console.log('b');
                        // console.log(this.payment);
                        break;
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "input_style"
</style>