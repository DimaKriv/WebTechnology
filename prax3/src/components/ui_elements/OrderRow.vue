<template>
    <li class="collection-item avatar">
        <img :src="is_chosen ? image_valid : image_location"
             alt="product" class="img__product circle" @click="validate"/>
        <span>{{name}}</span>
        <span class="secondary-content">{{price_str}}{{currency}}</span></li>
</template>

<script>

    import choose  from '@/assets/choosen_product_alt.png'

    export default {
        name: "OrderRow",
        props: {
            value: Number,
            name: String,
            currency: {
                type: String,
                default: '€'
            },
            id: Number,
            retsepts: {
                type: Array,
                default: null
            },
            image: String
        },
        data: function () {
            return {
                price_str: '0.00',
                image_valid: choose,
                image_location: null
            }
        },
        created() {
            this.image_location = process.env.BASE_URL + this.image;
            this.price_str = this.decorate_val(this.value);
        },
        computed: {
            is_chosen: function() {
                if (this.retsepts === null) {
                    return this.$store.state.products.is_chosen_product[this.id] === true
                } else {
                    return this.$store.state.products.is_chosen_recipe[this.id] === true;
                }
            }
        },
        methods: {
            decorate_val(val) {
                let price = val.toString();
                // console.log(price);
                let point_ind =  price.indexOf('.');
                if (point_ind === -1) {
                    price += '.00';
                    return price;
                }
                if (point_ind + 3 <= price.length) {
                    // console.log(point_ind + 2);
                    price = Math.round(val * 100).toString();
                    if (price.length < 3) {
                        price = '000'.substr(0, 3 - price.length) + price;
                    }
                    price = price.substr(0,price.length - 2) + '.' +  price.substr(price.length - 2);
                } else {
                    price += '0';
                }
                return price;
            },
            validate() {
                if (this.retsepts === null) {
                    this.validate_product();
                } else {
                    this.validate_recipe();
                }
            },
            validate_product() {
                if (this.$store.getters['products/get_product'](this.id) === false) {
                    this.$store.dispatch('products/product_chose', this.id);
                } else {
                    this.$store.dispatch('products/product_unchose', this.id);
                }
            },
            validate_recipe() {
                if (this.$store.getters['products/get_recipe'](this.id) === false) {
                    this.$store.dispatch('products/recipe_chose', this.id);
                } else {
                    this.$store.dispatch('products/recipe_unchose', this.id);
                }
            }
        }
    }
</script>

<style lang="sass" scoped>

    .img__product
        width: 50px
        height: 50px

    .img__product--back
        background-size: cover
        background-repeat: no-repeat

</style>