<template>
  <div class="shopping-cart">
    <h2>Products</h2>
    <product-list />
    <hr>
    <cart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue"
@Component({
  components: {
    ProductList,
    Cart
  }
})
export default class ShoppingCart extends Vue {}
</script>

<style lang="scss" scoped>
.shopping-cart {
  padding: 0 0 40px 0;
}
</style>
