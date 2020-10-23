<template>
    <Container>
        <div class="container">
            <div class = 'row'>
                <div class="text--usual col s12 section">Vali tee lõpppunkt</div>
                <img :src="static_map[0]" ref="image" @click="next_img()" class="container__map col s12 l6"/>
                <div class="col s12 l5">
                    <Select :objects="[{value: 'kiirem kui 15 min', name: 'kiirem kui 15min'},
                    {value:'soodusega', name:'soodusega'}]" @select-choose="create_chip" class="col s12">
                        Vali filter</Select>
                    <div class=" col s12" id="chip_group">
                        <span class="div__delimeter--hidden div__delimeter--lg-height">del</span>
                        <Chip v-for="chip in chips" :key="chip" :name="chip" @chip-close="release_chip"></Chip>
                    </div>
                </div>
                    <div class="col s12 center">
                        <ButtonMaterial icon="location_on" :but_style="['button__primary--lg-width']"
                                        v-bind:disable="map_invalid"  @click_button="to_orders">
                            Loo marsruut</ButtonMaterial>
                    </div>
                </div>
            </div>
    </Container>
</template>

<script>

    import ButtonMaterial from '@/components/ui_elements/ButtonMaterial'
    import Select from '@/components/ui_elements/SelectAlternative'
    import Container from "@/components/ui_elements/Container";
    import Chip from "@/components/ui_elements/Chip";
    import map2 from '@/assets/map_1.png'
    import map3 from '@/assets/map_2.png'
    import map1 from '@/assets/map.png'
    // import axios from 'axios'

    export default {
        name: "Marsruut",
        components: {Chip, Container, ButtonMaterial, Select},
        data: function() {
          return {
              chips:[],
              static_map: [map1, map2, map3],
              index: 0,
              map_invalid: true,
          }
        },
        created() {
            this.$store.commit("products/reset_chose");
        },
        methods: {
            next_img() {
                if (this.index < 2) {
                    this.index += 1;
                    console.log(this.$refs.image.getAttribute('src'));
                    this.$refs.image.setAttribute('src', this.static_map[this.index]);
                    this.map_invalid = this.index < 2;
                    // console.log(this.map_invalid);
                }
            },
            create_chip(val) {
                let chip_index = this.chips.indexOf(val);
                // console.log(chip_index);
                if (chip_index === - 1) {
                    // console.log(this.chips);
                    this.chips.push(val);
                }
            },
            release_chip(val) {
                // console.log(this.chips  + ' close');
                let chip_index = this.chips.indexOf(val);
                if (chip_index > -1) {
                    this.chips.splice(chip_index, 1);
                    // console.log(this.chips);
                }
            },
            to_orders() {
                if (this.map_invalid === false) {
                    this.$router.push('/orders');
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "text_style"

    .container__map
        height: 316px
        margin: 10px
        object-fit: cover
        object-position: 0 0

    .div__delimeter--hidden
        visibility: hidden

    .div__delimeter--lg-height
        font-size: 36px

</style>