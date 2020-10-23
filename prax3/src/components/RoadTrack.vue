<template>
    <Container>
        <div class="container">
            <div class = 'row'>
                <div class="text--usual col s12 section">Marsruut</div>
                <img :src="img_map" ref="image" class="container__map col s12 l6"/>
                <div class="col s12 l5">
                    <ul class="collection list__box col s12">
                        <li class="collection-item" v-for="order in ['Maxima', 'Selver']" :key="order">
                            {{order}}<label class="right"><input type="checkbox"/><span></span>
                        </label></li>
                    </ul>
                <div class="col s12 center">
                    <div class="col s12">
                    <ButtonMaterial :but_style="['button__secondary', 'button__primary--lg-width']"
                    @click_button="to_order">Muuta ostukorv</ButtonMaterial></div>
                    <div class="div__delimeter--hidden col s12">delim</div>
                    <div class="col s12">
                    <ButtonMaterial :but_style="['button__primary--lg-width']"
                                    @click_button="to_thank">Lõpeta tee</ButtonMaterial></div>
                </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script>

    import map3 from '@/assets/map_3.png'
    import Container from "@/components/ui_elements/Container";
    import ButtonMaterial from "@/components/ui_elements/ButtonMaterial";

    export default {
        name: "MarsruutTrack",
        components: {Container, ButtonMaterial},
        data: function () {
            return {
                img_map: map3
            }
        },
        methods: {
            to_order() {
                this.$router.push('/orders')
            },
            to_thank() {
                this.$router.push('/thanks')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "text_style"

    .div__delimeter--hidden
        visibility: hidden

    .container__map
        height: 316px
        margin: 10px
        object-fit: cover
        object-position: 0 0

    .list__box
        border: solid

</style>