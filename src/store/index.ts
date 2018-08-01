import Vue from "vue";
import Vuex, { Commit, Dispatch } from "vuex";
import cart, { State as CartState } from './modules/cart'
import products, { State as ProductsState } from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    products
  }
});

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}

export interface State {
  cart: CartState,
  products: ProductsState
}

export interface Product {
  id: number,
  title: string,
  price: number,
  inventory: number
}

export interface CartProduct {
  title: string,
  price: number,
  quantity: number
}

export interface AddToCartPayload {
  id: number
}