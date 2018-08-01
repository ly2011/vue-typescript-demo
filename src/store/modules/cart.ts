import { GetterTree, ActionTree } from 'vuex'
import shop from '@/api/shop'
import * as types from "@/store/mutation-types"
import { ActionContextBasic, Product, CartProduct, AddToCartPayload } from '@/store'

interface Shape {
  id: number,
  quantity: number
}

export interface State {
  added: Shape[]
}

const initState: State = {
  added: []
}

const getters: GetterTree<State, any> = {
  cartProducts: (state: State, getters, rootState, rootGetters) => {
    return state.added.map(item => {
      const product = rootGetters.allProducts.find((product: Product) => product.id === item.id)
      if(product) {
        const cartProduct: CartProduct = {
          title: product.title,
          price: product.price,
          quantity: item.quantity
        }
        return cartProduct
      }
      return null
    })
  }
}

const actions: ActionTree<State, any> = {
  addToCart(context: ActionContextBasic, product: Product) {
    if(product.inventory > 0) {
      const payload: AddToCartPayload = {
        id: product.id
      }
      context.commit(types.ADD_TO_CART, payload)
    }
  }
}

const mutations = {
  [types.ADD_TO_CART](state: State, payload: AddToCartPayload) {
    const record = state.added.find(item => item.id === payload.id)
    // 如果购物车还没存在该物品，则新添加
    if(!record) {
      state.added.push({
        id: payload.id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  }
}

export default {
  state: initState,
  getters,
  actions,
  mutations
}

