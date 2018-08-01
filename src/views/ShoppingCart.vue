<template>
  <div class="shopping-cart">
    <shopping-cart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShoppingCartComp from "@/components/ShoppingCart/index.vue";
@Component({
  components: {
    ShoppingCart: ShoppingCartComp
  }
})
export default class ShoppingCartViews extends Vue {}

</script>
