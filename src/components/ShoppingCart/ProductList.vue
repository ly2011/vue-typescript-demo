<template>
  <ul class="list">
    <li v-for="item in products" :key="item.id">
      {{item.title}} - {{item.price}}
      <br>
      <button :disabled="!item.inventory" @click="addToCart(item)">添加到购物车</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue  } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'

@Component({})
export default class ProductList extends Vue {
  @Getter('allProducts') public products: any;
  @Action('getAllProducts') public getAllProducts!: any;
  @Action('addToCart') public addToCart!: any;

  public created() {
    this.getAllProducts();
  }
}
</script>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  padding-left: 0;

  li {
    padding: 5px 0;
  }
}
</style>
