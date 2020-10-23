import Vue from 'vue';
import Vuex from 'vuex';
import products from './products'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        abc: "der"
    },
    getters: {
      get_abc: state => {
          return state.abc;
      }
    },
    mutations: {
        add_char(state, char) {
            state.abc += char;
        }
    },
    modules: {
        products: products
    }
});