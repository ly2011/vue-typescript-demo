<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="item in products" :key="item.id">
        {{item.title}} - {{item.price}} x {{item.quantity}}
      </li>
    </ul>
    <p>Total: {{total}}</p>
    <p>
      <button type="primary" :disabled="!products.length">Checkout</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from "vuex-class"
import { CartProduct } from '@/store'
@Component({})
export default class Cart extends Vue {
  @Getter('cartProducts') public products!: CartProduct[]

  get total(): number {
    return this.products.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }

  public created() {}
}
</script>

