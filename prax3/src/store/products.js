import Vue from "vue";

const state = {
    data: [],
    products: [],
    shops: [],
    recipes: [],
    sum: 0,
    items_count: 0,
    is_chosen_product: {},
    is_chosen_recipe: {},
    chosen_product: {},
    chosen_recipe: {}
};

const getters = {
    get_products: (state, getters) => (shop_ids, category)  => {
       let ids = shop_ids.flatMap(id => getters.get_shop_products(id)).filter(id => id !== undefined);
       ids = new Set(ids);
       return state.products.filter(el => {
              if (ids.has(el.id)) {
                  let product_category =  new Set(el.category);
                  let not_used_cat = category.filter(el => !product_category.has(el));
                  if (not_used_cat.length === 0) {
                      return true;
                  }
              }
              return false;
           });
    },
    get_shop_products: (state) =>  (shop_id) => {
       let shop =  state.shops.find(shop => shop.id === shop_id);
       if (shop !== undefined) {
           return shop.products;
       }
       return undefined;
    },

    get_recipes: (state) => {
       return state.recipes.filter(recipe => {
            let r = recipe.products.map(
                product_variants => {
                    return product_variants.filter(product =>
                            Object.keys(state.chosen_product).includes(product.toString()));
                });
            return  r.every(p => p !== []);
        });
    },
    get_product:(state) => (id) => state.is_chosen_product[id] === true,
    get_recipe:(state) => (id) => state.is_chosen_recipe[id] === true
};

const actions = {

    setData(context, data) {
        context.commit('setData', data);
    },
    get_products(context, [ids, category]) {
        let products = context.getters.get_products(ids, category);
        products.forEach(product => context.commit('add_product', product));
        return products;
    },
    get_recipes(context) {
        let recipes = context.getters.get_recipes;
        recipes.forEach(r => {
            let product_list = r.products;
            let sum = 0;
            for (let i = 0; i < product_list.length; i++) {
                product_list[i].forEach(p => {
                    context.commit('add_recipe_to_product', [p, r.id, i]);
                    sum += context.state.chosen_product[p].price;
                });
            }
            context.commit('add_recipe', [r, sum]);
        });
        return recipes;
    },
    recipe_chose(context, id) {
        context.state.chosen_recipe[id].products
            .forEach(pv =>  {
                context.commit('product_chose', pv[0])
            });
        context.commit('recipe_chose', id);
    },
    recipe_unchose(context, id) {
        context.state.chosen_recipe[id].products
            .forEach(pv => {
                let product = pv.find(id => context.state.is_chosen_product[id]);
                context.commit('product_unchose', product);
            });
        context.commit('recipe_unchose', id);
    },
    product_chose(context, id) {
        context.commit('product_chose', id);
    },
    product_unchose(context, id) {
        let product_r = context.state.chosen_product[id].recipes;
        if (product_r !== undefined) {
            product_r.filter(arr => context.state.is_chosen_recipe[arr[0]] === true)
                .forEach(arr => {
                    let len_item = context.state.chosen_recipe[arr[0]].products[arr[1]].filter(pid =>
                        context.state.is_chosen_product[pid] === true).length;
                    if (len_item === 1) {context.commit('recipe_unchose', arr[0])}
                } )
        }
        context.commit('product_unchose', id);
    }
};

const mutations = {
    setData(state, data) {
        state.data = data;
        if (state.products !== data.products) {
            state.products = data.products;
        }
        if (state.shops !== data.shops) {
            state.shops = data.shops;
        }
        if (state.recipes !== data.recipes) {
            state.recipes = data.recipes;
        }
        },
    add_product(state, product) {
        state.chosen_product[product.id] = product
    },

    add_recipe_to_product(state, [product, recipe, item_num]) {
        let recipes_product = state.chosen_product[product].recipes;
        if (recipes_product === undefined) {
            state.chosen_product[product].recipes = [[recipe, item_num]];
        } else {
            recipes_product.push([recipe, item_num]);
            }
        },

    product_chose(state, id) {
        if (state.is_chosen_product[id] !== true) {
            let value = state.chosen_product[id].price;
            state.sum += value;
            state.items_count += 1;
        }
        Vue.set(state.is_chosen_product, id, true);
    },
    product_unchose(state, id) {
        if (state.is_chosen_product[id] === true) {
            let value = state.chosen_product[id].price;
            state.sum -= value;
            state.items_count -= 1;
        }
        Vue.set(state.is_chosen_product, id, false);
    },

    add_recipe(state, [recipe, sum]) {
        recipe.price = sum;
        state.chosen_recipe[recipe.id] = recipe;
        state.chosen_recipe[recipe.id].chosen_product = [];
    },

    recipe_chose(state, id) {
        Vue.set(state.is_chosen_recipe, id, true);
    },
    recipe_unchose(state, id) {
        Vue.set(state.is_chosen_recipe, id, false);
    },
    reset_chose(state) {
        state.items_count = 0;
        state.is_chosen_product = {};
        state.is_chosen_recipe = {};
        state.sum = 0;
        state.chosen_product = {};
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}