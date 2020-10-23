<template>
    <div>
    <SubMenu class="hide-on-large-only" :tabs="tabs" :s_active="tabs[0]"
             @tab-click="tab_change"> </SubMenu>
<Container>
    <div class="row">
        <ul :class="['collection','with-header','col','s12','l6', {'hide-on-med-and-down': !is_order}]">
            <li class="collection-header hide-on-med-and-down"><h4 class="text--usual">Toit</h4></li>
            <!--<li v-for="order in $store.getters('products/getDebug')" :key="order"> {{order}}</li> -->
            <OrderRow v-for="order in products"
                      :value="order.price" :name="order.name" :id="order.id" :key="order.id"
                      :image="order.image" :retsepts="order.retsepts">
            </OrderRow>
        </ul>
        <ul :class="['collection','with-header','col','s12','l6', {'hide-on-med-and-down': is_order}]">
            <li class="collection-header hide-on-med-and-down"><h4 class="text--usual">Retsept</h4></li>
            <OrderRow v-for="order in recipes" :value="order.price"
                      :name="order.name" :id="order.id"
                      :image="order.image" :key="order.id"
                      :retsepts="order.products">
            </OrderRow>
        </ul>
    </div>
    <ButtonMaterial icon="shopping_cart" :but_style="['button__primary--extra-width']"
                    :disable="is_product_chosen" @click_button="rorute_to">
        Vali tooteid(<span id="sum">{{decor_sum($store.state.products.sum)}}</span>&euro;)</ButtonMaterial>
</Container>
    </div>
</template>

<script>
    import Container from "@/components/ui_elements/Container";
    import OrderRow from "@/components/ui_elements/OrderRow";
    import ButtonMaterial from "@/components/ui_elements/ButtonMaterial";
    import SubMenu from "@/components/ui_elements/SubMenu";
    import Api from "../api"

    export default {
        name: "ProductChoose",
        components: {SubMenu, Container, OrderRow, ButtonMaterial},
        props: {
          shops_id: {
             type: Array,
             default: () => [0,1]
          },
          category: {
             type: Array,
             default: () => []
          }
        },
        data: function(){
            return {
                is_order: true,
                products: [],
                recipes: [],
                items: [],
                tabs: ['Tooded','Retseptid']
            }
        },
        computed: {
          is_product_chosen: function() {
             return this.$store.state.products.items_count === 0;
          }
        },
        mounted() {
            new Api().getData().then(data => {
                this.$store.dispatch("products/setData", data).then(() => {
                    this.$store.dispatch('products/get_products',[this.shops_id, this.category])
                        .then(products => {
                            this.products = products;
                            this.$store.dispatch('products/get_recipes').then(recipes => this.recipes = recipes)})
            })});
        },
        methods: {
            decor_sum(val) {
                let price = val.toString();
                let index_val = price.indexOf('.');
                // console.log(index_val);
                let val_length = price.length;
                if (index_val === -1) {
                    return price + '.00';
                }
                if (val_length === index_val + 2) {
                    return price + '0';
                }
                if (val_length > index_val + 2) {
                    let value = Math.round(val * 100).toString();
                    if (value.length < 3) {
                        value = '000'.substr(0, 3 - value.length) + value;
                    }
                    return value.substr(0, value.length - 2) + '.'
                        + value.substr(value.length - 2);
                }
                return price
            },
            tab_change(val) {
                if (this.is_order === true && val === this.tabs[1]) {
                    this.is_order = false;
                }
                if (this.is_order === false && val === this.tabs[0]) {
                    this.is_order = true;
                }
            },
            rorute_to() {
                this.$router.push('/road_track');
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "text_style"
</style>